"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MonogramScene from "./MonogramScene";

// Immersion — a second 3D moment mid-page. Sticky dark stage with the
// monogram sculpture and an editorial pull quote fading in as the section
// crosses the viewport.
export default function Immersion() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const quoteOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.65, 0.9], [0, 1, 1, 0]);
  const quoteY = useTransform(scrollYProgress, [0.15, 0.5], [30, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      className="relative h-[180vh] w-full bg-black"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Ambient warmth */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(198,154,90,0.2), transparent 60%), #050505",
          }}
        />

        {/* 3D scene, drifting */}
        <motion.div
          style={{ y: sceneY }}
          className="absolute inset-0"
        >
          <MonogramScene metal="gold" scale={0.9} />
        </motion.div>

        {/* Vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 45%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Editorial quote */}
        <motion.div
          style={{ opacity: quoteOpacity, y: quoteY }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6 text-center text-white"
        >
          <p className="text-[10px] uppercase text-white/70" style={{ letterSpacing: "0.4em" }}>
            Immersion · Atelier
          </p>
          <span className="mt-6 block h-px w-16 bg-white/50" />
          <blockquote className="mt-10 max-w-3xl">
            <p
              className="font-light text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.3] tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
            >
              „Ein Objekt bleibt nur so lange lebendig, wie eine Hand es
              weiterträgt."
            </p>
            <p className="mt-8 text-[10px] uppercase text-white/70" style={{ letterSpacing: "0.4em" }}>
              Rémi Kessler · Maître Fondateur
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
