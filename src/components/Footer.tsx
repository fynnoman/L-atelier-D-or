import Link from "next/link";
import Wordmark from "./Wordmark";
import { maison } from "@/data/maison";

const cols = [
  {
    title: "Kundenservice",
    links: [
      { href: "/kontakt", label: "Kontakt" },
      { href: "/kontakt", label: "Réparation à vie" },
      { href: "/kontakt", label: "Häufige Fragen" },
      { href: "/kontakt", label: "Größenberatung" },
    ],
  },
  {
    title: "Maison",
    links: [
      { href: "/atelier", label: "Histoire" },
      { href: "/atelier#artisans", label: "Ateliers" },
      { href: "/referenzen", label: "Journal" },
      { href: "/kontakt", label: "Karriere" },
    ],
  },
  {
    title: "Boutiquen",
    links: [
      { href: "/kontakt", label: "Paris · Rue de la Paix" },
      { href: "/kontakt", label: "Berlin · Torstraße" },
      { href: "/kontakt", label: "Jura · Le Sentier" },
      { href: "/kontakt", label: "Termin vereinbaren" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/barrierefreiheit", label: "Barrierefreiheit" },
      { href: "/kontakt", label: "AGB" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg text-ink border-t border-line-soft">
      {/* Newsletter row */}
      <div className="border-b border-line-soft">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-14 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
          <div>
            <p className="eyebrow">Journal · Newsletter</p>
            <h3 className="mt-4 font-light text-ink text-[clamp(1.4rem,2.4vw,2rem)] leading-tight tracking-[-0.01em]">
              Neuigkeiten aus dem Atelier.
            </h3>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted">
              Zwei Ausgaben pro Jahr. Neue Éditionen, Werkstattnotizen,
              Einladungen zu Anproben.
            </p>
          </div>
          <form className="flex items-center gap-3 border-b border-line pb-2">
            <input
              type="email"
              placeholder="Ihre E-Mail"
              className="flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-muted-2"
            />
            <button type="button" className="text-[11px] uppercase tracking-[0.22em] text-ink link-static">
              Abonnieren
            </button>
          </form>
        </div>
      </div>

      {/* Sitemap grid */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {cols.map((col) => (
            <div key={col.title}>
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.label}`}>
                    <Link href={l.href} className="text-[13.5px] text-ink link-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-8 flex flex-col-reverse gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2 text-[12px] text-muted">
            <span>© {new Date().getFullYear()} {maison.legalForm}. Alle Rechte vorbehalten.</span>
            <span>
              {maison.address.street} · {maison.address.zip} {maison.address.city} · {maison.address.country}
            </span>
          </div>
          <div className="flex items-baseline gap-8">
            <Wordmark size="sm" />
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
              Paris · Berlin · Jura
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
