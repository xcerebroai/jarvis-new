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

test("valid initial screen is stable, observed, and animates after exit/reentry", () => {
  const card = new Element(200),
    s = setup([card]);
  assert(s.observers[0].observed.has(card));
  assert.equal(card.animations.length, 0);
  card.top = 1200;
  s.scroll();
  card.top = 300;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("zero-layout startup recovers on scroll without reinitializing root", () => {
  const card = new Element(0);
  card.height = 0;
  const s = setup([card]);
  assert(s.observers[0].observed.has(card));
  assert.equal(card.animations.length, 0);
  card.height = 200;
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("geometry fallback works without IntersectionObserver and coalesces scroll events", () => {
  const card = new Element(),
    s = setup([card], { io: false });
  card.top = 350;
  for (let i = 0; i < 20; i++) s.listeners.get("scroll")();
  assert.equal(s.frames.size, 1);
  s.flush();
  assert.equal(card.animations.length, 1);
  assert.equal(s.frames.size, 0);
  s.motion.destroy();
});
test("paused and reduced-motion predicate never consumes pending entry", () => {
  const card = new Element(),
    s = setup([card], { paused: true });
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 0);
  s.pause(false);
  assert.equal(card.animations.length, 1);
  s.pause(true);
  assert(card.animations[0].cancelled);
  assert.equal(s.timers.size, 0);
  s.motion.destroy();
});
test("hidden tab preserves pending entry and resumes on visibility sync", () => {
  const card = new Element(),
    s = setup([card], { hidden: true });
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 0);
  s.document.hidden = false;
  s.motion.sync();
  s.flush();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("dynamic cards discovered after initially empty markup", () => {
  const cards = [],
    s = setup(cards);
  const card = new Element();
  cards.push(card);
  s.mutations[0].cb();
  s.flush();
  assert(s.observers[0].observed.has(card));
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  s.motion.destroy();
});
test("resize and page restoration recover late layout without scroll", () => {
  const card = new Element(),
    s = setup([card]);
  card.top = 350;
  s.event("pageshow");
  assert.equal(card.animations.length, 1);
  card.animations[0].onfinish();
  card.top = 1200;
  s.event("resize");
  card.top = 350;
  s.resizes[0].cb();
  s.flush();
  assert.equal(card.animations.length, 2);
  s.motion.destroy();
});
test("short heading/card geometry cannot self-cancel at the entry edge", () => {
  const card = new Element(),
    s = setup([card]);
  card.height = 100;
  card.top = 690;
  s.scroll();
  assert.equal(card.animations.length, 1);
  card.top = 724;
  s.observers[0].cb();
  s.flush();
  assert(!card.animations[0].cancelled);
  s.motion.destroy();
});
test("touch scroll does not cancel; focus and controls settle without moving targets", () => {
  const card = new Element(1200, { control: true }),
    s = setup([card]);
  card.top = 350;
  s.scroll();
  assert(card.animations[0].frames.every((frame) => !("transform" in frame)));
  s.interact("pointerdown", { parent: card, closest: () => null });
  assert(!card.animations[0].cancelled);
  s.interact("pointerdown", { parent: card, closest: () => ({}) });
  assert(card.animations[0].cancelled);
  card.top = 1200;
  s.scroll();
  card.top = 350;
  s.scroll();
  s.interact("focusin", { parent: card });
  assert(card.animations[1].cancelled);
  s.motion.destroy();
});
test("replay requires full exit and never loops at the trigger boundary", () => {
  const card = new Element(),
    s = setup([card]);
  card.top = 350;
  s.scroll();
  card.animations[0].onfinish();
  card.top = 750;
  s.scroll();
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 1);
  card.top = 1000;
  s.scroll();
  card.top = 350;
  s.scroll();
  assert.equal(card.animations.length, 2);
  s.motion.destroy();
});
test("forms excluded, failures visible, and cleanup removes all listeners and observers", () => {
  const form = new Element(1200, { form: true }),
    card = new Element(1200, { throw: true }),
    s = setup([form, card]);
  assert(!s.observers[0].observed.has(form));
  card.top = 350;
  s.scroll();
  assert(!card.classes.has("is-scroll-animating"));
  s.listeners.get("scroll")();
  s.motion.destroy();
  assert.equal(s.frames.size, 0);
  assert.equal(s.timers.size, 0);
  assert.equal(s.listeners.size, 0);
  assert.equal(s.root.listeners.size, 0);
  assert(
    [...s.observers, ...s.mutations, ...s.resizes].every(
      (observer) => observer.disconnected,
    ),
  );
  assert.equal(card.classes.size, 0);
});

test("late controls become position-stable and late forms immediately stop motion", () => {
  const card = new Element(),
    s = setup([card]);
  card.options.control = true;
  s.mutations[0].cb();
  s.flush();
  card.top = 350;
  s.scroll();
  assert(card.animations[0].frames.every((frame) => !("transform" in frame)));
  card.options.form = true;
  s.mutations[0].cb();
  s.flush();
  assert(card.animations[0].cancelled);
  assert(!s.observers[0].observed.has(card));
  assert(!card.classes.has("jarvis-scroll-target"));
  s.motion.destroy();
});
