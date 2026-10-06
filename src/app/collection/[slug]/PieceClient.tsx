"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
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
  return (
    <>
      <section className="relative pt-24 md:pt-28 pb-6 md:pb-10 overflow-hidden">
        <div className="n-page relative">
          <PageEyebrow label={loc.chapter} className="mb-4" />

          <div className="grid grid-cols-12 gap-x-6 items-baseline relative">
            <div className="col-span-12 md:col-span-7">
              <LineReveal
                as="h1"
                className="n-display leading-[1]"
                lines={[piece.name]}
                delayStep={0}
                style={{ fontSize: "clamp(32px, 4.2vw, 64px)", fontWeight: 300 }}
              />
            </div>
            <div className="col-span-12 md:col-span-5 mt-3 md:mt-0">
              <p
                className="n-serif-italic leading-[1.35] max-w-[42ch]"
                style={{ fontSize: "15px", color: "var(--n-muted)" }}
              >
                « {loc.tagline} »
              </p>
            </div>
          </div>

        </div>

        <div className="n-page mt-8 md:mt-10 grid grid-cols-12 gap-x-6 items-start">
          <div className="col-span-12 md:col-span-8 relative">
            <ProductGallery
              ratio="1 / 1"
              slides={[
                ...(piece.video
                  ? [
                      {
                        kind: "video" as const,
                        src: piece.video,
                        poster: piece.videoPoster,
                        alt: studioAlt,
                        fit: "cover" as const,
                      },
                    ]
                  : []),
                ...(piece.image
                  ? [
                      {
                        kind: "image" as const,
                        src: piece.image,
                        alt: studioAlt,
                        fit: "contain" as const,
                      },
                    ]
                  : []),
                ...(piece.imageWorn
                  ? [
                      {
                        kind: "image" as const,
                        src: piece.imageWorn,
                        alt: wornAlt,
                        fit: "cover" as const,
                        position: "50% 30%",
                      },
                    ]
                  : []),
                ...(piece.extraImages ?? []).map((src, i) => ({
                  kind: "image" as const,
                  src,
                  alt: `${piece.name} · ${i + 1}`,
                  fit: "cover" as const,
                  position: "50% 50%",
                })),
              ]}
            />
          </div>

          <aside className="col-span-12 md:col-span-4 mt-10 md:mt-2 flex flex-col gap-8">
            <PieceSwitcher current={piece.slug} />
            <div className="h-px" style={{ background: "var(--n-line-soft)" }} />
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
              <div>
                <div className="n-eyebrow mb-2">{t.piece.theLieu}</div>
                <p className="n-serif leading-[1.35]" style={{ fontSize: "16px" }}>
                  {loc.place}
                </p>
              </div>
              <div>
                <div className="n-eyebrow mb-2">{t.piece.theHeure}</div>
                <p className="n-serif leading-[1.35]" style={{ fontSize: "16px" }}>
                  {loc.time}
                </p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="n-eyebrow mb-2">{t.piece.silhouette}</div>
                <p className="n-serif leading-[1.35]" style={{ fontSize: "16px" }}>
                  {loc.silhouette}
                </p>
              </div>
            </div>
            <div className="flex items-baseline gap-6 pt-4 border-t" style={{ borderColor: "var(--n-line-soft)" }}>
              <span className="n-serif leading-none" style={{ fontSize: "24px" }}>
                {formatPrice(piece.priceEuro, locale)}
              </span>
              <Link href="/conseil" className="n-link">
                {t.piece.ctaEcrire}
              </Link>
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
              style={{ fontSize: "clamp(32px, 4.2vw, 56px)", fontWeight: 300 }}
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
              style={{ fontSize: "clamp(32px, 4.2vw, 56px)", fontWeight: 300 }}
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

        <div className="n-page mt-20 flex justify-center">
          <Link href="/journal/quatre-atmospheres" className="n-link">
            {t.piece.lireQuatreAtmospheres}
          </Link>
        </div>
      </section>

      {/* Éditorial gallery — grand format, horizontal swipe */}
      <section className="relative pb-16 md:pb-24">
        <div className="n-page">
          <ProductGallery
            ratio="16 / 10"
            slides={[
              ...(piece.video
                ? [
                    {
                      kind: "video" as const,
                      src: piece.video,
                      poster: piece.videoPoster,
                      alt: studioAlt,
                      fit: "cover" as const,
                    },
                  ]
                : []),
              ...(piece.image
                ? [
                    {
                      kind: "image" as const,
                      src: piece.image,
                      alt: studioAlt,
                      fit: "contain" as const,
                    },
                  ]
                : []),
              ...(piece.imageWorn
                ? [
                    {
                      kind: "image" as const,
                      src: piece.imageWorn,
                      alt: wornAlt,
                      fit: "cover" as const,
                      position: "50% 30%",
                    },
                  ]
                : []),
              ...(piece.extraImages ?? []).map((src, i) => ({
                kind: "image" as const,
                src,
                alt: `${piece.name} · ${i + 1}`,
                fit: "cover" as const,
                position: "50% 50%",
              })),
            ]}
          />
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
                style={{ fontSize: "clamp(44px, 6vw, 96px)", fontWeight: 300 }}
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
              <div className="n-eyebrow mb-4">{t.piece.deliveryEyebrow}</div>
              <h3 className="n-serif text-[22px] leading-[1.25] mb-3">
                {t.piece.deliveryTitle}
              </h3>
              <p
                className="n-serif text-[15px] leading-[1.55] max-w-[38ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {t.piece.deliveryBody}
              </p>

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
