"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import Numeral from "@/components/Numeral";
import PageEyebrow from "@/components/PageEyebrow";
import ProductGallery from "@/components/ProductGallery";
import PieceSwitcher from "@/components/PieceSwitcher";
import { PIECES, type Piece } from "@/data/collection";
import { useLocale, useT } from "@/lib/i18n/LanguageContext";
import { formatPrice } from "@/lib/i18n/format";
import { localizePiece } from "@/lib/i18n/content";

export default function PieceClient({ piece }: { piece: Piece }) {
  const t = useT();
  const locale = useLocale();
  const loc = localizePiece(piece, locale);
  const others = PIECES.filter((p) => p.slug !== piece.slug);
  const wornAlt = locale === "de" ? `${piece.name} — getragen` : `${piece.name} — portée`;
  const studioAlt = locale === "de" ? `${piece.name} — Studio` : `${piece.name} — Studio`;
  const chapterHeader = loc.chapter.replace(/^Chapitre [IVX]+\s*[·—-]\s*/, "").replace(/^Kapitel [IVX]+\s*[·—-]\s*/, "");

  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-24 overflow-hidden">
        <div className="n-page relative">
          <PageEyebrow
            numeral={`${t.piece.chapterPrefix} ${piece.numeral}`}
            label={chapterHeader}
            className="mb-14"
          />

          <div className="grid grid-cols-12 gap-x-6 items-end relative">
            <div className="col-span-12 md:col-span-8">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={[piece.name.split(" ")[0], piece.name.split(" ").slice(1).join(" ")]}
                delayStep={130}
                style={{ fontSize: "clamp(72px, 14vw, 240px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
              <p
                className="n-serif-italic text-[22px] leading-[1.35]"
                style={{ color: "var(--n-muted)" }}
              >
                « {loc.tagline} »
              </p>
            </div>
          </div>

          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 right-[3vw] opacity-[0.08] select-none"
          >
            <span
              className="n-display leading-none"
              style={{ fontSize: "clamp(220px, 42vw, 640px)" }}
            >
              <Numeral n={piece.index} />
            </span>
          </span>
        </div>

        <div className="n-page mt-24 grid grid-cols-12 gap-x-6 items-start">
          <div className="col-span-12 md:col-span-8 relative">
            <ProductGallery
              ratio="1 / 1"
              slides={[
                { src: piece.image ?? "", alt: studioAlt, fit: "contain" as const },
                ...(piece.imageWorn
                  ? [{ src: piece.imageWorn, alt: wornAlt, fit: "cover" as const, position: "50% 30%" }]
                  : []),
              ].filter((s) => s.src)}
            />
          </div>

          <aside className="col-span-12 md:col-span-4 mt-12 md:mt-4 flex flex-col gap-10">
            <PieceSwitcher current={piece.slug} />
            <div className="h-px" style={{ background: "var(--n-line-soft)" }} />
            <div>
              <div className="n-eyebrow mb-3">{t.piece.theLieu}</div>
              <p className="n-serif text-[19px] leading-[1.4]">{loc.place}</p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">{t.piece.theHeure}</div>
              <p className="n-serif text-[19px] leading-[1.4]">{loc.time}</p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">{t.piece.silhouette}</div>
              <p className="n-serif text-[19px] leading-[1.4]">{loc.silhouette}</p>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="relative py-32"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <PageEyebrow numeral={t.piece.section1Eyebrow} label={t.piece.section1Label} className="mb-8" />
            <h2
              className="n-display leading-[0.96]"
              style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
            >
              {loc.materie.split(" · ")[0]}
            </h2>
            <p
              className="n-serif text-[18px] leading-[1.55] mt-6 max-w-[38ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {loc.materie}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <figure
              className="relative overflow-hidden"
              style={{
                background: `linear-gradient(155deg, ${loc.teintes[0]?.hex ?? "#0A0A0A"} 0%, ${loc.teintes[1]?.hex ?? "#0A0A0A"} 100%)`,
                borderRadius: "clamp(20px, 1.8vw, 30px)",
                border: "1px solid var(--n-line)",
                boxShadow:
                  "0 1px 2px rgba(10,10,10,0.06), 0 30px 80px -20px rgba(10,10,10,0.28)",
                aspectRatio: "4 / 5",
              }}
            >
              <span
                aria-hidden
                className="absolute -top-4 -left-2 n-display leading-none pointer-events-none select-none"
                style={{
                  fontSize: "clamp(180px, 28vw, 340px)",
                  color: "rgba(255,255,255,0.10)",
                  fontWeight: 200,
                }}
              >
                <Numeral n={piece.index} />
              </span>

              {piece.image && (
                <img
                  src={piece.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain p-8 md:p-12 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
                  style={{
                    filter: "drop-shadow(0 28px 42px rgba(0,0,0,0.35))",
                  }}
                  loading="lazy"
                />
              )}

              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                  height: "42%",
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.42) 100%)",
                }}
              />

              <figcaption
                className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4"
                style={{ color: "rgba(255,255,255,0.94)" }}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="n-mono"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      opacity: 0.72,
                    }}
                  >
                    {t.piece.section1Label}
                  </span>
                  <span
                    className="n-serif-italic"
                    style={{
                      fontSize: "clamp(19px, 1.6vw, 24px)",
                      lineHeight: 1.2,
                    }}
                  >
                    {piece.name}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {loc.teintes.map((tt) => (
                    <div key={tt.hex} className="flex items-center gap-2">
                      <span
                        className="n-mono"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.14em",
                          opacity: 0.82,
                        }}
                      >
                        {tt.name}
                      </span>
                      <span
                        aria-hidden
                        className="block rounded-full"
                        style={{
                          width: 14,
                          height: 14,
                          background: tt.hex,
                          border: "1px solid rgba(255,255,255,0.55)",
                          boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </figcaption>
            </figure>

            <ul className="mt-10 flex flex-col">
              {loc.details.map((d, i) => (
                <li
                  key={d}
                  className="flex items-baseline gap-6 pt-4 pb-4 border-t"
                  style={{ borderColor: "var(--n-line-soft)" }}
                >
                  <span
                    className="n-mono opacity-45"
                    style={{ fontSize: "11px", letterSpacing: "0.20em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="n-serif text-[17px] leading-[1.35]"
                    style={{ color: "var(--n-ink)" }}
                  >
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="n-page grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-6">
            <PageEyebrow numeral={t.piece.section2Eyebrow} label={t.piece.section2Label} className="mb-8" />
            <h2
              className="n-display leading-[0.96]"
              style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
            >
              <span className="n-serif-italic opacity-80">{t.piece.section2Title1}</span> <br />
              {t.piece.section2Title2}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-10 md:mt-0">
            <p
              className="n-serif text-[18px] leading-[1.55] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {t.piece.section2Body}
            </p>
          </div>
        </div>

        <div className="n-page mt-16 grid grid-cols-12 gap-6">
          {loc.notes.map((note, i) => (
            <div
              key={note}
              className="col-span-6 md:col-span-3 p-8 border n-rise"
              style={{
                borderColor: "var(--n-line)",
                borderRadius: "clamp(18px, 1.6vw, 26px)",
                background: "var(--n-bg)",
                boxShadow: "0 1px 2px rgba(10,10,10,0.04), 0 12px 32px rgba(10,10,10,0.06)",
              }}
            >
              <span className="n-mono opacity-60 block mb-4">{t.piece.noteLabel(i + 1)}</span>
              <span
                className="n-serif text-[26px] leading-[1.15]"
                style={{ color: "var(--n-ink)" }}
              >
                {note}
              </span>
            </div>
          ))}
        </div>

        <div className="n-page mt-24">
          <p
            className="n-serif-italic max-w-[36ch] mx-auto text-center"
            style={{ fontSize: "clamp(24px, 3.4vw, 40px)", lineHeight: 1.3 }}
          >
            « {loc.scene} »
          </p>
          <div className="mt-14 flex justify-center">
            <Link href="/journal/quatre-atmospheres" className="n-link">
              {t.piece.lireQuatreAtmospheres}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-32"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 items-center">
          <div className="col-span-12 md:col-span-6">
            <PageEyebrow numeral={t.piece.section3Eyebrow} label={t.piece.section3Label} className="mb-8" />
            <div className="flex items-baseline gap-8 mb-8">
              <span
                className="n-display leading-none"
                style={{ fontSize: "clamp(76px, 11vw, 180px)" }}
              >
                {formatPrice(piece.priceEuro, locale)}
              </span>
              <div className="flex flex-col">
                <span className="n-mono opacity-60">{t.piece.prixParPiece}</span>
                <span className="n-mono opacity-60">{t.piece.niPlusNiMoins}</span>
              </div>
            </div>
            <p
              className="n-serif text-[19px] leading-[1.5] max-w-[42ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {t.piece.editionBreveBody}
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-14 md:mt-0">
            <div
              className="p-10 border"
              style={{
                borderColor: "var(--n-line)",
                background: "var(--n-bg)",
                borderRadius: "clamp(20px, 1.8vw, 32px)",
                boxShadow: "0 1px 2px rgba(10,10,10,0.04), 0 24px 48px rgba(10,10,10,0.08)",
              }}
            >
              <div className="n-eyebrow mb-4">{t.piece.twoWays}</div>
              <ol className="flex flex-col gap-6">
                <li>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="n-serif text-[32px] leading-none opacity-50">I</span>
                    <span className="n-serif text-[19px]">{t.piece.way1Title}</span>
                  </div>
                  <p
                    className="n-serif text-[15px] leading-[1.5] max-w-[38ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    {t.piece.way1Body}
                  </p>
                </li>
                <li>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="n-serif text-[32px] leading-none opacity-50">II</span>
                    <span className="n-serif text-[19px]">{t.piece.way2Title}</span>
                  </div>
                  <p
                    className="n-serif text-[15px] leading-[1.5] max-w-[38ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    {t.piece.way2Body}
                  </p>
                </li>
              </ol>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/collection" className="n-cta">{t.piece.ctaCollection}</Link>
                <Link href="/conseil" className="n-link">
                  {t.piece.ctaEcrire}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="n-page">
          <PageEyebrow numeral={t.piece.section4Eyebrow} label={t.piece.section4Label} className="mb-14" />
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            {others.map((p) => {
              const pl = localizePiece(p, locale);
              return (
                <Link
                  key={p.slug}
                  href={`/collection/${p.slug}`}
                  className="col-span-12 md:col-span-4 group block"
                >
                  <div className="relative">
                    <MaskedImage
                      src={p.image}
                      tone={p.mood === "foret" ? "foret" : p.mood === "cristal" ? "cristal" : p.mood === "emeraude" ? "emeraude" : "rouge"}
                      ratio="4 / 5"
                    />
                    <div
                      className="absolute top-4 left-4 flex items-center gap-3 px-3 py-2"
                      style={{
                        background: "rgba(237, 227, 206, 0.72)",
                        border: "1px solid var(--n-line)",
                        borderRadius: "9999px",
                        backdropFilter: "saturate(1.4) blur(14px)",
                        WebkitBackdropFilter: "saturate(1.4) blur(14px)",
                        boxShadow: "0 4px 14px rgba(10,10,10,0.12)",
                      }}
                    >
                      <span className="n-mono opacity-70" style={{ color: "var(--n-ink)" }}>{p.numeral}</span>
                      <span className="n-eyebrow">{p.name}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <div>
                      <div className="n-serif text-[22px] leading-none">{p.name}</div>
                      <div className="n-serif-italic text-[15px] mt-2" style={{ color: "var(--n-muted)" }}>
                        {pl.tagline}
                      </div>
                    </div>
                    <span className="n-mono opacity-60">{formatPrice(p.priceEuro, locale)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
