"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import PlaceholderImage from "./PlaceholderImage";

// LV editorial product card. Bild dominant, Name + Preis klein darunter,
// keine Schatten, keine Badges, keine Rabatt-Labels.
export default function ProductCard({
  product,
  aspect = "aspect-[4/5]",
}: {
  product: Product;
  aspect?: string;
}) {
  return (
    <Link
      href={`/kollektion/${product.slug}`}
      className="group block"
    >
      <div className={`relative w-full overflow-hidden bg-bg-3 ${aspect}`}>
        <PlaceholderImage
          src={product.image}
          alt={product.imageAlt}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          quality={78}
          className="object-cover"
          style={{ transition: "transform 900ms var(--ease-editorial)" }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            transition: "opacity 400ms var(--ease-out)",
            background:
              "linear-gradient(0deg, rgba(17,17,17,0.05), rgba(17,17,17,0.02))",
          }}
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="font-light text-[15px] text-ink">{product.name}</p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-muted-2">
            {product.subtitle}
          </p>
        </div>
        <p className="text-[13px] text-ink font-light whitespace-nowrap">
          {product.price}
        </p>
      </div>
    </Link>
  );
}
