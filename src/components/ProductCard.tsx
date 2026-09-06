"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import PlaceholderImage from "./PlaceholderImage";

// Editorial product card. Gold hairline grows on hover, image zooms
// slowly, edition line pairs italic Fraunces with tight uppercase meta.
export default function ProductCard({
  product,
  aspect = "aspect-[4/5]",
  index,
}: {
  product: Product;
  aspect?: string;
  index?: number;
}) {
  const numero = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <Link
      href={`/kollektion/${product.slug}`}
      className="group relative block"
    >
      <div className={`relative w-full overflow-hidden bg-bg-3 ${aspect}`}>
        <div
          className="absolute inset-0 group-hover:scale-[1.04]"
          style={{ transition: "transform 1400ms var(--ease-editorial)" }}
        >
          <PlaceholderImage
            src={product.image}
            alt={product.imageAlt}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            quality={78}
            className="object-cover"
          />
        </div>

        {/* Warm gold wash on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            transition: "opacity 500ms var(--ease-out)",
            background:
              "linear-gradient(180deg, rgba(198,154,63,0) 0%, rgba(198,154,63,0.08) 65%, rgba(122,74,26,0.22) 100%)",
          }}
          aria-hidden
        />

        {/* Top-left plaque */}
        <div className="absolute left-4 top-4 z-10">
          <span
            className="inline-flex items-center gap-2 text-[9.5px] uppercase font-medium"
            style={{
              color: "var(--parchment)",
              letterSpacing: "0.3em",
              textShadow: "0 1px 8px rgba(10,8,6,0.55)",
            }}
          >
            <span
              className="inline-block h-[4px] w-[4px] rotate-45"
              style={{ background: "var(--or)" }}
              aria-hidden
            />
            <span className="numeral not-italic">Nº {numero}</span>
            <span className="opacity-60">/</span>
            <span>{product.edition.replace("Édition de ", "")}</span>
          </span>
        </div>

        {/* Bottom-right price plaquette on hover */}
        <div
          className="pointer-events-none absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
          style={{ transition: "all 500ms var(--ease-out)" }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase font-medium backdrop-blur-md"
            style={{
              borderColor: "rgba(230, 201, 138, 0.55)",
              color: "var(--parchment)",
              background: "rgba(10, 8, 6, 0.35)",
              letterSpacing: "0.24em",
            }}
          >
            Entdecken →
          </span>
        </div>
      </div>

      {/* Gold hairline that grows on hover */}
      <div
        className="mt-4 h-px w-full origin-left scale-x-0 group-hover:scale-x-100"
        style={{
          background:
            "linear-gradient(90deg, var(--or-2), var(--or-glow), var(--or-2))",
          transition: "transform 600ms var(--ease-editorial)",
        }}
        aria-hidden
      />

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p
            className="text-[16px] text-ink"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            {product.name}
          </p>
          <p className="mt-1 text-[10.5px] uppercase tracking-[0.24em] text-muted">
            {product.subtitle}
          </p>
        </div>
        <p
          className="text-[13.5px] text-ink whitespace-nowrap"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          {product.price}
        </p>
      </div>
    </Link>
  );
}
