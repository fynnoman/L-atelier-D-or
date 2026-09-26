"use client";

import Link from "next/link";
import Wordmark from "./Wordmark";
import NewsletterSignup from "./NewsletterSignup";
import { useT } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const t = useT();

  const COLUMNS: { title: string; items: { href: string; label: string }[] }[] = [
    {
      title: t.footer.columnMaison,
      items: [
        { href: "/atelier", label: t.nav.atelier },
        { href: "/journal", label: t.nav.journal },
        { href: "/avis", label: t.nav.avis },
        { href: "/faq", label: t.nav.questions },
        { href: "/conseil", label: t.nav.conseil },
      ],
    },
    {
      title: t.footer.columnCollection,
      items: [
        { href: "/collection", label: t.footer.labelPremiereCollection },
        { href: "/collection/roi-rouge", label: "Roi Rouge" },
        { href: "/collection/roi-noir", label: "Roi Noir" },
        { href: "/collection/roi-cristal", label: "Roi Cristal" },
        { href: "/collection/roi-emeraude", label: "Roi Émeraude" },
      ],
    },
    {
      title: t.footer.columnMentions,
      items: [
        { href: "/mentions-legales", label: t.footer.labelMentionsLegales },
        { href: "/confidentialite", label: t.footer.labelConfidentialite },
        { href: "/accessibilite", label: t.footer.labelAccessibilite },
      ],
    },
  ];

  return (
    <footer
      className="relative"
      style={{
        background: "var(--n-bg)",
        color: "var(--n-ink)",
        borderTop: "1px solid var(--n-line-soft)",
      }}
    >
      <div className="n-page pt-32 pb-14">
        <div
          className="pb-20 border-b"
          style={{ borderColor: "var(--n-line-soft)" }}
        >
          <img
            src="/logo.png"
            alt="L'Atelier d'Or"
            className="block max-w-full"
            style={{ height: "clamp(56px, 10vw, 160px)", width: "auto" }}
            draggable={false}
          />
          <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <span className="n-eyebrow">{t.footer.editorialTag}</span>
            <span className="n-meta opacity-55">{t.footer.editorialTag2}</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16 mt-20">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
            <Wordmark size="lg" />
            <p
              className="n-body text-[16px] leading-[1.6] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {t.footer.ligne1}<br />
              {t.footer.ligne2}
            </p>
            <NewsletterSignup />
          </div>

          {COLUMNS.map((col) => (
            <div
              key={col.title}
              className="col-span-6 md:col-span-2 flex flex-col gap-6"
            >
              <div className="n-eyebrow">{col.title}</div>
              <ul className="flex flex-col gap-4">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="n-body text-[15px] leading-[1.4] hover:opacity-70 transition-opacity"
                      style={{ color: "var(--n-ink)" }}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="n-hair-full mt-24 mb-8" />
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="n-meta opacity-55">{t.footer.copyright}</p>
          <Link
            href="/mentions-legales"
            className="n-meta opacity-55 hover:opacity-80 transition-opacity"
          >
            {t.footer.labelMentionsLegales}
          </Link>
        </div>
      </div>
    </footer>
  );
}
