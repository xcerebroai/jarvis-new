/** Shared inquiry UI for the React site and the native GHL publication. */
export function attachInquiryDialog(root) {
  if (document.getElementById("jarvis-inquiry-dialog")) return () => {};
  const dialog = document.createElement("dialog");
  if (typeof dialog.showModal !== "function") return () => {};
  const formUrl = "https://api.leadconnectorhq.com/widget/form/LUeku6Mi9O7jN7p1FCsM";
  dialog.id = "jarvis-inquiry-dialog";
  dialog.className = "jarvis-inquiry-dialog";
  dialog.setAttribute("aria-labelledby", "jarvis-inquiry-title");
  dialog.setAttribute("aria-describedby", "jarvis-inquiry-intro");
  dialog.innerHTML = `<header class="jarvis-inquiry-header"><div><span class="jarvis-inquiry-eyebrow">YOUR NEXT MOVE</span><h2 id="jarvis-inquiry-title">Let’s talk about your business.</h2></div><button type="button" data-inquiry-close aria-label="Close inquiry" autofocus>✕</button></header><div class="jarvis-inquiry-content"><p id="jarvis-inquiry-intro">Tell us what you need below. Ready to meet? Choose a free 30-minute Zoom call with Quentin.</p><iframe id="inline-LUeku6Mi9O7jN7p1FCsM" data-form-id="LUeku6Mi9O7jN7p1FCsM" title="Jarvis inquiry and optional appointment text consent" style="width:100%;height:1200px;border:0;background:white;color-scheme:light" scrolling="yes"></iframe><p class="jarvis-inquiry-fallback"><a href="${formUrl}" target="_blank" rel="noopener noreferrer">Open inquiry form in a new window</a></p></div><footer class="jarvis-inquiry-footer"><span>No purchase required. Texts are optional.</span><a href="/contact/#book-call">Choose a call time ↗</a></footer>`;
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "jarvis-inquiry-trigger";
  trigger.textContent = "Let’s talk / Book a call";
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-controls", dialog.id);
  document.body.append(trigger, dialog);
  const frame = dialog.querySelector("iframe");
  const close = dialog.querySelector("[data-inquiry-close]");
  const bookingLink = dialog.querySelector('.jarvis-inquiry-footer a');
  let previousFocus = null;
  let previousOverflow = "";
  let openedThisPage = false;
  let timer = 0;
  const storageKey = "jarvis-inquiry-seen-v1";
  const visitedRecently = () => {
    try { return Boolean(localStorage.getItem(storageKey)); }
    catch { return openedThisPage; }
  };
  const resize = () => dialog.style.setProperty("--inquiry-viewport", `${window.visualViewport?.height || window.innerHeight}px`);
  const open = () => {
    if (dialog.open) return;
    const menu = document.getElementById("jarvis-mobile-menu");
    if (menu?.open) menu.close();
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    openedThisPage = true;
    try { localStorage.setItem(storageKey, String(Date.now())); } catch {}
    if (!frame.hasAttribute("src")) {
      frame.src = formUrl;
      if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.append(script);
      }
    }
    resize();
    dialog.showModal();
    close.focus({ preventScroll: true });
  };
  const onClose = () => {
    document.body.style.overflow = previousOverflow;
    if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
  };
  const closeDialog = () => dialog.close();
  const backdrop = (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  };
  const explicitLink = (event) => {
    const link = event.target.closest('a[href="/contact/#book-call"]');
    if (!link || dialog.contains(link) || location.pathname.replace(/\/$/, "") === "/contact" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    open();
  };
  const automatic = () => {
    const active = document.activeElement;
    if (openedThisPage || visitedRecently() || document.hidden || document.querySelector("dialog[open]") || active?.matches("input, textarea, select, iframe")) return;
    if (window.scrollY < Math.min(window.innerHeight * 0.8, 600)) return;
    open();
  };
  const eligiblePage = /^(\/|\/products\/?)$/.test(location.pathname);
  const onScroll = () => {
    if (timer || openedThisPage || !eligiblePage || visitedRecently()) return;
    timer = window.setTimeout(() => { timer = 0; automatic(); }, 1200);
  };
  trigger.addEventListener("click", open);
  close.addEventListener("click", closeDialog);
  bookingLink.addEventListener("click", closeDialog);
  dialog.addEventListener("close", onClose);
  dialog.addEventListener("click", backdrop);
  root.addEventListener("click", explicitLink);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.visualViewport?.addEventListener("resize", resize);
  return () => {
    clearTimeout(timer);
    if (dialog.open) dialog.close();
    root.removeEventListener("click", explicitLink);
    window.removeEventListener("scroll", onScroll);
    window.visualViewport?.removeEventListener("resize", resize);
    trigger.remove();
    dialog.remove();
  };
}
