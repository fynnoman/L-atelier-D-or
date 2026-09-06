"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "./PlaceholderImage";

// Mid-page immersion moment: full-bleed atelier photo, slow parallax,
// pull quote centred with gold flourishes and hairlines.
export default function Immersion() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-140, 140]
  );

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-noir grain grain-dark h-[92dvh] min-h-[620px]"
      style={{ backgroundColor: "var(--noir)" }}
    >
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[18%] inset-x-0 will-change-transform"
      >
        <PlaceholderImage
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2600&q=86"
          alt="Atelier · Detail — Jura"
          sizes="100vw"
          quality={82}
          className="object-cover opacity-90"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,0.65) 0%, rgba(10,8,6,0.4) 45%, rgba(10,8,6,0.75) 100%), radial-gradient(ellipse at 50% 50%, rgba(198,154,63,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center text-parchment"
        >
          <div className="inline-flex items-center gap-4 justify-center">
            <span className="h-px w-8" style={{ background: "var(--or)" }} aria-hidden />
            <p
              className="text-[10.5px] uppercase"
              style={{
                color: "rgba(230, 201, 138, 0.85)",
                letterSpacing: "0.4em",
              }}
            >
              Immersion · Manufaktur Jura
            </p>
            <span className="h-px w-8" style={{ background: "var(--or)" }} aria-hidden />
          </div>

          <p
            className="mt-14 display-italic text-parchment"
            style={{
              fontSize: "clamp(1.8rem, 3.6vw, 3.2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            „Ein Objekt bleibt nur so lange lebendig, wie eine{" "}
            <span style={{ color: "var(--or-glow)" }}>Hand</span> es
            weiterträgt."
          </p>

          <div className="mt-14 flex items-center justify-center gap-4">
            <span
              className="inline-block h-[5px] w-[5px] rotate-45"
              style={{ background: "var(--or)" }}
              aria-hidden
            />
            <p
              className="text-[10.5px] uppercase"
              style={{
                color: "rgba(230, 201, 138, 0.8)",
                letterSpacing: "0.36em",
              }}
            >
              Rémi Kessler · Maître Fondateur · 1972
            </p>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
