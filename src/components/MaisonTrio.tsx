"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

const cards = [
  {
    href: "/atelier",
    eyebrow: "Histoire",
    title: "Depuis 1972",
    body: "Rémi Kessler öffnet eine Werkstatt am Waldrand des Jura. Drei Generationen später zwischen Paris, Berlin und dem Sentier.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80",
    imageAlt: "Werkstatt am Waldrand",
  },
  {
    href: "/atelier#artisans",
    eyebrow: "Ateliers",
    title: "Les Artisans",
    body: "Fünf Hände, ein Handwerk. Vom Titan-Draht bis zur Vergoldung mit 18 Karat, alles im Haus, alles von Hand.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80",
    imageAlt: "Artisan bei der Arbeit",
  },
  {
    href: "/referenzen",
    eyebrow: "Journal",
    title: "Presse & Points de Vente",
    body: "Vogue, Monocle, Concept Stores in Paris, Berlin, Milan und London. Häuser, die uns tragen.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=80",
    imageAlt: "Editorial detail",
  },
];

// LV "The Maison"-style trio. Editorial three-column brand storytelling.
export default function MaisonTrio() {
  return (
    <section className="relative bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 md:mb-20 max-w-xl">
          <p className="eyebrow">La Maison</p>
          <h2 className="mt-5 font-light text-ink text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em]">
            Die Welt der Maison.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="group block">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-bg-3">
                <PlaceholderImage
                  src={c.image}
                  alt={c.imageAlt}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  quality={78}
                  className="object-cover"
                  style={{ transition: "transform 900ms var(--ease-editorial)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="eyebrow-light">{c.eyebrow}</p>
                  <h3 className="mt-3 font-light text-[26px] leading-tight tracking-[-0.01em]">
                    {c.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-[14px] leading-[1.75] text-muted">
                {c.body}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.22em] text-ink link-underline">
                Entdecken
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
