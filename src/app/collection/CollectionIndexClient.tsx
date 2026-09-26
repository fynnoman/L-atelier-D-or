"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import Numeral from "@/components/Numeral";
import PageEyebrow from "@/components/PageEyebrow";
import { PIECES } from "@/data/collection";
import { useLocale, useT } from "@/lib/i18n/LanguageContext";
import { formatPrice } from "@/lib/i18n/format";
import { localizePiece } from "@/lib/i18n/content";

export default function CollectionIndexClient() {
  const t = useT();
  const locale = useLocale();

  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-24 overflow-hidden">
        <div className="n-page">
          <PageEyebrow
            numeral={t.collectionIndex.eyebrowNumeral}
            label={t.collectionIndex.eyebrowLabel}
            className="mb-14"
          />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={t.collectionIndex.title}
                delayStep={120}
                style={{ fontSize: "clamp(64px, 12vw, 210px)", color: "var(--n-ink)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)", whiteSpace: "pre-line" }}
              >
                {t.collectionIndex.lede}
              </p>
            </div>
          </div>

          <div
            className="mt-20 flex flex-wrap items-baseline gap-x-10 gap-y-4 pt-8 border-t"
            style={{ borderColor: "var(--n-line-soft)" }}
          >
            <span className="n-mono opacity-60">{t.collectionIndex.subtitles}</span>
            <span className="n-mono opacity-60">{t.collectionIndex.subtitles2}</span>
            <span className="n-mono opacity-60">{t.collectionIndex.subtitles2}</span>
          </div>
        </div>
      </section>

      {PIECES.map((piece, i) => {
        const loc = localizePiece(piece, locale);
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
                <div
                  className={`col-span-12 md:col-span-6 ${flip ? "md:col-start-7 md:order-2" : "md:col-start-1"} relative`}
                >
                  <MaskedImage
                    src={piece.image}
                    alt={`${piece.name} — ${loc.tagline}`}
                    tone={piece.mood === "foret" ? "foret" : piece.mood === "cristal" ? "cristal" : piece.mood === "emeraude" ? "emeraude" : "rouge"}
                    ratio="1 / 1"
                    fit="contain"
                    className={flip ? "md:-translate-x-4" : "md:translate-x-4"}
                  />

                  <div
                    className="absolute top-6 left-6 flex items-center gap-3 px-3 py-2"
                    style={{
                      background: "rgba(237, 227, 206, 0.72)",
                      border: "1px solid var(--n-line)",
                      borderRadius: "9999px",
                      backdropFilter: "saturate(1.4) blur(14px)",
                      WebkitBackdropFilter: "saturate(1.4) blur(14px)",
                      boxShadow: "0 4px 14px rgba(10,10,10,0.12)",
                    }}
                  >
                    <span className="n-mono opacity-70">{piece.numeral}</span>
                    <span className="n-eyebrow">{piece.name}</span>
                  </div>

                  <div
                    className={`hidden md:block absolute ${flip ? "-left-6 bottom-10" : "-right-6 bottom-10"} max-w-[280px] p-5`}
                    style={{
                      background: "rgba(244,240,232,0.72)",
                      backdropFilter: "saturate(1.4) blur(14px)",
                      WebkitBackdropFilter: "saturate(1.4) blur(14px)",
                      border: "1px solid var(--n-line-soft)",
                      borderRadius: "clamp(16px, 1.4vw, 22px)",
                      boxShadow: "0 8px 26px rgba(10,10,10,0.10)",
                    }}
                  >
                    <div className="n-mono opacity-60 mb-2">{loc.time}</div>
                    <p
                      className="n-serif text-[15px] leading-[1.4]"
                      style={{ color: "var(--n-ink)" }}
                    >
                      {loc.place}
                    </p>
                  </div>
                </div>

                <div
                  className={`col-span-12 md:col-span-5 ${flip ? "md:col-start-1 md:order-1" : "md:col-start-8"} mt-12 md:mt-0 relative`}
                >
                  <span
                    className="n-serif opacity-15 leading-none block mb-4"
                    style={{ fontSize: "clamp(80px, 12vw, 200px)", color: "var(--n-ink)" }}
                  >
                    <Numeral n={piece.index} />
                  </span>

                  <div className="n-eyebrow mb-6">{loc.chapter}</div>
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
                    « {loc.tagline} »
                  </p>
                  <p
                    className="n-serif text-[17px] leading-[1.6] mb-10 max-w-[46ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    {loc.scene}
                  </p>

                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center gap-2">
                      {loc.teintes.map((tt) => (
                        <div key={tt.hex} className="flex items-center gap-2">
                          <span
                            className="block w-4 h-4 rounded-full border"
                            style={{ background: tt.hex, borderColor: "var(--n-line)" }}
                          />
                          <span className="n-mono opacity-70">{tt.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="n-serif text-[28px] leading-none">{formatPrice(piece.priceEuro, locale)}</span>
                    <span className="n-hair opacity-30" aria-hidden />
                    <Link href={`/collection/${piece.slug}`} className="n-cta">
                      {t.common.voirLaPiece}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="n-section" style={{ background: "var(--n-bg)" }}>
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <h2
                className="n-display leading-[0.96]"
                style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
              >
                {t.collectionIndex.editorialTitle1} <br />
                <span className="n-serif-italic opacity-80">{t.collectionIndex.editorialTitle2}</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
              <p
                className="n-serif text-[17px] leading-[1.6] max-w-[36ch] mb-6"
                style={{ color: "var(--n-muted)" }}
              >
                {t.collectionIndex.editorialBody}
              </p>
              <Link href="/atelier" className="n-cta">{t.collectionIndex.editorialCta}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
