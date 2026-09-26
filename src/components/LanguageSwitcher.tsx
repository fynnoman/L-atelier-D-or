"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage, type Locale } from "@/lib/i18n/LanguageContext";

const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "de", label: "Deutsch", short: "DE" },
];

export default function LanguageSwitcher({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="n-meta inline-flex items-center gap-2 transition-opacity"
        style={{
          opacity: 0.75,
          color: "inherit",
          letterSpacing: "0.16em",
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.langSwitcher.label}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{active.short}</span>
        <span
          aria-hidden
          className="block transition-transform duration-300"
          style={{
            width: 0,
            height: 0,
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderTop: "4px solid currentColor",
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }}
        />
      </button>
      <ul
        role="listbox"
        aria-label={t.langSwitcher.label}
        className="absolute right-0 mt-3 min-w-[132px] overflow-hidden transition-[opacity,transform] duration-200"
        style={{
          background: onDark ? "rgba(20,18,16,0.94)" : "rgba(255,255,255,0.96)",
          color: onDark ? "#EDE3CE" : "var(--n-ink)",
          border: `1px solid ${onDark ? "rgba(237,227,206,0.16)" : "var(--n-line-soft)"}`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderRadius: "clamp(6px, 0.6vw, 10px)",
          boxShadow: "0 12px 28px rgba(10,10,10,0.10)",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-4px)",
          pointerEvents: open ? "auto" : "none",
          zIndex: 60,
        }}
      >
        {LOCALES.map((l) => {
          const isActive = l.code === locale;
          return (
            <li key={l.code} role="option" aria-selected={isActive}>
              <button
                type="button"
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 n-meta transition-opacity"
                style={{
                  color: "inherit",
                  letterSpacing: "0.14em",
                  opacity: isActive ? 1 : 0.62,
                  background: "transparent",
                }}
              >
                <span>{l.label}</span>
                <span aria-hidden style={{ opacity: isActive ? 1 : 0 }}>
                  ·
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
