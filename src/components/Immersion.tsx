"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "./PlaceholderImage";

// Editorial mid-page immersion: full-bleed atelier photo with a slow
// parallax and a pull quote centred over top. No 3D, no ornament.
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
      className="relative w-full overflow-hidden bg-black h-[85dvh] min-h-[560px]"
    >
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[18%] inset-x-0 will-change-transform"
      >
        <PlaceholderImage
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2600&q=82"
          alt="Atelier · Detail"
          sizes="100vw"
          quality={82}
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/55" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-center text-white"
        >
          <p
            className="text-[10px] uppercase text-white/70"
            style={{ letterSpacing: "0.4em" }}
          >
            Immersion · Atelier
          </p>
          <span className="mt-6 mx-auto block h-px w-14 bg-white/50" />
          <p
            className="mt-10 font-light text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.3] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
          >
            „Ein Objekt bleibt nur so lange lebendig, wie eine Hand es
            weiterträgt."
          </p>
          <p
            className="mt-8 text-[10px] uppercase text-white/70"
            style={{ letterSpacing: "0.4em" }}
          >
            Rémi Kessler · Maître Fondateur
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
