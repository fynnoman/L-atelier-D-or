import Link from "next/link";
import Wordmark from "./Wordmark";
import { maison } from "@/data/maison";

const cols = [
  {
    title: "Service",
    links: [
      { href: "/kontakt", label: "Salon Privé" },
      { href: "/kontakt", label: "Réservation" },
      { href: "/kontakt", label: "Réparation à vie" },
      { href: "/kontakt", label: "Größenberatung" },
    ],
  },
  {
    title: "Maison",
    links: [
      { href: "/atelier", label: "Histoire" },
      { href: "/atelier#artisans", label: "Les Artisans" },
      { href: "/referenzen", label: "Journal · Presse" },
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
    <footer
      className="relative bg-noir text-parchment grain grain-dark"
      style={{ backgroundColor: "var(--noir)" }}
    >
      {/* Top gold hairline */}
      <div className="h-px w-full rule-gold" aria-hidden />

      {/* Newsletter row */}
      <div className="border-b border-line-noir">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-20 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="eyebrow-gold">Journal · Newsletter</span>
              <span className="h-px w-16 rule-gold-hard" />
            </div>
            <h3
              className="display text-parchment"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Neuigkeiten aus dem{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "var(--or-glow)",
                }}
              >
                Atelier.
              </span>
            </h3>
            <p
              className="mt-4 max-w-md text-[13.5px] leading-[1.85]"
              style={{ color: "rgba(245, 239, 225, 0.62)" }}
            >
              Zwei Ausgaben pro Jahr. Neue Éditionen, Werkstattnotizen,
              Einladungen zu Anproben.
            </p>
          </div>
          <form
            className="flex items-center gap-3 border-b pb-3"
            style={{ borderColor: "rgba(230, 201, 138, 0.35)" }}
          >
            <input
              type="email"
              placeholder="Ihre E-Mail"
              className="flex-1 bg-transparent text-[14px] text-parchment outline-none placeholder:text-parchment/40"
            />
            <button
              type="button"
              className="text-[10.5px] uppercase tracking-[0.28em] link-gold"
            >
              Abonnieren
            </button>
          </form>
        </div>
      </div>

      {/* Sitemap grid */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          {cols.map((col) => (
            <div key={col.title}>
              <p className="eyebrow-gold">{col.title}</p>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.label}`}>
                    <Link
                      href={l.href}
                      className="text-[13.5px] link-underline"
                      style={{ color: "rgba(245, 239, 225, 0.75)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 h-px w-full rule-gold" />

        <div className="mt-10 flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
          <div
            className="flex flex-col gap-2 text-[11.5px]"
            style={{ color: "rgba(245, 239, 225, 0.5)" }}
          >
            <span>
              © {new Date().getFullYear()} {maison.legalForm}. Tous droits
              réservés.
            </span>
            <span>
              {maison.address.street} · {maison.address.zip} {maison.address.city} ·{" "}
              {maison.address.country}
            </span>
          </div>
          <div className="flex items-baseline gap-8">
            <Wordmark size="sm" variant="shimmer" />
            <div
              className="text-[10.5px] uppercase"
              style={{
                color: "rgba(230, 201, 138, 0.72)",
                letterSpacing: "0.34em",
              }}
            >
              Paris · Berlin · Jura
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
