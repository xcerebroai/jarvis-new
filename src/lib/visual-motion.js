/** Shared by React and the native storefront; no per-frame React updates. */
export function attachVisualMotion(root) {
  const cores = [...root.querySelectorAll("[data-jarvis-core]")];
  const scenes = [...root.querySelectorAll("[data-jarvis-core], .agent-robot")];
  const robots = [...root.querySelectorAll("[data-agent-card]")]
    .map((card) => ({
      card,
      art: card.querySelector(".agent-robot"),
      focused: false,
      hovered: false,
      touching: false,
      pointerId: null,
      touchStart: null,
      timer: 0,
      x: 0,
      y: 0,
      proximity: 0,
    }))
    .filter(({ art }) => art);
  const toggles = [...root.querySelectorAll("[data-motion-toggle]")];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(pointer: fine)");
  const visible = new Set(scenes);
  let paused = root.dataset.motionPaused === "true";
  try {
    paused = sessionStorage.getItem("jarvis-motion-paused") === "true";
  } catch {}
  let frame = 0;
  let pointer = null;
  const clamp = (value) => Math.max(-1, Math.min(1, value));
  const paintRobot = (robot) => {
    const active =
      !paused && !reduced.matches && !document.hidden && visible.has(robot.art);
    const engagement = active
      ? Math.max(
          robot.focused || robot.hovered || robot.touching ? 1 : 0,
          robot.proximity * 0.7,
        )
      : 0;
    robot.art.style.setProperty("--robot-engagement", engagement.toFixed(3));
    robot.art.style.setProperty(
      "--robot-pointer-x",
      active ? String(robot.x) : "0",
    );
    robot.art.style.setProperty(
      "--robot-pointer-y",
      active ? String(robot.y) : "0",
    );
    robot.card.classList.toggle("is-robot-engaged", engagement > 0.15);
  };
  const locateRobot = (robot, point) => {
    const bounds = robot.card.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const x = (point.x - bounds.left - bounds.width / 2) / (bounds.width / 2);
    const y = (point.y - bounds.top - bounds.height / 2) / (bounds.height / 2);
    robot.x = clamp(x);
    robot.y = clamp(y);
    robot.proximity = Math.max(0, 1 - Math.hypot(x, y) / 1.5);
  };
  const endTouch = (robot) => {
    clearTimeout(robot.timer);
    robot.timer = 0;
    robot.pointerId = null;
    robot.touchStart = null;
    robot.touching = false;
    robot.proximity = 0;
    robot.x = 0;
    robot.y = 0;
    paintRobot(robot);
  };
  const reset = () =>
    cores.forEach((core) => {
      core.style.setProperty("--pointer-x", "0");
      core.style.setProperty("--pointer-y", "0");
      core.style.setProperty("--pointer-proximity", "0");
      core.classList.remove("is-proximate");
    });
  const sync = () => {
    const stopped = paused || reduced.matches;
    root.classList.toggle("jarvis-motion-paused", stopped);
    scenes.forEach((scene) =>
      scene.classList.toggle(
        "is-paused",
        stopped || document.hidden || !visible.has(scene),
      ),
    );
    robots.forEach((robot) => {
      if (stopped || document.hidden || !visible.has(robot.art)) {
        endTouch(robot);
        robot.hovered = false;
        robot.proximity = 0;
      }
      paintRobot(robot);
    });
    toggles.forEach((button) => {
      button.textContent = reduced.matches
        ? "Reduced motion on"
        : paused
          ? "Resume motion"
          : "Pause motion";
      button.setAttribute("aria-pressed", String(stopped));
      button.disabled = reduced.matches;
    });
    if (stopped) reset();
  };
  const update = () => {
    frame = 0;
    if (
      !pointer ||
      paused ||
      reduced.matches ||
      !fine.matches ||
      document.hidden
    )
      return;
    cores.forEach((core) => {
      if (!visible.has(core)) return;
      const bounds = core.getBoundingClientRect();
      const x =
        (pointer.x - bounds.left - bounds.width / 2) / (bounds.width / 2);
      const y =
        (pointer.y - bounds.top - bounds.height / 2) / (bounds.height / 2);
      const proximity = Math.max(0, 1 - Math.hypot(x, y) / 1.6);
      core.style.setProperty(
        "--pointer-x",
        String(Math.max(-1, Math.min(1, x))),
      );
      core.style.setProperty(
        "--pointer-y",
        String(Math.max(-1, Math.min(1, y))),
      );
      core.style.setProperty("--pointer-proximity", proximity.toFixed(3));
      core.classList.toggle("is-proximate", proximity > 0.18);
    });
    if (pointer.type !== "touch") {
      robots.forEach((robot) => {
        if (!visible.has(robot.art)) return;
        locateRobot(robot, pointer);
        paintRobot(robot);
      });
    }
  };
  const move = (event) => {
    // A finger scrolling the page is not an invitation to animate a card.
    robots.forEach((robot) => {
      if (
        robot.pointerId === event.pointerId &&
        robot.touchStart &&
        Math.hypot(
          event.clientX - robot.touchStart.x,
          event.clientY - robot.touchStart.y,
        ) > 12
      ) {
        endTouch(robot);
      }
    });
    if (!fine.matches || reduced.matches || paused) return;
    pointer = { x: event.clientX, y: event.clientY, type: event.pointerType };
    if (!frame) frame = requestAnimationFrame(update);
  };
  const leave = () => {
    pointer = null;
    reset();
    robots.forEach((robot) => {
      robot.hovered = false;
      robot.proximity = 0;
      robot.x = 0;
      robot.y = 0;
      paintRobot(robot);
    });
  };
  const robotCleanups = robots.map((robot) => {
    const enter = (event) => {
      if (event.pointerType === "touch" || !fine.matches) return;
      robot.hovered = true;
      locateRobot(robot, { x: event.clientX, y: event.clientY });
      paintRobot(robot);
    };
    const exit = () => {
      robot.hovered = false;
      robot.proximity = 0;
      robot.x = 0;
      robot.y = 0;
      paintRobot(robot);
    };
    const focus = () => {
      robot.focused =
        robot.card.matches(":focus-visible") ||
        Boolean(robot.card.querySelector(":focus-visible"));
      robot.x = 0;
      robot.y = 0;
      paintRobot(robot);
    };
    const blur = (event) => {
      if (event.relatedTarget && robot.card.contains(event.relatedTarget))
        return;
      robot.focused = false;
      paintRobot(robot);
    };
    const touch = (event) => {
      if (
        event.pointerType !== "touch" ||
        paused ||
        reduced.matches ||
        document.hidden
      )
        return;
      endTouch(robot);
      robot.focused = false;
      robot.pointerId = event.pointerId;
      robot.touchStart = { x: event.clientX, y: event.clientY };
      robot.touching = true;
      locateRobot(robot, robot.touchStart);
      paintRobot(robot);
    };
    robot.card.addEventListener("pointerenter", enter, { passive: true });
    robot.card.addEventListener("pointerleave", exit, { passive: true });
    robot.card.addEventListener("pointerdown", touch, { passive: true });
    robot.card.addEventListener("focusin", focus);
    robot.card.addEventListener("focusout", blur);
    return () => {
      clearTimeout(robot.timer);
      robot.card.removeEventListener("pointerenter", enter);
      robot.card.removeEventListener("pointerleave", exit);
      robot.card.removeEventListener("pointerdown", touch);
      robot.card.removeEventListener("focusin", focus);
      robot.card.removeEventListener("focusout", blur);
      robot.art.style.removeProperty("--robot-engagement");
      robot.art.style.removeProperty("--robot-pointer-x");
      robot.art.style.removeProperty("--robot-pointer-y");
      robot.card.classList.remove("is-robot-engaged");
    };
  });
  const touchEnd = (event) => {
    robots.forEach((robot) => {
      if (robot.pointerId !== event.pointerId) return;
      if (event.type === "pointercancel") {
        endTouch(robot);
      } else {
        robot.pointerId = null;
        robot.touchStart = null;
        robot.timer = setTimeout(() => endTouch(robot), 900);
      }
    });
  };
  const pointerMode = () => {
    if (!fine.matches)
      robots.forEach((robot) => {
        robot.hovered = false;
        robot.proximity = 0;
        robot.x = 0;
        robot.y = 0;
        paintRobot(robot);
      });
  };
  const toggle = () => {
    paused = !paused;
    root.dataset.motionPaused = String(paused);
    try {
      sessionStorage.setItem("jarvis-motion-paused", String(paused));
    } catch {}
    sync();
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting
          ? visible.add(entry.target)
          : visible.delete(entry.target),
      );
      sync();
    },
    { rootMargin: "80px" },
  );
  scenes.forEach((scene) => observer.observe(scene));
  if (cores.length || robots.length) {
    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave, {
      passive: true,
    });
  }
  if (robots.length) {
    document.addEventListener("pointerup", touchEnd, { passive: true });
    document.addEventListener("pointercancel", touchEnd, { passive: true });
    fine.addEventListener("change", pointerMode);
  }
  toggles.forEach((button) => button.addEventListener("click", toggle));
  reduced.addEventListener("change", sync);
  document.addEventListener("visibilitychange", sync);
  sync();
  return () => {
    observer.disconnect();
    cancelAnimationFrame(frame);
    document.removeEventListener("pointermove", move);
    document.documentElement.removeEventListener("pointerleave", leave);
    document.removeEventListener("visibilitychange", sync);
    reduced.removeEventListener("change", sync);
    document.removeEventListener("pointerup", touchEnd);
    document.removeEventListener("pointercancel", touchEnd);
    fine.removeEventListener("change", pointerMode);
    robotCleanups.forEach((cleanup) => cleanup());
    toggles.forEach((button) => button.removeEventListener("click", toggle));
  };
}
