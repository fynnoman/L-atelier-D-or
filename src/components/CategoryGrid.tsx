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

// LV product grid — 2/3/4 columns, tight editorial spacing, section title
// on the left with paragraph, "Alle entdecken" CTA underneath the grid.
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
    <section className="relative bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14 md:mb-20">
          <div className="max-w-xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-5 font-light text-ink text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em]">
              {title}
            </h2>
          </div>
          {paragraph && (
            <p className="max-w-sm text-[14px] leading-[1.75] text-muted">
              {paragraph}
            </p>
          )}
        </div>

        <div className={`grid ${colClass} gap-x-2 md:gap-x-3 gap-y-14 md:gap-y-20`}>
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} aspect={aspect} />
          ))}
        </div>

        {cta && (
          <div className="mt-16 md:mt-24 flex justify-center">
            <Link href={cta.href} className="lv-btn">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
