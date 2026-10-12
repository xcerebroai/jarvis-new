import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(
  new URL("../src/lib/visual-motion.js", import.meta.url),
  "utf8",
);
const helper = source.slice(source.indexOf("/** Progressive enhancement:"));
class Element {
  constructor(top = 1200, options = {}) {
    Object.assign(this, {
      top,
      options,
      width: 300,
      height: 200,
      isConnected: true,
      children: [],
      style: { transform: "" },
      animations: [],
      attrs: {},
      listeners: new Map(),
      classes: new Set(),
    });
    this.classList = {
      add: (...xs) => xs.forEach((x) => this.classes.add(x)),
      remove: (...xs) => xs.forEach((x) => this.classes.delete(x)),
    };
  }
  closest(selector) {
    return selector.includes("form") && this.options.form ? this : null;
  }
  querySelector(selector) {
    return (selector.includes("iframe") && this.options.form) ||
      (selector.includes("a[href]") && this.options.control)
      ? {}
      : null;
  }
  querySelectorAll(selector) {
    if (selector === "h2, h3")
      return this.options.heading ? [this.options.heading] : [];
    return this.mapping?.[selector] || [];
  }
  getBoundingClientRect() {
    return {
      top: this.top,
      bottom: this.top + this.height,
      left: 0,
      right: this.width,
      width: this.width,
      height: this.height,
    };
  }
  contains(node) {
    return node === this || node?.parent === this;
  }
  setAttribute(k, v) {
    this.attrs[k] = v;
  }
  removeAttribute(k) {
    delete this.attrs[k];
  }
  addEventListener(k, v) {
    this.listeners.set(k, v);
  }
  removeEventListener(k) {
    this.listeners.delete(k);
  }
  animate(frames, options) {
    if (this.options.throw) throw Error("Unsupported animation");
    const animation = {
      frames,
      options,
      cancelled: false,
      cancel() {
        this.cancelled = true;
      },
    };
    this.animations.push(animation);
    return animation;
  }
}
function setup(cards, { paused = false, hidden = false, io = true } = {}) {
  const root = new Element(),
    home = new Element();
  home.mapping = { ".home-feature-grid > .home-feature": cards };
  root.querySelector = (selector) =>
    selector === ".jarvis-home" ? home : null;
  const frames = new Map(),
    timers = new Map(),
    observers = [],
    mutations = [],
    resizes = [],
    listeners = new Map();
  let sequence = 0;
  const document = {
    hidden,
    activeElement: null,
    documentElement: { clientHeight: 800 },
  };
  const window = {
    innerHeight: 800,
    addEventListener: (k, v) => listeners.set(k, v),
    removeEventListener: (k) => listeners.delete(k),
  };
  const observerClass = (list) =>
    class {
      constructor(cb) {
        this.cb = cb;
        this.observed = new Set();
        this.disconnected = false;
        list.push(this);
      }
      observe(el) {
        this.observed.add(el);
      }
      unobserve(el) {
        this.observed.delete(el);
      }
      disconnect() {
        this.disconnected = true;
        this.observed.clear();
      }
    };
  const context = {
    window,
    document,
    Map,
    Number,
    parseFloat,
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    requestAnimationFrame: (cb) => {
      const id = ++sequence;
      frames.set(id, cb);
      return id;
    },
    cancelAnimationFrame: (id) => frames.delete(id),
    setTimeout: (cb) => {
      const id = ++sequence;
      timers.set(id, cb);
      return id;
    },
    clearTimeout: (id) => timers.delete(id),
    IntersectionObserver: io ? observerClass(observers) : undefined,
    MutationObserver: observerClass(mutations),
    ResizeObserver: observerClass(resizes),
  };
  vm.runInNewContext(helper + "\nthis.install = attachScrollMotion;", context);
  const motion = context.install(root, () => paused || document.hidden);
  const flush = () => {
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach((cb) => cb());
  };
  return {
    motion,
    root,
    document,
    frames,
    timers,
    observers,
    mutations,
    resizes,
    listeners,
    flush,
    pause: (value) => {
      paused = value;
      motion.sync();
      flush();
    },
    scroll: () => {
      listeners.get("scroll")();
      flush();
    },
    event: (name) => {
      listeners.get(name)();
      flush();
    },
    interact: (name, target) =>
      root.listeners.get(name)({ type: name, target }),
  };
}

