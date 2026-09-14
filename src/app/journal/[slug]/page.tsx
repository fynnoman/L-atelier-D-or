import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articleBySlug, articles } from "@/data/journal";
import Reveal from "@/components/Reveal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};
  return { title: a.title, description: a.dek };
}

const heroBg: Record<string, string> = {
  boutique: "linear-gradient(135deg, var(--parchment-3) 0%, var(--parchment-2) 55%, var(--parchment) 100%)",
  rouge: "linear-gradient(135deg, #1c0a07 0%, #7e1f14 100%)",
  foret: "linear-gradient(135deg, #0a1710 0%, #1f3d24 100%)",
  cristal: "linear-gradient(135deg, #f2f5f8 0%, #b6d2e3 100%)",
  emeraude: "linear-gradient(135deg, #12102a 0%, #1f6b4a 60%, #6a3f8e 100%)",
};

export default async function ArticlePage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) notFound();

  const light = a.hero === "cristal";

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "70svh",
          paddingInline: "var(--page-x)",
          paddingTop: "clamp(140px, 20vh, 240px)",
          paddingBottom: "clamp(60px, 10vh, 120px)",
          background: heroBg[a.hero] ?? heroBg.boutique,
          color: light ? "var(--noir)" : "var(--parchment)",
        }}
      >
        <div aria-hidden className="absolute inset-0 grain pointer-events-none" style={{ opacity: 0.28 }} />
        <div className="relative mx-auto max-w-[1000px]">
          <Reveal>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: light ? "var(--noir-2)" : "var(--or-glow)",
                marginBottom: 24,
              }}
            >
              {a.chapter} · {a.kicker} · {a.date}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 6vw, 92px)",
                lineHeight: 1.02,
                color: light ? "var(--noir)" : "var(--parchment)",
              }}
            >
              {a.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              className="serif mt-8"
              style={{
                fontSize: "clamp(18px, 1.8vw, 22px)",
                lineHeight: 1.55,
                maxWidth: 720,
                color: light ? "var(--ink-2)" : "color-mix(in oklab, var(--parchment) 82%, transparent)",
              }}
            >
              {a.dek}
            </p>
          </Reveal>
        </div>
      </section>

      <article
        className="relative"
        style={{
          paddingInline: "var(--page-x)",
          paddingBlock: "clamp(80px, 12vh, 140px)",
          background: "var(--bg)",
        }}
      >
        <div className="mx-auto max-w-[720px] space-y-8">
          {a.body.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p
                className="serif"
                style={{
                  fontSize: i === 0 ? "clamp(20px, 1.7vw, 24px)" : "clamp(17px, 1.3vw, 19px)",
                  lineHeight: 1.75,
                  color: i === 0 ? "var(--ink)" : "var(--ink-2)",
                }}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto max-w-[720px] mt-16" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: 24 }}>
          <Link href="/journal" className="link" data-underline style={{ fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--ink-2)" }}>
            ← Retour au journal
          </Link>
        </div>
      </article>
    </>
  );
}
