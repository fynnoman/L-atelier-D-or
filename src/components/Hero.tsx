"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MonogramScene from "./MonogramScene";

// Cinematic 3D hero. Full-bleed dark stage with a slowly rotating gold
// monogram sculpture at centre, editorial LV-style copy stacked bottom.
// The scene drifts and scales slightly on scroll for depth.
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1, 1.32]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[110dvh] min-h-[720px] w-full overflow-hidden bg-black"
    >
      {/* Ambient warmth */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(198,154,90,0.22), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 100%, rgba(74,47,24,0.35), transparent 55%), #050505",
        }}
      />

      {/* 3D scene */}
      <motion.div
        style={{ y: canvasY, scale: canvasScale }}
        className="absolute inset-0"
      >
        <MonogramScene metal="gold" />
      </motion.div>

      {/* Vignette + grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 45%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.94  0 0 0 0 0.88  0 0 0 0 0.78  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Top corner ornaments */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 z-10 hidden md:block text-white/60">
        <p className="text-[10px] uppercase" style={{ letterSpacing: "0.4em" }}>
          Édition
        </p>
        <p
          className="mt-2 text-[22px] font-light"
          style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
        >
          N° 01
        </p>
      </div>
      <div className="absolute top-24 md:top-28 right-6 md:right-12 z-10 hidden md:block text-white/60 text-right">
        <p className="text-[10px] uppercase" style={{ letterSpacing: "0.4em" }}>
          Automne / Hiver
        </p>
        <p
          className="mt-2 text-[22px] font-light"
          style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
        >
          MMXXV
        </p>
      </div>

      {/* Editorial copy */}
      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="absolute inset-x-0 bottom-14 md:bottom-20 z-10 flex flex-col items-center gap-6 px-6 text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] uppercase text-white/75"
          style={{ letterSpacing: "0.4em" }}
        >
          Nouvelle Collection · Automne / Hiver 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="wordmark text-white text-[clamp(1.4rem,3.2vw,2.4rem)] font-light"
          style={{ letterSpacing: "0.3em" }}
        >
          L&apos;Atelier d&apos;Or
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="max-w-xl text-[13.5px] leading-[1.75] text-white/80"
        >
          Vier Fassungen aus Titan, Acetat und 18 Karat. Zwischen Paris,
          Berlin und dem Sentier von Hand gefertigt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 flex flex-wrap justify-center gap-3"
        >
          <Link href="/kollektion" className="lv-btn lv-btn-light">
            Kollektion entdecken
          </Link>
          <Link href="/atelier" className="lv-btn lv-btn-light">
            Die Maison
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-3 inset-x-0 z-10 flex justify-center pointer-events-none">
        <div className="flex items-center gap-3 text-[10px] uppercase text-white/50" style={{ letterSpacing: "0.4em" }}>
          <span className="h-px w-8 bg-white/40" />
          Défilez
        </div>
      </div>
    </section>
  );
}
