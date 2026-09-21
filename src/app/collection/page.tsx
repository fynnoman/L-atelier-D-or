import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import Numeral from "@/components/Numeral";
import PageEyebrow from "@/components/PageEyebrow";
import StructuredData, { breadcrumbJsonLd } from "@/components/StructuredData";
import { PIECES, formatEuro } from "@/data/collection";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://laterlierdor-fynn-schulzs-projects.vercel.app";

export const metadata = {
  title: "La Collection — Roi. Quatre pièces.",
  description:
    "Roi. Quatre pièces la première année : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. 78,90 € l'exemplaire, numérotée à la main.",
  alternates: { canonical: "/collection" },
};

export default function CollectionIndex() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Accueil", url: `${siteUrl}/` },
          { name: "Collection", url: `${siteUrl}/collection` },
        ])}
      />
      {/* En-tête éditorial */}
      <section className="relative pt-40 md:pt-52 pb-24 overflow-hidden">
        <div className="n-page">
          <PageEyebrow numeral="Collection I" label="Première Édition · Numérotée" className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={["Roi.", "Quatre atmosphères,", "un seul regard."]}
                delayStep={120}
                style={{ fontSize: "clamp(64px, 12vw, 210px)", color: "var(--n-ink)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                Quatre pièces, un an. Chaque exemplaire est numéroté à la main.<br />
                Quatre-vingts euros. Ni plus, ni moins.
              </p>
            </div>
          </div>

          <div
            className="mt-20 flex flex-wrap items-baseline gap-x-10 gap-y-4 pt-8 border-t"
            style={{ borderColor: "var(--n-line-soft)" }}
          >
            <span className="n-mono opacity-60">Le Salon · La Chasse · La Chapelle · Le Dîner</span>
            <span className="n-mono opacity-60">Édition brève</span>
            <span className="n-mono opacity-60">Édition brève</span>
          </div>
        </div>
      </section>

      {/* Quatre chapitres */}
      {PIECES.map((piece, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={piece.slug}
            className="relative overflow-hidden"
            style={{
              paddingBlock: "clamp(80px, 12vh, 160px)",
              background: i === 0 ? "var(--n-bg)" : i === 1 ? "var(--n-bg-warm)" : i === 2 ? "var(--n-bg-cool)" : "var(--n-bg)",
            }}
          >
            <div className="n-page">
              <div className="grid grid-cols-12 gap-x-6 items-center">
                {/* Numéral géant */}
                <div
                  className={`col-span-12 md:col-span-6 ${flip ? "md:col-start-7 md:order-2" : "md:col-start-1"} relative`}
                >
                  <MaskedImage
                    src={piece.image}
                    alt={`${piece.name} — ${piece.tagline}`}
                    tone={piece.mood === "foret" ? "foret" : piece.mood === "cristal" ? "cristal" : piece.mood === "emeraude" ? "emeraude" : "rouge"}
                    ratio="4 / 5"
                    className={flip ? "md:-translate-x-4" : "md:translate-x-4"}
                  />

                  {/* Chip flottant */}
                  <div
                    className="absolute top-6 left-6 flex items-center gap-3 px-3 py-2"
                    style={{ background: "var(--n-bg)", border: "1px solid var(--n-line)" }}
                  >
                    <span className="n-mono opacity-70">{piece.numeral}</span>
                    <span className="n-eyebrow">{piece.name}</span>
                  </div>

                  {/* Bloc scène flottant */}
                  <div
                    className={`hidden md:block absolute ${flip ? "-left-6 bottom-10" : "-right-6 bottom-10"} max-w-[280px] p-5`}
                    style={{
                      background: "rgba(244,240,232,0.9)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid var(--n-line-soft)",
                    }}
                  >
                    <div className="n-mono opacity-60 mb-2">{piece.time}</div>
                    <p
                      className="n-serif text-[15px] leading-[1.4]"
                      style={{ color: "var(--n-ink)" }}
                    >
                      {piece.place}
                    </p>
                  </div>
                </div>

                {/* Texte */}
                <div
                  className={`col-span-12 md:col-span-5 ${flip ? "md:col-start-1 md:order-1" : "md:col-start-8"} mt-12 md:mt-0 relative`}
                >
                  <span
                    className="n-serif opacity-15 leading-none block mb-4"
                    style={{ fontSize: "clamp(80px, 12vw, 200px)", color: "var(--n-ink)" }}
                  >
                    <Numeral n={piece.index} />
                  </span>

                  <div className="n-eyebrow mb-6">{piece.chapter}</div>
                  <h2
                    className="n-display leading-[0.95] mb-6"
                    style={{ fontSize: "clamp(48px, 7vw, 108px)" }}
                  >
                    {piece.name}
                  </h2>
                  <p
                    className="n-serif-italic text-[22px] leading-[1.35] mb-8 max-w-[38ch]"
                    style={{ color: "var(--n-ink)" }}
                  >
                    « {piece.tagline} »
                  </p>
                  <p
                    className="n-serif text-[17px] leading-[1.6] mb-10 max-w-[46ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    {piece.scene}
                  </p>

                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center gap-2">
                      {piece.teintes.map((t) => (
                        <div key={t.hex} className="flex items-center gap-2">
                          <span
                            className="block w-4 h-4 rounded-full border"
                            style={{ background: t.hex, borderColor: "var(--n-line)" }}
                          />
                          <span className="n-mono opacity-70">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="n-serif text-[28px] leading-none">{formatEuro(piece.priceEuro)}</span>
                    <span className="n-hair opacity-30" aria-hidden />
                    <Link href={`/collection/${piece.slug}`} className="n-cta">
                      Voir la pièce
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Pied éditorial */}
      <section className="n-section" style={{ background: "var(--n-bg)" }}>
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <h2
                className="n-display leading-[0.96]"
                style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
              >
                Nous voulons que la Roi soit portée. <br />
                <span className="n-serif-italic opacity-80">Pas rangée.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
              <p
                className="n-serif text-[17px] leading-[1.6] max-w-[36ch] mb-6"
                style={{ color: "var(--n-muted)" }}
              >
                La collection n&rsquo;est pas exposée en vitrine. Nous la présentons sur rendez-vous,
                entre quatre yeux, à Paris, Berlin et Londres.
              </p>
              <Link href="/atelier" className="n-cta">Découvrir l&rsquo;atelier</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
