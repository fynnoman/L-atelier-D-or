import Link from "next/link";
import { collection } from "@/data/collection";
import MoodTile from "./MoodTile";
import Reveal from "./Reveal";

export default function CollectionMosaic() {
  const [a, b, c, d] = collection;

  return (
    <section
      className="relative"
      style={{
        background: "var(--noir)",
        color: "var(--parchment)",
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(90px, 14vh, 160px)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 400px at 15% 0%, rgba(215,170,90,0.08), transparent 60%), radial-gradient(900px 400px at 90% 100%, rgba(215,170,90,0.06), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-[1400px] mx-auto">
          <Reveal>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--or-soft)", marginBottom: 20 }}>
                Ⅰ · Ⅱ · Ⅲ · Ⅳ · La Première Collection
              </div>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(48px, 7.2vw, 116px)",
                  lineHeight: 0.95,
                  color: "var(--parchment)",
                }}
              >
                Quatre atmosphères,
                <br />
                <span style={{ fontStyle: "italic", color: "var(--or-glow)" }}>un seul regard.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p
              className="serif"
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                maxWidth: 380,
                color: "color-mix(in oklab, var(--parchment) 82%, transparent)",
              }}
            >
              La maison ne dessine pas des montures ; elle dessine des heures.
              Chaque pièce appartient à un lieu, à une lumière, à un rôle. Faites
              votre choix, ou choisissez-les toutes.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 max-w-[1400px] mx-auto grid gap-3 md:gap-4 md:grid-cols-6 md:grid-rows-2">
          <Reveal className="md:col-span-4 md:row-span-2" delay={0}>
            <MoodTile
              slug={a.slug}
              numeral={a.numeral}
              name={a.name}
              tagline={a.tagline}
              mood={a.mood}
              chapter={a.chapter.split(" — ")[1] ?? a.chapter}
              large
            />
          </Reveal>
          <Reveal className="md:col-span-2" delay={80}>
            <MoodTile
              slug={b.slug}
              numeral={b.numeral}
              name={b.name}
              tagline={b.tagline}
              mood={b.mood}
              chapter={b.chapter.split(" — ")[1] ?? b.chapter}
            />
          </Reveal>
          <Reveal className="md:col-span-1" delay={160}>
            <MoodTile
              slug={c.slug}
              numeral={c.numeral}
              name={c.name}
              tagline={c.tagline}
              mood={c.mood}
              chapter={c.chapter.split(" — ")[1] ?? c.chapter}
            />
          </Reveal>
          <Reveal className="md:col-span-1" delay={240}>
            <MoodTile
              slug={d.slug}
              numeral={d.numeral}
              name={d.name}
              tagline={d.tagline}
              mood={d.mood}
              chapter={d.chapter.split(" — ")[1] ?? d.chapter}
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 flex items-center justify-center">
            <Link
              href="/collection"
              className="btn-ghost"
              style={{ color: "var(--parchment)", borderColor: "rgba(215,170,90,0.35)" }}
            >
              Voir la collection dans son entier
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
