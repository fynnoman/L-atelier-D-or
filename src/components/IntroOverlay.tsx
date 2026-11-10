"use client";

import { useEffect, useRef, useState } from "react";
import Wordmark from "./Wordmark";
import { useT } from "@/lib/i18n/LanguageContext";

export default function IntroOverlay({
  videoSrc,
  videoSrcMobile,
  posterSrc,
  fallbackSeconds = 6,
}: {
  videoSrc: string;
  videoSrcMobile?: string;
  posterSrc?: string;
  fallbackSeconds?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [exitPhase, setExitPhase] = useState<"idle" | "flash" | "unmount">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const t = useT();

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.removeItem("lad_intro_seen_v2");
      window.sessionStorage.removeItem("lad_intro_seen_v3");
    } catch {}
    const forced = new URLSearchParams(window.location.search).has("intro");
    if (!forced && window.location.pathname !== "/") return;
    setVisible(true);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.setAttribute("data-intro", "playing");
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.removeAttribute("data-intro");
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
    setExitPhase("flash");
    document.documentElement.setAttribute("data-intro", "transitioning");
    window.setTimeout(() => {
      setFading(true);
    }, 180);
    window.setTimeout(() => {
      setExitPhase("unmount");
      setVisible(false);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.setAttribute("data-intro", "done");
    }, 1500);
  };

  useEffect(() => {
    if (!visible) return;
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      try {
        v.muted = true;
        v.defaultMuted = true;
        v.playsInline = true;
      } catch {}
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    };
    tryPlay();
    const onReady = () => tryPlay();
    v.addEventListener("loadedmetadata", onReady);
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("canplay", onReady);
    fallbackTimerRef.current = window.setTimeout(dismiss, fallbackSeconds * 1000);
    return () => {
      v.removeEventListener("loadedmetadata", onReady);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
      if (fallbackTimerRef.current != null) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [visible, fallbackSeconds]);

  if (!mounted || !visible) return null;

  return (
    <div
      aria-hidden={fading}
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{
        background: "#000",
        opacity: fading ? 0 : 1,
        transition: "opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "opacity",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: fading ? "scale(1.06)" : "none",
          filter: fading ? "blur(10px)" : "none",
          transition:
            "transform 1400ms cubic-bezier(0.4, 0, 0.2, 1), filter 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: fading ? "transform, filter" : "auto",
        }}
      >
        <video
          ref={videoRef}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          onEnded={dismiss}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
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
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 20%, rgba(237, 227, 206, 0.22) 48%, rgba(237, 227, 206, 0.42) 52%, rgba(237, 227, 206, 0.22) 56%, transparent 80%)",
          backgroundSize: "260% 100%",
          backgroundPosition: exitPhase === "idle" ? "120% 0" : "-120% 0",
          opacity: exitPhase === "idle" ? 0 : exitPhase === "flash" ? 1 : 0,
          transition:
            "background-position 1300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 900ms ease-out",
          mixBlendMode: "screen",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
        <Wordmark size="md" />
        <span
          className="block h-px w-8"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
      </div>

      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-8 right-8 md:bottom-10 md:right-10 flex items-center gap-3 z-10"
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "11px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          fontWeight: 500,
          opacity: fading ? 0 : 1,
          transitionDuration: "600ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
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
