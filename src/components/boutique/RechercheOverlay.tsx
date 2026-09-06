"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useBoutique } from "@/lib/boutique/BoutiqueProvider";
import { products } from "@/data/products";
import { essentiels } from "@/data/essentiels";
import { artisans } from "@/data/maison";

type ResultKind = "fassung" | "essentiel" | "maison" | "action";
type Result = {
  kind: ResultKind;
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  meta?: string;
  hex?: string;
};

const actions: Result[] = [
  {
    kind: "action",
    slug: "action-essai",
    title: "Essai Virtuel",
    subtitle: "AR-Anprobe im Browser",
    href: "?essai=1",
    meta: "Öffnen",
  },
  {
    kind: "action",
    slug: "action-concierge",
    title: "Salon Privé buchen",
    subtitle: "Paris · Berlin · Jura",
    href: "/concierge",
    meta: "Concierge",
  },
  {
    kind: "action",
    slug: "action-passeport",
    title: "Passeport öffnen",
    subtitle: "Provenance einsehen",
    href: "/passeport",
    meta: "Nummer",
  },
];

export default function RechercheOverlay() {
  const { closeDrawer, openDrawer } = useBoutique();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo<Result[]>(() => {
    const fassungs: Result[] = products.map((p) => ({
      kind: "fassung",
      slug: p.slug,
      title: p.name,
      subtitle: p.subtitle,
      href: `/kollektion/${p.slug}`,
      meta: p.edition,
      hex: p.colors[0]?.hex,
    }));
    const ess: Result[] = essentiels.map((e) => ({
      kind: "essentiel",
      slug: e.slug,
      title: e.name,
      subtitle: e.category,
      href: `/kollektion#${e.slug}`,
      meta: e.price,
    }));
    const maisonPages: Result[] = [
      {
        kind: "maison",
        slug: "atelier",
        title: "Atelier & Histoire",
        subtitle: "1972 · Le Sentier",
        href: "/atelier",
        meta: "Maison",
      },
      {
        kind: "maison",
        slug: "journal",
        title: "Livre d'Or",
        subtitle: "Journal · Materialkunde",
        href: "/journal",
        meta: "Presse",
      },
      {
        kind: "maison",
        slug: "referenzen",
        title: "Presse & Referenzen",
        subtitle: "Vogue · Monocle · AD",
        href: "/referenzen",
        meta: "Referenzen",
      },
    ];
    const artisanEntries: Result[] = artisans.slice(0, 6).map((a) => ({
      kind: "maison",
      slug: `artisan-${a.name.toLowerCase().replace(/\s+/g, "-")}`,
      title: a.name,
      subtitle: a.role,
      href: "/atelier#artisans",
      meta: a.since ?? "Atelier",
    }));
    const maison: Result[] = [...maisonPages, ...artisanEntries];

    const all: Result[] = [...fassungs, ...ess, ...maison, ...actions];
    const query = q.trim().toLowerCase();
    if (!query) return all.slice(0, 9);

    return all.filter((r) =>
      [r.title, r.subtitle, r.meta ?? ""].some((s) =>
        s.toLowerCase().includes(query),
      ),
    );
  }, [q]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter") {
        const chosen = results[active];
        if (!chosen) return;
        if (chosen.slug === "action-essai") {
          e.preventDefault();
          openDrawer("essai");
          return;
        }
        e.preventDefault();
        closeDrawer();
        if (typeof window !== "undefined") window.location.href = chosen.href;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [results, active, closeDrawer, openDrawer]);

  return (
    <motion.section
      key="recherche-sheet"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-[10dvh] z-[96] w-[min(680px,92vw)] -translate-x-1/2 bg-bg text-ink shadow-[0_30px_80px_-40px_rgba(10,8,6,0.55)]"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-label="Recherche Signature"
    >
      <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-b border-line-soft">
        <SearchGlyph />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          placeholder="Fassung, Essentiel oder Ort suchen"
          className="w-full bg-transparent text-[16px] text-ink outline-none placeholder:text-muted-2 font-light"
          aria-label="Suche"
        />
        <kbd
          className="hidden md:inline-flex items-center gap-1 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-muted border border-line-soft"
          style={{ borderRadius: 2 }}
        >
          Esc
        </kbd>
      </div>

      <div className="max-h-[62dvh] overflow-y-auto py-2">
        {results.length === 0 ? (
          <div className="px-6 md:px-8 py-10 text-center">
            <p className="eyebrow-gold">Rien à cet endroit</p>
            <p className="mt-4 text-[13px] text-muted">
              Keine Ergebnisse für «&nbsp;{q}&nbsp;». Versuchen Sie Solène,
              Malbec, Passeport oder Salon.
            </p>
          </div>
        ) : (
          <ul>
            {results.map((r, i) => {
              const isActive = i === active;
              const rowContent = (
                <div
                  className="flex items-center gap-4 px-6 md:px-8 py-3.5 border-b border-line-soft/60 last:border-b-0"
                  style={{
                    background: isActive
                      ? "rgba(198,154,63,0.09)"
                      : "transparent",
                    transition: "background 220ms var(--ease-out)",
                  }}
                >
                  <KindMark kind={r.kind} hex={r.hex} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[14.5px] text-ink font-light truncate">
                      {r.title}
                    </p>
                    <p className="text-[11.5px] uppercase tracking-[0.22em] text-muted truncate">
                      {r.subtitle}
                    </p>
                  </div>
                  {r.meta && (
                    <span className="text-[10.5px] uppercase tracking-[0.24em] text-muted whitespace-nowrap">
                      {r.meta}
                    </span>
                  )}
                </div>
              );
              if (r.slug === "action-essai") {
                return (
                  <li key={r.slug}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => openDrawer("essai")}
                      className="block w-full text-left"
                    >
                      {rowContent}
                    </button>
                  </li>
                );
              }
              return (
                <li key={r.slug}>
                  <Link
                    href={r.href}
                    onClick={closeDrawer}
                    onMouseEnter={() => setActive(i)}
                    className="block"
                  >
                    {rowContent}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-8 py-3 border-t border-line-soft text-[10px] uppercase tracking-[0.24em] text-muted">
        <span className="inline-flex items-center gap-3">
          <Legend label="Fassung" tone="gold" />
          <Legend label="Essentiel" tone="ink" />
          <Legend label="Maison" tone="muted" />
        </span>
        <span className="inline-flex items-center gap-2">
          <span>Bewegen</span>
          <kbd className="border border-line-soft px-1.5 py-0.5">↑ ↓</kbd>
          <span>Öffnen</span>
          <kbd className="border border-line-soft px-1.5 py-0.5">Enter</kbd>
        </span>
      </footer>
    </motion.section>
  );
}

function SearchGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden
      style={{ color: "var(--or-2)" }}
    >
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M10.6 10.6L14 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function KindMark({ kind, hex }: { kind: ResultKind; hex?: string }) {
  if (kind === "fassung" && hex) {
    return (
      <span
        className="inline-block h-3 w-3 rounded-full"
        style={{ background: hex, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.15)" }}
        aria-hidden
      />
    );
  }
  const label =
    kind === "essentiel" ? "E" : kind === "maison" ? "M" : kind === "action" ? "◆" : "F";
  return (
    <span
      className="inline-flex h-6 w-6 items-center justify-center text-[10px] font-light"
      style={{
        color: "var(--or-2)",
        border: "1px solid var(--line)",
        borderRadius: 2,
        fontFamily: "var(--font-fraunces), serif",
      }}
      aria-hidden
    >
      {label}
    </span>
  );
}

function Legend({ label, tone }: { label: string; tone: "gold" | "ink" | "muted" }) {
  const color =
    tone === "gold" ? "var(--or-2)" : tone === "ink" ? "var(--ink)" : "var(--muted)";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-[6px] w-[6px] rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
