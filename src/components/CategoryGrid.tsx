"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  paragraph?: string;
  products: Product[];
  cta?: { href: string; label: string };
  columns?: 2 | 3 | 4;
  aspect?: string;
};

export default function CategoryGrid({
  eyebrow,
  title,
  paragraph,
  products,
  cta,
  columns = 4,
  aspect = "aspect-[4/5]",
}: Props) {
  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-2 lg:grid-cols-4";

  return (
    <section className="relative bg-parchment py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="eyebrow-gold">{eyebrow}</span>
              <span className="h-px w-16 rule-gold-hard" />
            </div>
            <h2
              className="display text-ink"
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3.8rem)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              {title}
            </h2>
          </div>
          {paragraph && (
            <p className="max-w-sm text-[14px] leading-[1.9] text-muted">
              {paragraph}
            </p>
          )}
        </div>

        <div className={`grid ${colClass} gap-x-4 md:gap-x-6 gap-y-16 md:gap-y-24`}>
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} aspect={aspect} index={i} />
          ))}
        </div>

        {cta && (
          <div className="mt-20 md:mt-28 flex justify-center">
            <Link href={cta.href} className="lv-btn">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
