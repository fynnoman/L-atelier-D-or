"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Product } from "@/data/products";
import InquiryModal from "./InquiryModal";

export default function ProductDetail({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [colorIx, setColorIx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const activeColor = product.colors[colorIx];

  return (
    <>
      <section ref={ref} className="mt-10 relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 md:sticky md:top-24 self-start">
            <motion.div
              style={{ y, scale }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px]"
            >
              <div
                className="absolute inset-0 transition-colors duration-700"
                style={{
                  background: `linear-gradient(135deg, ${activeColor.hex} 0%, #0b0a08 100%)`,
                }}
              />
              <div
                className="absolute inset-0 mix-blend-overlay opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, rgba(217,183,138,0.4), transparent 55%)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0")}
              />
              <div className="absolute inset-0 border border-white/5 rounded-[32px] pointer-events-none" />
              <div className="absolute left-6 top-6 glass-soft rounded-full px-4 py-1 text-[0.68rem] tracking-[0.28em] uppercase">
                {product.edition}
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-5 md:pt-8 space-y-10">
            <div>
              <div className="eyebrow">{product.subtitle}</div>
              <h1 className="mt-4 font-display text-6xl md:text-7xl leading-[0.95]">
                {product.name.split(" ")[0]}{" "}
                <span className="serif-italic gold-text">
                  {product.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <div className="mt-4 text-xl text-ink-2">{product.price}</div>
            </div>

            <p className="text-ink-2 text-lg leading-relaxed">{product.story}</p>

            <div>
              <div className="eyebrow mb-4">Farbe</div>
              <div className="flex flex-wrap items-center gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={c.label}
                    onClick={() => setColorIx(i)}
                    className={`group flex items-center gap-2 rounded-full pl-1 pr-4 py-1 border transition ${
                      i === colorIx
                        ? "border-gold-2 bg-white/5"
                        : "border-white/10 hover:border-white/25"
                    }`}
                  >
                    <span
                      className="h-6 w-6 rounded-full border border-white/20"
                      style={{ background: c.hex }}
                    />
                    <span className="text-xs uppercase tracking-[0.2em]">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="eyebrow mb-3">Material</div>
              <ul className="flex flex-wrap gap-2">
                {product.materials.map((m) => (
                  <li
                    key={m}
                    className="text-[0.72rem] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/10 text-ink-2"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow mb-3">Maße</div>
              <dl className="divide-y divide-white/8 border-y border-white/8">
                {product.measurements.map((m) => (
                  <div key={m.label} className="flex justify-between py-3">
                    <dt className="text-ink-2 text-sm">{m.label}</dt>
                    <dd className="text-sm font-display">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => setOpen(true)} className="btn btn-primary">
                Reservieren
              </button>
              <a href="#kontakt" className="btn btn-ghost">
                Beratung
              </a>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Alle Fassungen werden nach Anprobe und individueller Sehstärke gefertigt.
              Lieferzeit: 4 bis 6 Wochen.
            </p>
          </div>
        </div>
      </section>

      <InquiryModal
        open={open}
        onClose={() => setOpen(false)}
        productName={product.name}
      />
    </>
  );
}
