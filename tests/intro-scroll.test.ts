import assert from "node:assert/strict";
import { test } from "node:test";
import { JSDOM } from "jsdom";
import { lockIntroScroll } from "../src/components/intro/lockIntroScroll";

test("intro consumes scrolling, unlocks at the top and restores document styles", () => {
  const dom = new JSDOM('<html style="scroll-behavior:smooth"><body style="position:relative;width:85%"><button>Skip</button></body></html>');
  const { window } = dom;
  const keys = { window, document: window.document, HTMLElement: window.HTMLElement };
  const saved = new Map(Object.keys(keys).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const [key, value] of Object.entries(keys)) Object.defineProperty(globalThis, key, { value, configurable: true });
  let scrollY = 9000;
  let resets = 0;
  Object.defineProperty(window, "scrollTo", { value: (options: ScrollToOptions) => {
    assert.equal(options.behavior, "instant"); scrollY = options.top!; resets++;
  } });
  let release: (() => void) | undefined;
  try {
    release = lockIntroScroll();
    assert.equal(scrollY, 0);
    assert.equal(window.document.body.style.position, "fixed");
    assert.equal(window.document.body.style.touchAction, "none");
    const wheel = new window.WheelEvent("wheel", { cancelable: true, deltaY: 3000 });
    window.dispatchEvent(wheel);
    assert.ok(wheel.defaultPrevented);
    const touch = new window.Event("touchmove", { cancelable: true });
    window.dispatchEvent(touch);
    assert.ok(touch.defaultPrevented);
    for (const key of ["PageDown", "End", "ArrowDown", " "]) {
      const event = new window.KeyboardEvent("keydown", { key, cancelable: true });
      window.dispatchEvent(event); assert.ok(event.defaultPrevented);
    }
    const skip = new window.KeyboardEvent("keydown", { key: " ", cancelable: true, bubbles: true });
    window.document.querySelector("button")!.dispatchEvent(skip);
    assert.equal(skip.defaultPrevented, false, "Skip remains keyboard accessible");
    release();
    assert.equal(scrollY, 0);
    assert.equal(resets, 2, "Top reset occurs at entry and at exit");
    assert.equal(window.document.body.style.position, "relative");
    assert.equal(window.document.body.style.width, "85%");
    assert.equal(window.document.documentElement.style.scrollBehavior, "smooth");
    assert.equal(window.document.documentElement.hasAttribute("data-intro-active"), false);
    const after = new window.WheelEvent("wheel", { cancelable: true });
    window.dispatchEvent(after); assert.equal(after.defaultPrevented, false);
    release(); assert.equal(resets, 2, "Cleanup is idempotent");
  } finally {
    release?.(); dom.window.close();
    for (const [key, descriptor] of saved) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else Reflect.deleteProperty(globalThis, key);
    }
  }
});
