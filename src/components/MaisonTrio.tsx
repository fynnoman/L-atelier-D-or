"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

const cards = [
  {
    href: "/atelier",
    eyebrow: "Histoire",
    number: "I",
    title: "Depuis 1972",
    body: "Rémi Kessler öffnet eine Werkstatt am Waldrand des Jura. Drei Generationen später zwischen Paris, Berlin und dem Sentier.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=84",
    imageAlt: "Werkstatt am Waldrand",
  },
  {
    href: "/atelier#artisans",
    eyebrow: "Ateliers",
    number: "II",
    title: "Les Artisans",
    body: "Fünf Hände, ein Handwerk. Vom Titan-Draht bis zur Vergoldung mit 18 Karat — alles im Haus, alles von Hand.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=84",
    imageAlt: "Artisan bei der Arbeit",
  },
  {
    href: "/referenzen",
    eyebrow: "Journal",
    number: "III",
    title: "Presse · Points de Vente",
    body: "Vogue, Monocle, Concept Stores in Paris, Berlin, Milan und London. Häuser, die uns tragen.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=84",
    imageAlt: "Editorial detail",
  },
];

// Three-column brand storytelling — richer than a plain card grid. Each
// card carries a Roman numeral, gold hairline reveal on hover, and warm
// tonal wash over the image. Hover lifts the whole card 4px.
export default function MaisonTrio() {
  return (
    <section className="relative bg-parchment py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="eyebrow-gold">La Maison</span>
              <span className="h-px w-16 rule-gold-hard" />
            </div>
            <h2
              className="display text-ink"
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3.8rem)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              Die Welt der{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "var(--or-2)",
                }}
              >
                Maison.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.9] text-muted">
            Ein Handwerk, drei Häuser, sechzig Jahre Kontinuität. Ein Blick
            auf die Menschen und Orte hinter jedem Objekt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative block"
              style={{
                transition: "transform 500ms var(--ease-out)",
              }}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-bg-3">
                <div
                  className="absolute inset-0 group-hover:scale-[1.05]"
                  style={{ transition: "transform 1400ms var(--ease-editorial)" }}
                >
                  <PlaceholderImage
                    src={c.image}
                    alt={c.imageAlt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    quality={80}
                    className="object-cover"
                  />
                </div>

                <div
                  className="absolute inset-0"
                  aria-hidden
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,8,6,0.15) 0%, rgba(10,8,6,0.05) 40%, rgba(10,8,6,0.75) 100%)",
                  }}
                />

                {/* Gold wash on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  aria-hidden
                  style={{
                    transition: "opacity 500ms var(--ease-out)",
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(198,154,63,0.16) 100%)",
                  }}
                />

                {/* Roman numeral top-right */}
                <div className="absolute top-6 right-6 z-10">
                  <span
                    className="numeral"
                    style={{
                      fontSize: "clamp(1.6rem, 2.2vw, 2rem)",
                      color: "rgba(230, 201, 138, 0.85)",
                      textShadow: "0 1px 8px rgba(10,8,6,0.55)",
                    }}
                  >
                    {c.number}
                  </span>
                </div>

                {/* Bottom text */}
                <div className="absolute inset-x-6 bottom-6 text-parchment">
                  <p
                    className="text-[10.5px] uppercase"
                    style={{
                      color: "rgba(230, 201, 138, 0.85)",
                      letterSpacing: "0.32em",
                    }}
                  >
                    {c.eyebrow}
                  </p>
                  <h3
                    className="mt-3 display text-parchment"
                    style={{
                      fontSize: "clamp(1.6rem, 2vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {c.title}
                  </h3>
                </div>
              </div>

              {/* Gold hairline reveal below card on hover */}
              <div
                className="mt-5 h-px w-full origin-left scale-x-0 group-hover:scale-x-100"
                style={{
                  background:
                    "linear-gradient(90deg, var(--or-2), var(--or-glow), var(--or-2))",
                  transition: "transform 700ms var(--ease-editorial)",
                }}
                aria-hidden
              />

              <p className="mt-5 max-w-sm text-[13.5px] leading-[1.85] text-muted">
                {c.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-3 text-[10.5px] uppercase tracking-[0.28em] text-ink">
                <span className="link-underline">Entdecken</span>
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
