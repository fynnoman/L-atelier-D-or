"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "./PlaceholderImage";
import Wordmark from "./Wordmark";

// Full-bleed cinematic opener. Warm obsidian wash over the image,
// editorial typography stacked left, gold plaquette bottom-right,
// scroll indicator at the base.
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 160]);
  const imgY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] min-h-[680px] w-full overflow-hidden grain grain-dark"
      style={{ backgroundColor: "var(--noir)" }}
    >
      {/* Image with slow parallax */}
      <motion.div
        style={{ y: imgY }}
        className="absolute -inset-y-[8%] inset-x-0 will-change-transform"
      >
        <PlaceholderImage
          src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=2600&q=88"
          alt="L'Atelier d'Or — Automne / Hiver MMXXV"
          sizes="100vw"
          quality={85}
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Warm obsidian wash — pulls tone toward the maison palette */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,0.55) 0%, rgba(10,8,6,0.25) 30%, rgba(10,8,6,0.35) 55%, rgba(10,8,6,0.85) 100%), radial-gradient(ellipse at 82% 22%, rgba(198,154,63,0.14), transparent 55%)",
        }}
      />

      {/* Vertical gold hairline on the left */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-6 md:left-12 top-24 bottom-24 w-px origin-top"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--or-glow) 20%, var(--or) 50%, var(--or-2) 80%, transparent)",
        }}
        aria-hidden
      />

      {/* Editorial content */}
      <motion.div
        style={{ y, opacity: fade }}
        className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 pt-32"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Top-line meta */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-16 flex items-center gap-4"
          >
            <span
              className="inline-block h-[5px] w-[5px] rotate-45"
              style={{ background: "var(--or)" }}
              aria-hidden
            />
            <p
              className="text-[10.5px] uppercase"
              style={{
                color: "rgba(230, 201, 138, 0.85)",
                letterSpacing: "0.36em",
              }}
            >
              Édition Automne · MMXXV
            </p>
            <span
              className="hidden md:inline-block h-px w-24"
              style={{
                background:
                  "linear-gradient(90deg, var(--or), transparent)",
              }}
              aria-hidden
            />
          </motion.div>

          {/* Massive display type */}
          <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16">
            <div className="md:flex-1 max-w-[900px]">
              <motion.h1
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="display text-parchment"
                style={{
                  fontSize: "clamp(2.8rem, 8.4vw, 8.4rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.035em",
                }}
              >
                <span className="block">L&apos;or,</span>
                <span
                  className="block"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontStyle: "italic",
                    color: "var(--or-glow)",
                  }}
                >
                  la lumière,
                </span>
                <span className="block">la ligne.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 max-w-lg text-[14px] leading-[1.9]"
                style={{ color: "rgba(245, 239, 225, 0.78)" }}
              >
                Vier neue Fassungen. Titan Béta, Acetat Mazzucchelli, Vergoldung 18
                Karat. Zwischen Paris, Berlin und dem Sentier von Hand
                gefertigt — jede Édition auf sechzig bis einhundertzwanzig Stück
                signiert.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Link href="/kollektion" className="btn-gold">
                  Kollektion entdecken
                </Link>
                <Link href="/kontakt" className="lv-btn lv-btn-light">
                  Salon Privé réserver
                </Link>
              </motion.div>
            </div>

            {/* Right column: plaque + editorial meta */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="md:w-[280px] shrink-0 md:pl-8"
            >
              <div className="flex md:flex-col items-start gap-6 md:gap-8">
                <div>
                  <p
                    className="text-[10px] uppercase mb-3"
                    style={{
                      color: "rgba(230, 201, 138, 0.72)",
                      letterSpacing: "0.34em",
                    }}
                  >
                    Nouvelles Créations
                  </p>
                  <p
                    className="numeral text-parchment"
                    style={{
                      fontSize: "clamp(2rem, 3vw, 2.8rem)",
                      lineHeight: 1,
                    }}
                  >
                    IV
                  </p>
                  <p
                    className="mt-2 text-[11px]"
                    style={{
                      color: "rgba(245, 239, 225, 0.55)",
                      letterSpacing: "0.24em",
                    }}
                  >
                    Fassungen
                  </p>
                </div>
                <div className="h-16 w-px hidden md:block" style={{ background: "rgba(230, 201, 138, 0.35)" }} aria-hidden />
                <div>
                  <p
                    className="text-[10px] uppercase mb-3"
                    style={{
                      color: "rgba(230, 201, 138, 0.72)",
                      letterSpacing: "0.34em",
                    }}
                  >
                    Reifezeit
                  </p>
                  <p
                    className="numeral text-parchment"
                    style={{
                      fontSize: "clamp(2rem, 3vw, 2.8rem)",
                      lineHeight: 1,
                    }}
                  >
                    VI
                  </p>
                  <p
                    className="mt-2 text-[11px]"
                    style={{
                      color: "rgba(245, 239, 225, 0.55)",
                      letterSpacing: "0.24em",
                    }}
                  >
                    Semaines
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Wordmark stamped bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.0 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 md:bottom-8 flex justify-center"
      >
        <Wordmark size="sm" variant="light" className="opacity-70" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.9 }}
        className="pointer-events-none absolute right-6 md:right-12 bottom-8 md:bottom-10 hidden md:flex flex-col items-center gap-3"
      >
        <span
          className="text-[9.5px] uppercase"
          style={{
            color: "rgba(230, 201, 138, 0.7)",
            letterSpacing: "0.36em",
            writingMode: "vertical-rl",
          }}
        >
          Défiler
        </span>
        <span
          className="block h-10 w-px"
          style={{
            background:
              "linear-gradient(180deg, var(--or), transparent)",
          }}
          aria-hidden
        />
      </motion.div>
    </section>
  );
}
