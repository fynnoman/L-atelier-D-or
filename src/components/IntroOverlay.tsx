"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n/LanguageContext";

const SESSION_KEY = "lad_intro_seen_v3";

export default function IntroOverlay({
  videoSrc,
  videoSrcMobile,
  posterSrc,
  dismissAt = 8,
}: {
  videoSrc: string;
  videoSrcMobile?: string;
  posterSrc?: string;
  /** Sekunde, ab der die Intro sich zurueckzieht. */
  dismissAt?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const t = useT();

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

  const dismiss = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    if (fallbackTimerRef.current != null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
      } catch {}
    }
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

  useEffect(() => {
    if (!visible) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    fallbackTimerRef.current = window.setTimeout(() => {
      dismiss();
    }, (dismissAt + 2) * 1000);
    return () => {
      if (fallbackTimerRef.current != null) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [visible, dismissAt]);

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.currentTime >= dismissAt) dismiss();
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
        poster={posterSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noremoteplayback nofullscreen"
        onTimeUpdate={onTimeUpdate}
        onEnded={dismiss}
        onError={dismiss}
        onStalled={() => {
          // Falls das Video nach dismissAt stalled, zumindest nach weiteren 2s raus.
          if (fallbackTimerRef.current != null) return;
          fallbackTimerRef.current = window.setTimeout(dismiss, 2000);
        }}
        className="w-full h-full object-cover"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 160ms linear",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform, opacity",
          filter: "contrast(1.05) saturate(1.08)",
        }}
      >
        {videoSrcMobile && (
          <source
            src={videoSrcMobile}
            type="video/mp4"
            media="(max-width: 768px)"
          />
        )}
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 55%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
      >
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
        <img
          src="/logo.png"
          alt="L'Atelier d'Or"
          style={{
            height: "clamp(28px, 3.2vw, 44px)",
            width: "auto",
            filter: "brightness(0) invert(1)",
          }}
          draggable={false}
        />
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
      </div>

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
        {t.common.passerIntro}
        <span
          className="block h-px w-6"
          style={{ background: "rgba(255,255,255,0.6)" }}
        />
      </button>
    </div>
  );
}
