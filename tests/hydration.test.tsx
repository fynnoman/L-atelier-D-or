import assert from "node:assert/strict";
import { test } from "node:test";
import { act, createElement, Fragment } from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { JSDOM } from "jsdom";
import SignatureCursor from "../src/components/SignatureCursor";
import QueryScroll from "../src/components/QueryScroll";

test("desktop hydration matches server HTML, reacts to pointer changes and cleans up", async () => {
  const tree = createElement(Fragment, null,
    createElement(SignatureCursor), createElement(QueryScroll),
    createElement("span", { id: "site-content" }, "L’atelier D’or"));
  const serverHTML = renderToString(tree);
  assert.equal(serverHTML, '<span id="site-content">L’atelier D’or</span>');
  const dom = new JSDOM(`<div id="root">${serverHTML}</div>`, {
    url: "http://localhost/?y=240", pretendToBeVisual: true,
  });
  const { window } = dom;
  const listeners = new Set<() => void>();
  let matches = true;
  Object.defineProperty(window, "matchMedia", { value: () => ({
    get matches() { return matches; },
    addEventListener: (_event: string, callback: () => void) => listeners.add(callback),
    removeEventListener: (_event: string, callback: () => void) => listeners.delete(callback),
  }) });
  const scrolls: number[] = [];
  Object.defineProperty(window, "scrollTo", { value: (_x: number, y: number) => { scrolls.push(y); } });
  const globals: Record<string, unknown> = {
    window, document: window.document, HTMLElement: window.HTMLElement,
    requestAnimationFrame: window.requestAnimationFrame.bind(window),
    cancelAnimationFrame: window.cancelAnimationFrame.bind(window),
    IS_REACT_ACT_ENVIRONMENT: true,
  };
  const previous = new Map(Object.keys(globals).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const [key, value] of Object.entries(globals)) Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });
  const errors: unknown[] = [];
  const originalError = console.error;
  console.error = (...args) => { errors.push(args); };
  let root: ReturnType<typeof hydrateRoot> | undefined;
  try {
    const container = window.document.getElementById("root")!;
    await act(async () => { root = hydrateRoot(container, tree, { onRecoverableError: error => errors.push(error) }); });
    assert.deepEqual(errors, [], "No hydration or client script warnings");
    assert.equal(container.querySelectorAll('[aria-hidden="true"]').length, 2);
    assert.equal(container.querySelectorAll("script").length, 0);
    assert.ok(scrolls.length > 0 && scrolls.every(y => y === 240));
    assert.equal(container.querySelector("#site-content")?.textContent, "L’atelier D’or");
    await act(async () => { matches = false; listeners.forEach(callback => callback()); });
    assert.equal(container.querySelectorAll('[aria-hidden="true"]').length, 0, "Touch input removes custom cursor");
    await act(async () => { root!.unmount(); });
    root = undefined;
    assert.equal(listeners.size, 0);
    const count = scrolls.length;
    window.dispatchEvent(new window.Event("load"));
    assert.equal(scrolls.length, count, "Scroll load handler is removed");
    assert.deepEqual(errors, []);
  } finally {
    if (root) await act(async () => root!.unmount());
    console.error = originalError;
    dom.window.close();
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else Reflect.deleteProperty(globalThis, key);
    }
  }
});
