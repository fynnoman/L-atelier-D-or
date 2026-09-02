"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <Link
        href={`/kollektion/${product.slug}`}
        className="group relative overflow-hidden rounded-[28px] aspect-[4/5] block"
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0")}
        />
        <div className="absolute inset-0 border border-white/5 rounded-[28px] pointer-events-none" />

        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="glass-soft rounded-full px-4 py-1 text-[0.68rem] tracking-[0.28em] uppercase">
              {product.edition}
            </span>
            <span className="text-[0.68rem] tracking-[0.28em] uppercase text-ink-2">
              N° {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <div className="eyebrow">{product.subtitle}</div>
            <h3 className="mt-2 font-display text-4xl md:text-5xl">
              {product.name.split(" ")[0]}{" "}
              <span className="serif-italic gold-text">
                {product.name.split(" ").slice(1).join(" ")}
              </span>
            </h3>
            <div className="mt-3 text-sm text-ink-2">{product.price}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
