import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getJournal, journal } from "@/data/journal";
import JournalArticle from "@/components/journal/JournalArticle";

export function generateStaticParams() {
  return journal.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournal(slug);
  if (!entry) return { title: "Journal" };
  return {
    title: `${entry.title} · Livre d'Or`,
    description: entry.excerpt,
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      images: [{ url: entry.cover }],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const entry = getJournal(slug);
  if (!entry) notFound();

  const others = journal.filter((e) => e.slug !== entry.slug).slice(0, 2);

  return (
    <>
      <section className="relative h-[86dvh] min-h-[560px] w-full overflow-hidden bg-noir text-parchment grain grain-dark">
        <PlaceholderImage
          src={entry.cover}
          alt={entry.coverAlt}
          sizes="100vw"
          quality={82}
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(10,8,6,0.4) 0%, rgba(10,8,6,0.25) 40%, rgba(10,8,6,0.85) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="mx-auto w-full max-w-[1200px]">
            <p className="eyebrow-light">{entry.category}</p>
            <h1
              className="mt-6 display text-parchment"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 5.4rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
              }}
            >
              {entry.title}
              <span
                className="block mt-3"
                style={{
                  fontStyle: "italic",
                  fontFamily: "var(--font-fraunces), serif",
                  color: "var(--or-glow)",
                  fontSize: "0.6em",
                }}
              >
                {entry.italic}
              </span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-[10.5px] uppercase tracking-[0.28em] text-parchment/70">
              <span>{entry.author}</span>
              <span className="dot" />
              <span>{entry.location}</span>
              <span className="dot" />
              <span>{entry.reading}</span>
              <span className="dot" />
              <span>{formatDate(entry.date)}</span>
            </div>
          </div>
        </div>
      </section>

      <JournalArticle entry={entry} />

      <section className="bg-bg py-20 md:py-28 border-t border-line-soft">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow-gold">À lire ensuite</p>
              <h2 className="mt-4 display text-ink text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.02]">
                Weiter im Livre d&apos;Or.
              </h2>
            </div>
            <Link href="/journal" className="link-gold text-[11px] uppercase tracking-[0.22em]">
              Alle Beiträge
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {others.map((e) => (
              <Link
                key={e.slug}
                href={`/journal/${e.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-3">
                  <PlaceholderImage
                    src={e.cover}
                    alt={e.coverAlt}
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                  />
                </div>
                <p className="eyebrow-gold mt-5">{e.category}</p>
                <h3 className="mt-3 display text-ink text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.05]">
                  {e.title}
                </h3>
                <p className="mt-3 text-[13px] text-muted leading-[1.8]">
                  {e.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
