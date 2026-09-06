"use client";

import { useEffect } from "react";

// Attach a subtle magnetic pointer effect to selected CTAs. Ignored on
// touch / coarse pointers. No JSX — behavior only.
const SELECTOR = ".btn-gold, .lv-btn-solid";

export default function MagneticButtons() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const attach = (el: HTMLElement) => {
      let rect: DOMRect | null = null;
      const onEnter = () => {
        rect = el.getBoundingClientRect();
        el.style.transition = "transform 320ms var(--ease-editorial)";
      };
      const onMove = (e: MouseEvent) => {
        if (!rect) rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const mx = Math.max(-1, Math.min(1, dx / (rect.width / 2)));
        const my = Math.max(-1, Math.min(1, dy / (rect.height / 2)));
        el.style.transform = `translate3d(${mx * 6}px, ${my * 4}px, 0)`;
      };
      const onLeave = () => {
        el.style.transform = "translate3d(0,0,0)";
        rect = null;
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      (el as HTMLElement & { _mag_cleanup?: () => void })._mag_cleanup = () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    };

    const detach = (el: HTMLElement) => {
      const clean = (el as HTMLElement & { _mag_cleanup?: () => void })._mag_cleanup;
      if (clean) clean();
    };

    const collect = () => {
      const nodes = document.querySelectorAll<HTMLElement>(SELECTOR);
      nodes.forEach((n) => {
        if ((n as HTMLElement & { _mag_bound?: boolean })._mag_bound) return;
        (n as HTMLElement & { _mag_bound?: boolean })._mag_bound = true;
        attach(n);
      });
    };

    collect();
    const obs = new MutationObserver(collect);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      document
        .querySelectorAll<HTMLElement>(SELECTOR)
        .forEach((n) => detach(n));
    };
  }, []);

  return null;
}
