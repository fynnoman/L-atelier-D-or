"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/data/products";
import PlaceholderImage from "./PlaceholderImage";
import InquiryModal from "./InquiryModal";
import Product3D from "./Product3D";

// LV product detail: large image column left, quiet metadata right.
// A "3D anschauen" toggle swaps the photo for a rotatable 3D preview
// tinted by the active color chip.
export default function ProductDetail({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [colorIx, setColorIx] = useState(0);
  const [view3D, setView3D] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const activeColor = product.colors[colorIx];

  return (
    <>
      <section className="relative bg-bg pt-24 md:pt-32 pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Image column */}
          <div className="md:col-span-7 lg:col-span-8 md:sticky md:top-24 self-start space-y-2 md:space-y-3">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-3">
              <AnimatePresence mode="wait">
                {!view3D ? (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <PlaceholderImage
                      src={product.image}
                      alt={product.imageAlt}
                      sizes="(min-width: 768px) 60vw, 100vw"
                      quality={82}
                      className="object-cover"
                      priority
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 mix-blend-multiply opacity-30"
                      style={{
                        background: `linear-gradient(180deg, transparent 60%, ${activeColor.hex}22)`,
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="scene"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(198,154,90,0.15), transparent 60%), #050505",
                    }}
                  >
                    <Product3D tint={activeColor.hex} autoRotate />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* View toggle */}
              <div className="absolute right-4 top-4 z-10 flex gap-2">
                <button
                  onClick={() => setView3D(false)}
                  className="px-3 py-1.5 text-[10px] uppercase"
                  style={{
                    letterSpacing: "0.24em",
                    background: !view3D ? "#111" : "rgba(255,255,255,0.85)",
                    color: !view3D ? "#fff" : "#111",
                    transition: "background 240ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  Foto
                </button>
                <button
                  onClick={() => setView3D(true)}
                  className="px-3 py-1.5 text-[10px] uppercase"
                  style={{
                    letterSpacing: "0.24em",
                    background: view3D ? "#111" : "rgba(255,255,255,0.85)",
                    color: view3D ? "#fff" : "#111",
                    transition: "background 240ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  3D
                </button>
              </div>

              {view3D && (
                <div
                  className="absolute inset-x-0 bottom-4 z-10 text-center text-white/60 text-[10px] uppercase pointer-events-none"
                  style={{ letterSpacing: "0.32em" }}
                >
                  Ziehen zum Drehen
                </div>
              )}
            </div>

            {/* Second detail thumbnail row */}
            <div className="hidden md:grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden bg-bg-3">
                <PlaceholderImage
                  src={product.image}
                  alt={`${product.name} · Detail`}
                  sizes="30vw"
                  quality={76}
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden bg-bg-3">
                <PlaceholderImage
                  src={product.image}
                  alt={`${product.name} · Bügel`}
                  sizes="30vw"
                  quality={76}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info column */}
          <div className="md:col-span-5 lg:col-span-4 md:pt-4 space-y-10">
            <div>
              <p className="eyebrow">{product.subtitle}</p>
              <h1 className="mt-5 font-light text-ink text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em]">
                {product.name}
              </h1>
              <p className="mt-4 text-[16px] text-ink font-light">{product.price}</p>
            </div>

            <div className="hairline-soft" />

            <p className="text-[14.5px] leading-[1.8] text-muted">{product.story}</p>

            <div>
              <p className="eyebrow mb-4">Coloris</p>
              <div className="flex flex-wrap items-center gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={c.label}
                    onClick={() => setColorIx(i)}
                    aria-label={c.label}
                    className="group"
                    style={{ transition: "transform 160ms var(--ease-out)" }}
                    onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.94)")}
                    onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <span
                      className="block h-8 w-8 rounded-full border"
                      style={{
                        background: c.hex,
                        borderColor:
                          i === colorIx ? "#111" : "rgba(17,17,17,0.15)",
                        boxShadow:
                          i === colorIx
                            ? "0 0 0 3px #fff, 0 0 0 4px #111"
                            : "none",
                      }}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-muted">
                {activeColor.label}
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">Material</p>
              <ul className="space-y-2 text-[13.5px] text-ink font-light">
                {product.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Mesures</p>
              <dl className="divide-y divide-line-soft border-y border-line-soft">
                {product.measurements.map((m) => (
                  <div key={m.label} className="flex justify-between py-3">
                    <dt className="text-[13.5px] text-muted">{m.label}</dt>
                    <dd className="text-[13.5px] text-ink font-light">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-3">
              <button
                ref={triggerRef}
                onClick={() => setOpen(true)}
                className="lv-btn lv-btn-solid w-full justify-center"
              >
                Reservieren
              </button>
              <a href="/kontakt" className="lv-btn w-full justify-center">
                Anprobe vereinbaren
              </a>
            </div>

            <p className="text-[12px] text-muted leading-relaxed">
              Alle Fassungen werden nach Anprobe und individueller Sehstärke
              gefertigt. Lieferzeit 4 bis 6 Wochen. Réparation à vie.
            </p>
          </div>
        </div>
      </section>

      <InquiryModal
        open={open}
        onClose={() => setOpen(false)}
        productName={product.name}
        triggerRef={triggerRef}
      />
    </>
  );
}
