"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  from: number;
  to: number;
  render: (opacity: number) => React.ReactNode;
};

export default function ScrollVideoHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
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
        setProgress(p);
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

  const fade = (from: number, to: number) => {
    if (progress <= from || progress >= to) return 0;
    const mid = (from + to) / 2;
    const half = (to - from) / 2;
    // triangulaire : monte de from→mid, descend de mid→to
    const raw = 1 - Math.abs(progress - mid) / half;
    return Math.max(0, Math.min(1, raw));
  };

  const slides: Slide[] = [
    {
      from: 0,
      to: 0.32,
      render: (o) => (
        <div style={{ opacity: o }} className="flex flex-col items-start gap-8">
          <span className="n-eyebrow">L&rsquo;Atelier d&rsquo;Or präsentiert</span>
          <h1
            className="n-quote leading-[1.02] max-w-[16ch]"
            style={{
              fontSize: "clamp(56px, 9vw, 168px)",
              color: "var(--n-bg)",
            }}
          >
            Entrez dans une vision d&rsquo;exception.
          </h1>
        </div>
      ),
    },
    {
      from: 0.28,
      to: 0.66,
      render: (o) => (
        <div style={{ opacity: o }} className="flex flex-col items-start gap-8">
          <span className="n-eyebrow">Première Édition</span>
          <h2
            className="n-quote leading-[1.02] max-w-[18ch]"
            style={{
              fontSize: "clamp(56px, 9vw, 168px)",
              color: "var(--n-bg)",
            }}
          >
            Voyez le monde à votre dimension.
          </h2>
        </div>
      ),
    },
    {
      from: 0.62,
      to: 1.0,
      render: (o) => (
        <div style={{ opacity: o }} className="flex flex-col items-start gap-10">
          <span className="n-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            Eine kleine französische Manufaktur
          </span>
          <h3
            className="n-display leading-[1] max-w-[16ch]"
            style={{
              fontSize: "clamp(64px, 11vw, 200px)",
              color: "var(--n-bg)",
              fontWeight: 200,
              paddingBottom: "0.08em",
            }}
          >
            Vier Stücke. <br /> Ein Jahr.
          </h3>
          <p
            className="n-body max-w-[42ch]"
            style={{
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "rgba(255,255,255,0.78)",
            }}
          >
            In Paris von Hand gefertigt. Von Hand nummeriert. Ausschließlich nach Termin.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <Link
              href="/collection"
              className="n-cta n-cta-ghost"
              style={{ color: "var(--n-bg)" }}
            >
              Kollektion ansehen
            </Link>
            <Link
              href="/concierge"
              className="n-link"
              style={{ color: "var(--n-bg)" }}
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      ),
    },
  ];

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

        {/* Voile pour lisibilité du texte */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 30%, rgba(10,10,10,0.15) 60%, rgba(10,10,10,0.65) 100%)",
          }}
        />

        {/* Éditorial calé sur la vidéo */}
        <div className="absolute inset-0 flex items-end">
          <div className="n-page w-full pb-24 md:pb-32">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-9 lg:col-span-8 relative min-h-[380px]">
                {slides.map((s, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-500 will-change-[opacity]"
                    style={{
                      opacity: fade(s.from, s.to),
                      pointerEvents: fade(s.from, s.to) > 0.3 ? "auto" : "none",
                    }}
                  >
                    {s.render(1)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
