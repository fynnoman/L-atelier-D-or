"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n/LanguageContext";

/**
 * Zeigt die Intro genau bei frischen Seitenaufrufen auf "/".
 *
 * Da diese Komponente in layout.tsx liegt, bleibt sie waehrend SPA-Navigationen
 * gemountet und der useEffect feuert nur einmal pro Full-Page-Load. Dadurch
 * triggert die Intro bei externen Zugaengen und Hard-Reloads auf "/", aber
 * nicht wenn der User intern von einer Subseite zurueck auf "/" navigiert.
 */
export default function IntroOverlay({
  videoSrc,
  videoSrcMobile,
  posterSrc,
  dismissAt = 8,
}: {
  videoSrc: string;
  videoSrcMobile?: string;
  posterSrc?: string;
  dismissAt?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const hasPlayedRef = useRef(false);
  const t = useT();

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    // Alte Session-Keys aus frueheren Versionen aufraeumen, damit zombiegecachte
    // Clients beim naechsten Full-Reload sauber sind.
    try {
      window.sessionStorage.removeItem("lad_intro_seen_v2");
      window.sessionStorage.removeItem("lad_intro_seen_v3");
    } catch {}
    const forced = new URLSearchParams(window.location.search).has("intro");
    if (!forced && window.location.pathname !== "/") return;
    setVisible(true);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
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
      className="fixed inset-0 z-[100] overflow-hidden transition-opacity"
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
        aria-hidden
        onTimeUpdate={onTimeUpdate}
        onPlaying={() => {
          hasPlayedRef.current = true;
        }}
        onEnded={dismiss}
        onError={(e) => {
          // Browser bubbeln error-Events von <source>-Kindern hoch; echter
          // Video-Fehler liegt nur vor, wenn videoRef.error gesetzt ist oder
          // keine Quelle mehr geladen werden kann.
          if (e.target !== videoRef.current) return;
          const v = videoRef.current;
          if (!v) return;
          if (!v.error && v.networkState !== 3 /* NETWORK_NO_SOURCE */) return;
          dismiss();
        }}
        onStalled={() => {
          if (!hasPlayedRef.current) return;
          if (fallbackTimerRef.current != null) return;
          fallbackTimerRef.current = window.setTimeout(dismiss, 2000);
        }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 160ms linear",
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
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
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
