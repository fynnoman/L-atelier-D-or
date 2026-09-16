"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const selector = ".n-rise, .n-veil, .n-mask, .n-line-mask";
    const els = new Set<Element>();
    let io: IntersectionObserver | null = null;

    const bind = () => {
      if (!io) return;
      document.querySelectorAll(selector).forEach((el) => {
        if (els.has(el)) return;
        els.add(el);
        io!.observe(el);
      });
    };

    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io!.unobserve(entry.target);
            els.delete(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );

    bind();

    const mo = new MutationObserver(() => bind());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
      io = null;
      els.clear();
    };
  }, []);

  return null;
}
