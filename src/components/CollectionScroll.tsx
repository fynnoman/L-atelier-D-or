"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { products } from "@/data/products";

function ProductRow({
  index,
  product,
}: {
  index: number;
  product: (typeof products)[number];
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const swap = index % 2 === 1;

  return (
    <div
      ref={rowRef}
      className="relative min-h-screen flex items-center py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center">
        <motion.div
          style={{ y, scale, opacity }}
          className={`relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[28px] ${
            swap ? "md:col-start-7 md:col-span-6" : "md:col-span-6"
          }`}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${product.colors[0]?.hex ?? "#1a1714"} 0%, #0b0a08 100%)`,
            }}
          />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(217,183,138,0.35), transparent 55%)",
            }}
          />
          {/* image or placeholder */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />
          <div className="absolute inset-0 border border-white/5 rounded-[28px] pointer-events-none" />

          <div className="absolute left-6 top-6 glass-soft rounded-full px-4 py-1 text-[0.68rem] tracking-[0.28em] uppercase text-ink-2">
            {product.edition}
          </div>
          <div className="absolute right-6 bottom-6 text-[0.68rem] tracking-[0.28em] uppercase text-ink-2">
            N° {String(index + 1).padStart(2, "0")}
          </div>
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className={`${swap ? "md:col-start-1 md:col-span-5 md:row-start-1" : "md:col-span-6"}`}
        >
          <div className="eyebrow">{product.subtitle}</div>
          <h3 className="mt-4 font-display text-6xl md:text-7xl leading-[0.95]">
            {product.name.split(" ")[0]}{" "}
            <span className="serif-italic gold-text">
              {product.name.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <p className="mt-6 max-w-md text-ink-2 leading-relaxed">
            {product.story}
          </p>

          <div className="mt-8 flex items-center gap-3">
            {product.colors.map((c) => (
              <span
                key={c.label}
                title={c.label}
                className="h-5 w-5 rounded-full border border-white/20"
                style={{ background: c.hex }}
              />
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Link href={`/kollektion/${product.slug}`} className="btn btn-primary">
              Ansehen
            </Link>
            <span className="text-sm text-muted tracking-wide">{product.price}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function CollectionScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const headY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const headOpacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [1, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="kollektion" className="relative">
      <div className="sticky top-0 z-10 pt-32 pb-6 pointer-events-none">
        <motion.div
          style={{ y: headY, opacity: headOpacity }}
          className="mx-auto max-w-[1400px] px-6 md:px-10"
        >
          <div className="eyebrow">Kollektion Automne / Hiver</div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Vier Objekte.{" "}
            <span className="serif-italic gold-text">Jedes einzeln</span> gefertigt.
          </h2>
        </motion.div>
      </div>

      <div className="relative -mt-24">
        {products.map((p, i) => (
          <ProductRow key={p.slug} index={i} product={p} />
        ))}
      </div>
    </section>
  );
}
