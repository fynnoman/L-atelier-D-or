"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "lad-intro-v1";

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    const seen =
      typeof window !== "undefined" && window.sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setActive(true);
      document.documentElement.style.overflow = "hidden";
      const t = window.setTimeout(() => setCanSkip(true), 1800);
      return () => window.clearTimeout(t);
    }
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
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
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
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6"
          >
            <div className="eyebrow text-white/70">Maison d'Optique</div>
            <div className="mt-3 font-display text-[10vw] leading-[0.95] md:text-[6vw] text-white/95 tracking-tight">
              L&apos;Atelier <span className="serif-italic gold-text">d&apos;Or</span>
            </div>
          </motion.div>

          <AnimatePresence>
            {canSkip && !fading && (
              <motion.button
                key="skip"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={finish}
                className="absolute bottom-8 right-8 text-white/70 text-xs tracking-[0.28em] uppercase hover:text-white transition"
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
