/** Keep wheel/touch/keyboard input in the intro, never in the underlying page. */
export function lockIntroScroll() {
  const html = document.documentElement;
  const body = document.body;
  const htmlProperties = ["overflow", "overscroll-behavior", "scroll-behavior"];
  const bodyProperties = ["position", "top", "left", "right", "width", "overflow", "touch-action"];
  const save = (style: CSSStyleDeclaration, properties: string[]) => properties.map(property => ({
    property, value: style.getPropertyValue(property), priority: style.getPropertyPriority(property),
  }));
  const htmlStyles = save(html.style, htmlProperties);
  const bodyStyles = save(body.style, bodyProperties);
  const previousActive = html.getAttribute("data-intro-active");
  html.setAttribute("data-intro-active", "true");
  html.style.setProperty("overflow", "hidden");
  html.style.setProperty("overscroll-behavior", "none");
  html.style.setProperty("scroll-behavior", "auto");
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  Object.assign(body.style, { position: "fixed", top: "0px", left: "0px", right: "0px", width: "100%", overflow: "hidden", touchAction: "none" });
  const blockGesture = (event: Event) => { event.preventDefault(); };
  const blockKey = (event: KeyboardEvent) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) return;
    // Space still activates the focused skip button.
    if (event.key === " " && event.target instanceof HTMLElement && event.target.closest("button")) return;
    event.preventDefault();
  };
  window.addEventListener("wheel", blockGesture, { passive: false, capture: true });
  window.addEventListener("touchmove", blockGesture, { passive: false, capture: true });
  window.addEventListener("keydown", blockKey, { capture: true });
  let released = false;
  return () => {
    if (released) return;
    released = true;
    window.removeEventListener("wheel", blockGesture, true);
    window.removeEventListener("touchmove", blockGesture, true);
    window.removeEventListener("keydown", blockKey, true);
    for (const { property, value, priority } of bodyStyles) body.style.setProperty(property, value, priority);
    // Position the now-unlocked document before restoring smooth-scroll styles.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    for (const { property, value, priority } of htmlStyles) html.style.setProperty(property, value, priority);
    if (previousActive === null) html.removeAttribute("data-intro-active");
    else html.setAttribute("data-intro-active", previousActive);
  };
}
