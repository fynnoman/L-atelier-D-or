"use client";

import { useEffect } from "react";

export default function MoodClient({ mood }: { mood: string }) {
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.getAttribute("data-nouveau-mood");
    html.setAttribute("data-nouveau-mood", mood);
    return () => {
      if (previous) html.setAttribute("data-nouveau-mood", previous);
      else html.removeAttribute("data-nouveau-mood");
    };
  }, [mood]);
  return null;
}
