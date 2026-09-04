"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { essentiels } from "@/data/essentiels";

// LV "Saisonale Essentials"-style grid for companion pieces.
// Same rhythm as CategoryGrid but for the essentiels dataset.
export default function EssentielsGrid() {
  return (
    <section className="relative bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14 md:mb-20">
          <div className="max-w-xl">
            <p className="eyebrow">Les Essentiels</p>
            <h2 className="mt-5 font-light text-ink text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em]">
              Zubehör der Maison.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.75] text-muted">
            Ergänzungen für die tägliche Pflege und die persönliche Signatur
            Ihrer Fassung.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-14 md:gap-y-20">
          {essentiels.map((e) => (
            <Link key={e.slug} href="/kontakt" className="group block">
              <div className="relative w-full overflow-hidden bg-bg-3 aspect-square">
                <PlaceholderImage
                  src={e.image}
                  alt={e.imageAlt}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  quality={76}
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-light text-[15px] text-ink">{e.name}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-muted-2">
                    {e.category}
                  </p>
                </div>
                <p className="text-[13px] text-ink font-light whitespace-nowrap">
                  {e.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
