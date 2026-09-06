import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { journal } from "@/data/journal";

export const metadata: Metadata = {
  title: "Livre d'Or · Journal",
  description:
    "Journal der Maison: Atelier-Berichte, Materialkunde, Portraits. Aus Paris, Berlin und dem Jura.",
};

export default function JournalIndex() {
  const [hero, ...rest] = journal;

  return (
    <div className="relative min-h-[100dvh] bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <header className="mb-14 md:mb-20 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow-gold">Livre d&apos;Or · Journal</p>
            <h1 className="mt-5 display text-ink text-[clamp(2.2rem,5.4vw,4.6rem)] leading-[0.98] tracking-[-0.02em]">
              Aus der Werkstatt,
              <span
                className="block"
                style={{
                  fontStyle: "italic",
                  fontFamily: "var(--font-fraunces), serif",
                  color: "var(--or-2)",
                }}
              >
                gedruckt auf Bütten.
              </span>
            </h1>
          </div>
          <p className="max-w-md text-[14px] text-muted leading-[1.9]">
            Berichte aus dem Atelier, Portraits der Handwerker, Materialkunde
            in fünf Minuten Lesezeit. Erscheint saisonal, nummeriert wie unsere
            Fassungen.
          </p>
        </header>

        {/* Hero article */}
        <Link
          href={`/journal/${hero.slug}`}
          className="group block border-t border-b border-line-soft py-10 md:py-14"
        >
          <article className="grid gap-8 md:grid-cols-[1.15fr_1fr] items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-3">
              <PlaceholderImage
                src={hero.cover}
                alt={hero.coverAlt}
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                priority
              />
            </div>
            <div>
              <p className="eyebrow-gold">{hero.category} · Une</p>
              <h2 className="mt-5 display text-ink text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.02em]">
                {hero.title}
                <span
                  className="block mt-2"
                  style={{
                    fontStyle: "italic",
                    fontFamily: "var(--font-fraunces), serif",
                    color: "var(--or-2)",
                    fontSize: "0.7em",
                  }}
                >
                  {hero.italic}
                </span>
              </h2>
              <p className="mt-6 text-[14px] text-muted leading-[1.9] max-w-lg">
                {hero.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-muted">
                <span>{hero.author}</span>
                <span className="dot" />
                <span>{hero.location}</span>
                <span className="dot" />
                <span>{hero.reading}</span>
              </div>
              <span className="link-gold mt-8 inline-block text-[11.5px] uppercase tracking-[0.22em]">
                Lire l&apos;article
              </span>
            </div>
          </article>
        </Link>

        {/* Rest grid */}
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3 mt-14 md:mt-20">
          {rest.map((entry) => (
            <Link
              key={entry.slug}
              href={`/journal/${entry.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-bg-3">
                <PlaceholderImage
                  src={entry.cover}
                  alt={entry.coverAlt}
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                />
              </div>
              <p className="eyebrow-gold mt-6">{entry.category}</p>
              <h3 className="mt-3 display text-ink text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.05] tracking-[-0.015em]">
                {entry.title}
                <span
                  className="block mt-1.5"
                  style={{
                    fontStyle: "italic",
                    fontFamily: "var(--font-fraunces), serif",
                    color: "var(--or-2)",
                    fontSize: "0.72em",
                  }}
                >
                  {entry.italic}
                </span>
              </h3>
              <p className="mt-4 text-[13.5px] text-muted leading-[1.8]">
                {entry.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.24em] text-muted">
                <span>{entry.author}</span>
                <span className="dot" />
                <span>{entry.reading}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