test("offscreen preparation precedes constant-opacity single translation, without scale/fill/delay", () => {
  const card = new Element(),
    s = setup([card]);
  assert.match(card.style.transform, /translate3d/);
  assert.equal(card.animations.length, 0);
  card.top = 350;
  s.scroll();
  const a = card.animations[0];
  assert(a.frames.every((f) => Object.keys(f).join() === "transform"));
  assert(!JSON.stringify(a.frames).includes("scale"));
  assert.equal(a.options.duration, 800);
  assert(!("fill" in a.options));
  assert(!("delay" in a.options));
  assert.equal(card.style.transform, "");
  a.onfinish();
  card.top = 1200;
  s.scroll();
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("visible startup/restored cards are never pre-positioned or restarted", () => {
  const card = new Element(200),
    s = setup([card]);
  assert.equal(card.style.transform, "");
  assert(s.observers[0].observed.has(card));
  card.top = 1200;
  s.scroll();
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 0);
  s.motion.destroy();
});
test("zero layout recovers below viewport; visible late layout is left untouched", () => {
  const card = new Element(0);
  card.height = 0;
  const s = setup([card]);
  assert.equal(card.style.transform, "");
  card.height = 200;
  card.top = 1200;
  s.event("resize");
  assert.match(card.style.transform, /translate3d/);
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
  const visible = new Element(0);
  visible.height = 0;
  const t = setup([visible]);
  visible.height = 200;
  visible.top = 100;
  t.event("resize");
  assert.equal(visible.style.transform, "");
  assert.equal(visible.animations.length, 0);
  t.motion.destroy();
});
test("passive scroll fallback coalesces and animates without IntersectionObserver", () => {
  const card = new Element(),
    s = setup([card], { io: false });
  card.top = 350;
  for (let i = 0; i < 20; i++) s.listeners.get("scroll")();
  assert.equal(s.frames.size, 1);
  s.flush();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("interactive container stays still and only a safe child heading animates", () => {
  const title = new Element(),
    card = new Element(1200, { control: true, heading: title }),
    s = setup([card]);
  assert.equal(card.style.transform, "");
  assert.match(title.style.transform, /translate3d/);
  title.top = 350;
  card.top = 300;
  s.scroll();
  assert.equal(card.animations.length, 0);
  assert.equal(title.animations.length, 1);
  s.motion.destroy();
  const noTitle = new Element(1200, { control: true }),
    t = setup([noTitle]);
  noTitle.top = 300;
  t.scroll();
  assert.equal(noTitle.animations.length, 0);
  assert.equal(noTitle.style.transform, "");
  t.motion.destroy();
});
test("paused/reduced/hidden content stays still and unprepared visible content is not jumped on resume", () => {
  for (const mode of ["paused", "hidden"]) {
    const card = new Element(),
      s = setup([card], { [mode]: true });
    assert.equal(card.style.transform, "");
    card.top = 350;
    s.scroll();
    s.document.hidden = false;
    s.pause(false);
    assert.equal(card.animations.length, 0);
    assert.equal(card.style.transform, "");
    s.motion.destroy();
  }
});
test("pause interruption restores transform and never restarts completed/started entrance", () => {
  const card = new Element(),
    s = setup([card]);
  card.top = 350;
  s.scroll();
  s.pause(true);
  assert(card.animations[0].cancelled);
  assert.equal(card.style.transform, "");
  s.pause(false);
  card.top = 1200;
  s.scroll();
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("dynamic discovery prepares late below-screen cards without root initialization", () => {
  const cards = [],
    s = setup(cards),
    card = new Element();
  cards.push(card);
  s.mutations[0].cb();
  s.flush();
  assert.match(card.style.transform, /translate3d/);
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("touch scroll preserves entrance; keyboard focus settles permanently", () => {
  const card = new Element(),
    s = setup([card]);
  card.top = 350;
  s.scroll();
  s.interact("pointerdown", { parent: card, closest: () => null });
  assert(!card.animations[0].cancelled);
  s.interact("focusin", { parent: card });
  assert(card.animations[0].cancelled);
  assert.equal(card.style.transform, "");
  card.top = 1200;
  s.scroll();
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("late forms stop motion, failed animation stays visible, and teardown restores prepared targets", () => {
  const card = new Element(),
    s = setup([card]);
  card.options.form = true;
  s.mutations[0].cb();
  s.flush();
  assert.equal(card.style.transform, "");
  assert(!s.observers[0].observed.has(card));
  s.motion.destroy();
  const failure = new Element(1200, { throw: true }),
    t = setup([failure]);
  failure.top = 350;
  t.scroll();
  assert.equal(failure.style.transform, "");
  assert(!failure.classes.has("is-scroll-animating"));
  t.motion.destroy();
  const prepared = new Element(),
    u = setup([prepared]);
  u.listeners.get("scroll")();
  u.motion.destroy();
  assert.equal(prepared.style.transform, "");
  assert.equal(u.frames.size, 0);
  assert.equal(u.timers.size, 0);
  assert.equal(u.listeners.size, 0);
  assert.equal(u.root.listeners.size, 0);
  assert(
    [...u.observers, ...u.mutations, ...u.resizes].every((o) => o.disconnected),
  );
});
