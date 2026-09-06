"use client";

import { motion } from "framer-motion";
import type { ProvenanceStep } from "@/data/passeport";

export default function PasseportTimeline({
  timeline,
}: {
  timeline: ProvenanceStep[];
}) {
  return (
    <section className="mt-16 md:mt-20">
      <p className="eyebrow-gold mb-4">Chronique · Provenance</p>
      <h2 className="display text-ink text-[clamp(1.8rem,3vw,2.6rem)] mb-10 leading-[1.02]">
        Ihre Fassung, Tag für Tag.
      </h2>

      <ol className="relative border-l border-line-soft ml-3 md:ml-5">
        {timeline.map((step, i) => (
          <motion.li
            key={`${step.date}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pl-8 md:pl-10 pb-10 md:pb-12 relative"
          >
            <span
              className="absolute -left-[7px] top-1 h-3 w-3 rounded-full"
              style={{
                background: "var(--or)",
                boxShadow: "0 0 0 3px var(--parchment)",
              }}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline gap-3">
              <p
                className="numeral text-or-2"
                style={{
                  fontSize: "clamp(1.4rem,2vw,1.8rem)",
                  fontStyle: "italic",
                }}
              >
                {step.numeral}
              </p>
              <p className="eyebrow-gold">{step.action}</p>
            </div>
            <p className="mt-2 text-[11.5px] uppercase tracking-[0.22em] text-muted">
              {step.date} · {step.atelier} · {step.handler}
            </p>
            <p className="mt-4 text-[14.5px] text-ink font-light leading-[1.8] max-w-[720px]">
              {step.detail}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
