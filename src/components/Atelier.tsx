"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { k: "1972", v: "Gründung des Ateliers" },
  { k: "42", v: "Schritte pro Fassung" },
  { k: "6 Wochen", v: "Reifezeit des Acetats" },
  { k: "≤ 120", v: "Fassungen pro Serie" },
];

export default function Atelier() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const titleY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="manifest"
      ref={ref}
      className="relative overflow-hidden py-40"
    >
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,138,82,0.14),transparent_60%)]" />
        <div className="absolute inset-0 grain" />
      </motion.div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <motion.div
          style={{ y: titleY }}
          className="md:col-span-7"
        >
          <div className="eyebrow">Manifest</div>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
            Wir bauen{" "}
            <span className="serif-italic gold-text">Objekte</span>,
            <br />
            die bleiben.
          </h2>
          <p className="mt-8 max-w-xl text-ink-2 text-lg leading-relaxed">
            Jede Fassung entsteht in einer kleinen Werkstatt am Rand des Jura.
            Wir schneiden, feilen und polieren von Hand. Wir wählen Acetat, das
            sechs Wochen reift. Wir vergolden mit 18 Karat. Und wir signieren
            jede Serie mit einer Nummer, weil wir wissen, wie viele es sein
            dürfen.
          </p>
          <p className="mt-6 max-w-xl text-ink-2 text-lg leading-relaxed">
            Was uns interessiert, ist die Silhouette einer Linie im Gesicht.
            Die Art, wie Licht auf poliertem Titan sitzt. Das Gewicht einer
            Fassung, das man nach zehn Minuten vergisst.
          </p>
        </motion.div>

        <div className="md:col-span-5 md:pl-8">
          <div className="glass rounded-[24px] p-8 md:p-10">
            <div className="eyebrow mb-6">Werkstatt</div>
            <ul className="divide-y divide-white/8">
              {stats.map((s) => (
                <li key={s.k} className="flex items-baseline justify-between py-4">
                  <span className="font-display text-3xl gold-text">{s.k}</span>
                  <span className="text-sm text-ink-2 text-right max-w-[60%]">{s.v}</span>
                </li>
              ))}
            </ul>
            <div className="hairline my-6" />
            <p className="text-sm text-muted leading-relaxed">
              Handwerk ist eine Entscheidung gegen das Schnellere.
              Wir treffen sie jeden Tag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
