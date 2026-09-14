import type { Metadata } from "next";
import Link from "next/link";
import { collection } from "@/data/collection";
import MoodTile from "@/components/MoodTile";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "La Première Collection — Roi",
  description:
    "Quatre pièces, quatre atmosphères. Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Fait main en France, en séries brèves et numérotées.",
};

export default function CollectionPage() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "78svh",
          paddingInline: "var(--page-x)",
          paddingTop: "clamp(140px, 20vh, 240px)",
          paddingBottom: "clamp(80px, 12vh, 140px)",
          background:
            "radial-gradient(1200px 700px at 22% 18%, rgba(215,170,90,0.24), transparent 62%), radial-gradient(1000px 700px at 82% 88%, rgba(160,120,60,0.16), transparent 62%), linear-gradient(180deg, var(--parchment) 0%, var(--parchment-2) 60%, var(--parchment-3) 100%)",
        }}
      >
        <div aria-hidden className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] text-center">
          <Reveal>
            <span className="eyebrow-or">La Première Collection</span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="display mt-6"
              style={{
                fontSize: "clamp(56px, 10vw, 168px)",
                lineHeight: 0.92,
                color: "var(--ink)",
              }}
            >
              Roi.
              <br />
              <span style={{ fontStyle: "italic", color: "var(--or-2)" }}>
                Quatre atmosphères.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              className="serif mt-10 mx-auto"
              style={{
                fontSize: "clamp(18px, 1.8vw, 22px)",
                lineHeight: 1.5,
                maxWidth: 720,
                color: "var(--ink-2)",
              }}
            >
              Chaque pièce est un instant. Le Salon, la Chasse, la Chapelle, le
              Dîner. Choisissez la vôtre — ou portez-les toutes, selon les
              heures.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="relative"
        style={{
          paddingInline: "var(--page-x)",
          paddingBlock: "clamp(60px, 10vh, 120px)",
          background: "var(--noir)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-4 md:grid-cols-2">
            {collection.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <MoodTile
                  slug={p.slug}
                  numeral={p.numeral}
                  name={p.name}
                  tagline={p.tagline}
                  mood={p.mood}
                  chapter={p.chapter.split(" — ")[1] ?? p.chapter}
                  large
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Reveal>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "var(--or-soft)",
                }}
              >
                Édition brève · Numérotée à la main
              </div>
              <p
                className="serif mt-4 mx-auto"
                style={{
                  fontSize: 18,
                  lineHeight: 1.6,
                  maxWidth: 620,
                  color: "color-mix(in oklab, var(--parchment) 82%, transparent)",
                }}
              >
                Quatre-vingts euros la pièce. Ni plus, ni moins. La retenue est
                une forme de luxe — nous la revendiquons.
              </p>
              <div className="mt-8">
                <Link href="/concierge" className="btn-or">
                  Rendez-vous privé
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
