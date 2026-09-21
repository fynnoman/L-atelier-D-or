"use client";

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "lad_intro_seen_v1";

export default function IntroOverlay({
  videoSrc,
  posterSrc,
}: {
  videoSrc: string;
  posterSrc?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {}
    if (!seen) {
      setVisible(true);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [visible]);

  const dismiss = () => {
    if (fading) return;
    setFading(true);
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {}
    window.setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }, 900);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      aria-hidden={fading}
      className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity"
      style={{
        background: "#000",
        opacity: fading ? 0 : 1,
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={dismiss}
        className="w-full h-full object-cover"
      />

      {/* subtle vignette pour homogeneiser les bords */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Wordmark editorial en haut */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
      >
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-instrument), Georgia, serif",
            fontStyle: "italic",
            color: "#F0E7D5",
            fontSize: "clamp(18px, 1.6vw, 22px)",
            letterSpacing: "0.02em",
          }}
        >
          L&rsquo;Atelier d&rsquo;Or
        </span>
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
      </div>

      {/* Passer l’intro */}
      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-8 right-8 md:bottom-10 md:right-10 flex items-center gap-3 transition-opacity hover:opacity-100"
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "11px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Passer l&rsquo;intro
        <span
          className="block h-px w-6"
          style={{ background: "rgba(255,255,255,0.6)" }}
        />
      </button>
    </div>
  );
}
