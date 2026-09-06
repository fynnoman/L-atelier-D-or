"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "lad-intro-v4";

// Cinematic opening: brief typography moment with gold hairline sweep.
// Video plays underneath for texture. Fades to reveal the site.
export default function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [fading, setFading] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    const skipParam =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).has("nointro");
    const seen =
      skipParam ||
      (typeof window !== "undefined" &&
        window.sessionStorage.getItem(SESSION_KEY));
    if (!seen) {
      setActive(true);
      document.documentElement.style.overflow = "hidden";
      const skipTimer = window.setTimeout(() => setCanSkip(true), 1400);
      const autoTimer = window.setTimeout(() => finish(), 5200);
      return () => {
        window.clearTimeout(skipTimer);
        window.clearTimeout(autoTimer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    if (fading) return;
    setFading(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");
    window.setTimeout(() => {
      setActive(false);
      document.documentElement.style.overflow = "";
    }, 900);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] bg-noir flex items-center justify-center overflow-hidden grain grain-dark"
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundColor: "var(--noir)" }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            src="/video/intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 55%, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.85) 55%, rgba(10,8,6,0.98) 100%)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: fading ? 0 : 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] uppercase"
              style={{
                letterSpacing: "0.44em",
                color: "rgba(230, 201, 138, 0.75)",
              }}
            >
              Maison d&apos;Optique · Depuis 1972
            </motion.p>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: fading ? 0 : 1 }}
              transition={{ delay: 0.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 block h-px w-24 origin-left"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--or-glow) 50%, transparent)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: fading ? 0 : 1, y: 0 }}
              transition={{ delay: 1.05, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <h1
                className="display gilded-shimmer"
                style={{
                  fontSize: "clamp(2.6rem, 6vw, 5.4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                L&apos;Atelier d&apos;Or
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: fading ? 0 : 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-md text-[12.5px] leading-[1.9]"
              style={{
                color: "rgba(245, 239, 225, 0.72)",
              }}
            >
              Handgefertigte Fassungen in kleiner Serie.
              <br />
              Titan, Acetat, 18 Karat — zwischen Paris, Berlin und dem Jura.
            </motion.p>
          </div>

          <AnimatePresence>
            {canSkip && !fading && (
              <motion.button
                key="skip"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={finish}
                className="absolute bottom-10 right-8 group inline-flex items-center gap-3 text-[10.5px] uppercase"
                style={{
                  letterSpacing: "0.34em",
                  color: "var(--or)",
                  transition: "color 220ms var(--ease-out)",
                }}
              >
                <span className="link-gold">Entrer</span>
                <ArrowIcon />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ArrowIcon() {
  return (
    <svg width="22" height="8" viewBox="0 0 22 8" aria-hidden>
      <path
        d="M0 4h20M16 1l5 3-5 3"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
