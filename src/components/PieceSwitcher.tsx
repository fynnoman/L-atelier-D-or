"use client";

import Link from "next/link";
import type { Piece } from "@/data/collection";
import { PIECES } from "@/data/collection";
import { useT } from "@/lib/i18n/LanguageContext";

export default function PieceSwitcher({ current }: { current: Piece["slug"] }) {
  const t = useT();
  return (
    <div className="flex flex-col gap-4">
      <div className="n-eyebrow">{t.pieceSwitcher.label}</div>
      <div className="flex items-stretch gap-3">
        {PIECES.map((p) => {
          const active = p.slug === current;
          return (
            <Link
              key={p.slug}
              href={`/collection/${p.slug}`}
              aria-label={t.pieceSwitcher.aria(p.name)}
              aria-current={active ? "page" : undefined}
              className="group flex-1 flex flex-col items-center gap-2"
            >
              <span
                className="relative block w-full aspect-square overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[0.98]"
                style={{
                  background: "transparent",
                }}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    style={{ opacity: active ? 1 : 0.78 }}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </span>
              <span
                className="n-product-name text-center leading-tight"
                style={{
                  color: active ? "var(--n-ink)" : "var(--n-muted)",
                  fontSize: "18px",
                  lineHeight: 1,
                  opacity: active ? 1 : 0.7,
                }}
              >
                {p.name.replace("Roi ", "")}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
