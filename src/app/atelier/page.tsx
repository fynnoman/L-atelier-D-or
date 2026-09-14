import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "L’Atelier — la maison, le geste, la retenue",
  description:
    "Une maison de lunetterie française qui travaille en séries brèves. Les gestes, la matière, le prix juste — l’atelier expliqué en trois cahiers.",
};

const chapters = [
  {
    n: "Ⅰ",
    kicker: "Le lieu",
    title: "Une pièce discrète, sous les toits de Paris.",
    body: "L’atelier occupe deux étages dans un immeuble du VIIIᵉ. Les fenêtres sont hautes, la lumière est du nord, le sol est du bois. Rien n’a été rénové sans raison ; on entre comme on entre chez soi.",
  },
  {
    n: "Ⅱ",
    kicker: "Le geste",
    title: "Quatorze mains, un seul regard.",
    body: "Chaque paire passe par les mains de quatre personnes, sur quatorze postes. Les gestes sont anciens, la lime est vraie, l’œil décide. Nous polissons à la peau de chamois. Nous ne pressons rien.",
  },
  {
    n: "Ⅲ",
    kicker: "La matière",
    title: "Acétate d’Italie, âme titane, or 18 carats.",
    body: "Nous choisissons nos acétates chez Mazzucchelli. L’âme titane rend la monture souple sans la ramollir. L’or, quand il est là, l’est en filet — pour l’élégance, pas pour le poids.",
  },
];

const values = [
  ["Séries brèves", "Quatre pièces, un an. Chaque exemplaire est numéroté."],
  ["Prix juste", "Quatre-vingts euros la pièce. Nous vendons en direct."],
  ["Retenue", "Ce que la maison n’ajoute pas au monde est aussi ce qui la définit."],
];

export default function AtelierPage() {
  return (
    <>
      <PageHead
        chapter="Cahier — La Maison"
        eyebrow="L’Atelier"
        title="La maison,"
        italic="entrez sans frapper."
        intro="L’Atelier d’Or est une petite maison française qui dessine des lunettes rares, en séries brèves, numérotées à la main. Notre travail tient en trois choses : la matière, le geste, la retenue."
      />

      <section
        className="relative"
        style={{
          paddingInline: "var(--page-x)",
          paddingBlock: "clamp(90px, 14vh, 160px)",
          background: "var(--bg)",
        }}
      >
        <div className="mx-auto max-w-[1100px] space-y-24">
          {chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 60}>
              <article className="grid gap-10 md:grid-cols-[100px_1fr] items-start">
                <div
                  className="serif"
                  style={{
                    fontSize: "clamp(48px, 6vw, 96px)",
                    color: "var(--or-2)",
                    lineHeight: 0.9,
                    fontStyle: "italic",
                  }}
                >
                  {c.n}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "var(--or-2)",
                      marginBottom: 10,
                    }}
                  >
                    {c.kicker}
                  </div>
                  <h2
                    className="display"
                    style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.05, color: "var(--ink)" }}
                  >
                    {c.title}
                  </h2>
                  <p
                    className="serif mt-6"
                    style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 640 }}
                  >
                    {c.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="relative"
        style={{
          paddingInline: "var(--page-x)",
          paddingBlock: "clamp(90px, 14vh, 160px)",
          background: "var(--noir)",
          color: "var(--parchment)",
        }}
      >
        <div className="mx-auto max-w-[1200px] grid gap-16 md:grid-cols-3">
          {values.map(([t, b], i) => (
            <Reveal key={t} delay={i * 90}>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--or-glow)",
                    marginBottom: 14,
                  }}
                >
                  {t}
                </div>
                <p className="serif" style={{ fontSize: 20, lineHeight: 1.5, color: "var(--parchment)" }}>
                  {b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto max-w-[1200px] mt-16 flex items-center gap-4">
          <Link href="/collection" className="btn-or">Voir la collection</Link>
          <Link href="/concierge" className="btn-ghost" style={{ borderColor: "rgba(215,170,90,0.35)" }}>
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
