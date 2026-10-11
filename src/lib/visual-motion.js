/** Shared by React and the native storefront; no per-frame React updates. */
export function attachVisualMotion(root) {
  const cores = [...root.querySelectorAll("[data-jarvis-core]")];
  const scenes = [...root.querySelectorAll("[data-jarvis-core], .agent-robot")];
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
  };
  const move = (event) => {
    if (!fine.matches || reduced.matches || paused) return;
    pointer = { x: event.clientX, y: event.clientY };
    if (!frame) frame = requestAnimationFrame(update);
  };
  const leave = () => {
    pointer = null;
    reset();
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
  if (cores.length) {
    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave, {
      passive: true,
    });
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
    toggles.forEach((button) => button.removeEventListener("click", toggle));
  };
}
