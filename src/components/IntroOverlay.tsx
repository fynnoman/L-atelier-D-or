"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "lad-intro-v3";

// Cinematic opening: fullscreen video plays once per session, wordmark
// reveals over top, then curtain fades out to reveal the site.
export default function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [fading, setFading] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setActive(true);
      document.documentElement.style.overflow = "hidden";
      const t = window.setTimeout(() => setCanSkip(true), 1600);
      return () => window.clearTimeout(t);
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
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/video/intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={finish}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: fading ? 0 : 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
          >
            <p
              className="text-[10px] uppercase text-white/70"
              style={{ letterSpacing: "0.4em" }}
            >
              Maison d&apos;Optique · Depuis 1972
            </p>
            <span className="mt-4 block h-px w-14 bg-white/60" />
            <h1
              className="wordmark text-white mt-8 text-[clamp(1.6rem,4vw,3rem)] font-light"
              style={{ letterSpacing: "0.3em" }}
            >
              L&apos;Atelier d&apos;Or
            </h1>
          </motion.div>

          <AnimatePresence>
            {canSkip && !fading && (
              <motion.button
                key="skip"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={finish}
                className="absolute bottom-8 right-8 text-white/75 hover:text-white text-[11px] uppercase"
                style={{
                  letterSpacing: "0.32em",
                  transition: "color 200ms cubic-bezier(0.23,1,0.32,1)",
                }}
              >
                Eintreten →
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
