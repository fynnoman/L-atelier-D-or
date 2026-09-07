"use client";

import { useEffect } from "react";

/** Preserve the existing ?y= preview links without an inline bootstrap script. */
export default function QueryScroll() {
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("y");
    if (value === null || !/^\d+$/.test(value)) return;
    const position = Number(value);
    if (!Number.isSafeInteger(position)) return;
    const scroll = () => {
      if (document.documentElement.dataset.introActive !== "true") window.scrollTo(0, position);
    };
    scroll();
    window.addEventListener("load", scroll);
    const timers = [50, 300, 1200].map(delay => window.setTimeout(scroll, delay));
    return () => {
      window.removeEventListener("load", scroll);
      timers.forEach(timer => window.clearTimeout(timer));
    };
  }, []);
  return null;
}
