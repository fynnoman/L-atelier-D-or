"use client";

import { useEffect } from "react";

/**
 * Forces every <video autoplay> on the page to actually autoplay,
 * even in Safari / iOS.
 *
 * Realities this handles:
 *  - play() called before media data is ready -> wait for loadedmetadata/canplay
 *  - muted/playsInline set as attribute only, not programmatic -> set in JS too
 *  - late-mounted React videos -> MutationObserver
 *  - tab refocus, first user gesture -> retry
 *  - transient failures -> short retry burst
 *
 * NOT fixable in JS (hard platform limit): iOS Low Power Mode disables
 * autoplay entirely. Only a user tap starts the video there.
 */
export default function VideoAutoplayGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const paused = new Set<HTMLVideoElement>();
    const primed = new WeakSet<HTMLVideoElement>();
    const bursts = new Set<number>();
    const readyListeners = new Map<HTMLVideoElement, () => void>();

    const ensureFlags = (v: HTMLVideoElement) => {
      try {
        v.muted = true;
        v.defaultMuted = true;
        v.playsInline = true;
        v.setAttribute("muted", "");
        v.setAttribute("playsinline", "");
        v.setAttribute("webkit-playsinline", "");
      } catch {}
    };

    const tryPlay = (v: HTMLVideoElement) => {
      if (!v.isConnected) {
        paused.delete(v);
        return;
      }
      ensureFlags(v);
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          paused.delete(v);
        }).catch(() => {
          paused.add(v);
        });
      }
    };

    const prime = (v: HTMLVideoElement) => {
      if (!v.autoplay && !v.hasAttribute("autoplay")) return;
      if (primed.has(v)) {
        if (v.paused) tryPlay(v);
        return;
      }
      primed.add(v);
      ensureFlags(v);

      const onReady = () => {
        if (v.paused) tryPlay(v);
      };
      v.addEventListener("loadedmetadata", onReady);
      v.addEventListener("loadeddata", onReady);
      v.addEventListener("canplay", onReady);
      v.addEventListener("canplaythrough", onReady);
      readyListeners.set(v, onReady);

      // Short retry burst for the first few seconds after mount.
      let attempts = 0;
      const burst = window.setInterval(() => {
        attempts += 1;
        if (!v.isConnected || !v.paused || attempts > 12) {
          window.clearInterval(burst);
          bursts.delete(burst);
          return;
        }
        tryPlay(v);
      }, 400);
      bursts.add(burst);

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
    const scope = document.getElementById("main") ?? document.body;
    mo.observe(scope, { childList: true, subtree: true });

    const kickAll = () => {
      paused.forEach((v) => {
        if (!v.isConnected) {
          paused.delete(v);
          return;
        }
        tryPlay(v);
      });
    };

    const onEvent = () => kickAll();
    const winEvents = ["pointerdown", "touchstart", "keydown", "scroll"] as const;
    winEvents.forEach((e) =>
      window.addEventListener(e, onEvent, { passive: true, capture: true })
    );
    document.addEventListener("visibilitychange", onEvent);
    window.addEventListener("pageshow", onEvent);

    return () => {
      mo.disconnect();
      winEvents.forEach((e) =>
        window.removeEventListener(e, onEvent, { capture: true } as EventListenerOptions)
      );
      document.removeEventListener("visibilitychange", onEvent);
      window.removeEventListener("pageshow", onEvent);
      bursts.forEach((id) => window.clearInterval(id));
      bursts.clear();
      readyListeners.forEach((fn, v) => {
        v.removeEventListener("loadedmetadata", fn);
        v.removeEventListener("loadeddata", fn);
        v.removeEventListener("canplay", fn);
        v.removeEventListener("canplaythrough", fn);
      });
      readyListeners.clear();
    };
  }, []);

  return null;
}
