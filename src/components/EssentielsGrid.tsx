"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { essentiels } from "@/data/essentiels";

export default function EssentielsGrid() {
  return (
    <section className="relative bg-parchment-2 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="eyebrow-gold">Les Essentiels</span>
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
              Zubehör der{" "}
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
            Ergänzungen für die tägliche Pflege und die persönliche Signatur
            Ihrer Fassung.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-16 md:gap-y-20">
          {essentiels.map((e, i) => (
            <Link key={e.slug} href="/kontakt" className="group block">
              <div className="relative w-full overflow-hidden bg-bg-3 aspect-square">
                <div
                  className="absolute inset-0 group-hover:scale-[1.04]"
                  style={{ transition: "transform 1400ms var(--ease-editorial)" }}
                >
                  <PlaceholderImage
                    src={e.image}
                    alt={e.imageAlt}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    quality={78}
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-4 top-4 z-10">
                  <span
                    className="text-[9.5px] uppercase font-medium"
                    style={{
                      color: "var(--parchment)",
                      letterSpacing: "0.3em",
                      textShadow: "0 1px 8px rgba(10,8,6,0.55)",
                    }}
                  >
                    Nº {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div
                className="mt-4 h-px w-full origin-left scale-x-0 group-hover:scale-x-100"
                style={{
                  background:
                    "linear-gradient(90deg, var(--or-2), var(--or-glow), var(--or-2))",
                  transition: "transform 600ms var(--ease-editorial)",
                }}
                aria-hidden
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <p
                    className="text-[15px] text-ink"
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontWeight: 300,
                    }}
                  >
                    {e.name}
                  </p>
                  <p className="mt-1 text-[10.5px] uppercase tracking-[0.24em] text-muted">
                    {e.category}
                  </p>
                </div>
                <p
                  className="text-[13px] text-ink whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
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
