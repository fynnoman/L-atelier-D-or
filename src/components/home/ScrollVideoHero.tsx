"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollVideoHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const l = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", l);
    return () => mq.removeEventListener?.("change", l);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    // sur mobile, iOS n'accepte l'écriture de currentTime qu'après une
    // première tentative de lecture. On amorce ça silencieusement.
    const prime = () => {
      video.play().catch(() => {}).finally(() => video.pause());
    };
    prime();

    let raf: number | null = null;

    const seek = (t: number) => {
      if (Number.isFinite(t) && video.duration) {
        try {
          video.currentTime = Math.min(Math.max(t, 0), video.duration - 0.05);
        } catch {}
      }
    };

    const onScroll = () => {
      if (raf != null) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const p = total > 0 ? scrolled / total : 0;
        if (!reduced) seek(p * (video.duration || 0));
      });
    };

    // premier passage — quand la vidéo est prête
    const onReady = () => onScroll();
    if (video.readyState >= 2) onReady();
    else video.addEventListener("loadeddata", onReady);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadeddata", onReady);
    };
  }, [reduced]);

  return (
    <section
      ref={wrapRef}
      className="relative"
      style={{ height: "360vh" }}
      aria-label="Intro"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/video/hero.mp4"
          poster="/video/hero-poster.jpg"
          preload="auto"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
