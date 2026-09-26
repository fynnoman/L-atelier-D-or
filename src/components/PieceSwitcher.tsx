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
                className="block w-full aspect-square transition-transform duration-500 ease-out group-hover:scale-[0.96]"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                  border: active
                    ? "2px solid var(--n-ink)"
                    : "1px solid var(--n-line)",
                  boxShadow: active
                    ? "inset 0 0 0 3px var(--n-bg)"
                    : "none",
                }}
              />
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
