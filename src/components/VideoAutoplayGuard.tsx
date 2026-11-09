"use client";

import { useEffect } from "react";

/**
 * Forces every <video autoplay> on the page to actually autoplay,
 * even in Safari (incl. Low Power Mode) and reduced-data iOS states.
 *
 * Why: the autoplay HTML attribute is a hint. Browsers can still refuse
 * if `muted` / `playsinline` are not set *before* play() is called in JS.
 * MutationObserver catches videos added by client-rendered components.
 * A one-shot user-gesture fallback resumes anything still paused.
 */
export default function VideoAutoplayGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const paused = new Set<HTMLVideoElement>();

    const tryPlay = (v: HTMLVideoElement) => {
      try {
        v.muted = true;
        v.defaultMuted = true;
        v.playsInline = true;
        v.setAttribute("muted", "");
        v.setAttribute("playsinline", "");
        v.setAttribute("webkit-playsinline", "");
      } catch {}
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          paused.add(v);
        });
      }
    };

    const prime = (v: HTMLVideoElement) => {
      if (!v.autoplay && !v.hasAttribute("autoplay")) return;
      if (!v.paused) return;
      tryPlay(v);
    };

    const scan = (root: ParentNode = document) => {
      root.querySelectorAll?.("video").forEach((node) => {
        prime(node as HTMLVideoElement);
      });
    };

    scan();

    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLVideoElement) {
            prime(node);
          } else if (node instanceof Element) {
            scan(node);
          }
        });
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    const kickAll = () => {
      paused.forEach((v) => {
        if (!v.isConnected) {
          paused.delete(v);
          return;
        }
        tryPlay(v);
        if (!v.paused) paused.delete(v);
      });
    };

    const onEvent = () => kickAll();
    const winEvents = ["pointerdown", "touchstart", "keydown", "scroll"] as const;
    winEvents.forEach((e) =>
      window.addEventListener(e, onEvent, { passive: true, capture: true })
    );
    document.addEventListener("visibilitychange", onEvent);

    return () => {
      mo.disconnect();
      winEvents.forEach((e) =>
        window.removeEventListener(e, onEvent, { capture: true } as EventListenerOptions)
      );
      document.removeEventListener("visibilitychange", onEvent);
    };
  }, []);

  return null;
}
