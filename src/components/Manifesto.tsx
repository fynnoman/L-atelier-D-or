"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = [
  { text: "Vier", gold: false },
  { text: "Fassungen", gold: false },
  { text: "im", gold: false },
  { text: "Jahr.", gold: false },
  { text: "Sechs", gold: false },
  { text: "Wochen", gold: false },
  { text: "Reifezeit.", gold: true },
  { text: "Achtzehn", gold: false },
  { text: "Karat.", gold: true },
  { text: "Sieben", gold: false },
  { text: "Tage", gold: false },
  { text: "Politur.", gold: true },
  { text: "Ein", gold: false },
  { text: "Objekt", gold: false },
  { text: "bleibt", gold: false },
  { text: "lebendig,", gold: false },
  { text: "solange", gold: false },
  { text: "eine", gold: false },
  { text: "Hand", gold: true },
  { text: "es", gold: false },
  { text: "weiterträgt.", gold: true },
];

// Statement typography moment. Editorial, restrained motion — words fade
// in on scroll with a subtle stagger. Gold-emphasised words are the punch.
export default function Manifesto() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative bg-noir grain grain-dark py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: "var(--noir)" }}
    >
      {/* Ambient gold radial */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(198,154,63,0.14), transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(198,154,63,0.10), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-10 md:mb-14 flex items-center gap-6">
          <span className="eyebrow-gold">Manifeste</span>
          <span className="h-px flex-1 rule-gold" />
        </div>

        <h2
          className="display text-parchment"
          style={{
            fontSize: "clamp(2rem, 4.6vw, 4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {words.map((w, i) => (
            <motion.span
              key={`${w.text}-${i}`}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: reduced ? 0.4 : 0.9,
                delay: reduced ? 0 : Math.min(i * 0.045, 1.4),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.3em]"
              style={
                w.gold
                  ? {
                      fontFamily: "var(--font-fraunces), serif",
                      fontStyle: "italic",
                      color: "var(--or-glow)",
                      fontWeight: 300,
                    }
                  : undefined
              }
            >
              {w.text}
            </motion.span>
          ))}
        </h2>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <span
              className="inline-block h-px w-14"
              style={{ background: "var(--or)" }}
              aria-hidden
            />
            <p
              className="text-[10.5px] uppercase"
              style={{
                color: "var(--or-soft)",
                letterSpacing: "0.34em",
              }}
            >
              Rémi Kessler — Maître Fondateur
            </p>
          </div>
          <a href="/atelier" className="btn-ghost-gold self-start md:self-auto">
            Die Werkstatt
          </a>
        </div>
      </div>
    </section>
  );
}
