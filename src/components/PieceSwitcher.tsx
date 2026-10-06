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
          const primary = p.teintes[0]?.hex ?? "#0A0A0A";
          const secondary = p.teintes[1]?.hex ?? primary;
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
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                  borderRadius: "clamp(6px, 0.6vw, 10px)",
                  outline: active ? "2px solid var(--n-ink)" : "none",
                  outlineOffset: active ? "2px" : undefined,
                }}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-contain p-[14%] transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </span>
              <span
                className="n-meta text-center leading-tight"
                style={{
                  color: active ? "var(--n-ink)" : "var(--n-muted)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
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
