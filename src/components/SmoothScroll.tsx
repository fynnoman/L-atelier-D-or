"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Globaler Smooth-Scroll via Lenis. Muss native `scroll`-Events
 * dispatchen, sonst brechen Scroll-getriebene Komponenten wie
 * CollectionCinemaReel (die mit requestAnimationFrame + scroll-Listener
 * arbeiten). Lenis macht genau das von sich aus — kein Workaround noetig.
 *
 * Reduced-Motion-Nutzer bekommen natives Scrollen zurueck.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
