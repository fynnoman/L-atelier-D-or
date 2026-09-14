import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal — les cahiers de la maison",
  description:
    "Cahiers, lettres et notes de l’atelier. La maison raconte ses gestes, ses matières, ses choix.",
};

const heroBg: Record<string, string> = {
  boutique: "linear-gradient(135deg, var(--parchment-3) 0%, var(--parchment-2) 55%, var(--parchment) 100%)",
  rouge: "linear-gradient(135deg, #1c0a07 0%, #7e1f14 100%)",
  foret: "linear-gradient(135deg, #0a1710 0%, #1f3d24 100%)",
  cristal: "linear-gradient(135deg, #f2f5f8 0%, #b6d2e3 100%)",
  emeraude: "linear-gradient(135deg, #12102a 0%, #1f6b4a 60%, #6a3f8e 100%)",
};

export default function JournalPage() {
  return (
    <>
      <PageHead
        chapter="Cahier — Notes de la maison"
        eyebrow="Journal"
        title="Cahiers,"
        italic="lettres, silences."
        intro="Trois cahiers pour l’instant. Nous en publions un ou deux par saison, quand nous avons quelque chose à dire — et jamais autrement."
      />

      <section
        className="relative"
        style={{
          paddingInline: "var(--page-x)",
          paddingBlock: "clamp(60px, 10vh, 120px)",
          background: "var(--bg)",
        }}
      >
        <div className="mx-auto max-w-[1400px] grid gap-10 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <Link href={`/journal/${a.slug}`} className="group block">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4 / 5", background: heroBg[a.hero] ?? heroBg.boutique, borderRadius: 2 }}
                >
                  <div aria-hidden className="absolute inset-0 grain pointer-events-none" style={{ opacity: 0.32 }} />
                  <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: 26 }}>
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.32em",
                        textTransform: "uppercase",
                        color: a.hero === "cristal" ? "var(--noir-2)" : "var(--or-glow)",
                      }}
                    >
                      {a.chapter} · {a.kicker}
                    </span>
                    <div
                      className="serif"
                      style={{
                        fontSize: 24,
                        lineHeight: 1.15,
                        color: a.hero === "cristal" ? "var(--noir)" : "var(--parchment)",
                      }}
                    >
                      {a.title}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="serif" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--muted)" }}>
                    {a.dek}
                  </p>
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 11,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--or-2)",
                    }}
                  >
                    {a.date} · {a.read} de lecture
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
