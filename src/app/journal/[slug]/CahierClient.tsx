"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import PageEyebrow from "@/components/PageEyebrow";
import { CAHIERS, type Cahier } from "@/data/journal";
import { PIECES } from "@/data/collection";
import { useLocale, useT } from "@/lib/i18n/LanguageContext";
import { formatPrice } from "@/lib/i18n/format";
import { localizeCahier } from "@/lib/i18n/content";

export default function CahierClient({ cahier }: { cahier: Cahier }) {
  const t = useT();
  const locale = useLocale();
  const loc = localizeCahier(cahier, locale);
  const others = CAHIERS.filter((c) => c.slug !== cahier.slug);

  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow
            numeral={t.cahier.labelChapter(cahier.numeral)}
            label={`${loc.rubric} · ${loc.date} · ${loc.read}`}
            className="mb-14"
          />

          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <LineReveal
                as="h1"
                className="n-display leading-[0.96]"
                lines={loc.title.split(",").map((s, i, arr) => (i < arr.length - 1 ? s + "," : s))}
                delayStep={110}
                style={{ fontSize: "clamp(44px, 7vw, 108px)" }}
              />

              <p
                className="n-serif-italic mt-12 text-[24px] leading-[1.4] max-w-[46ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {loc.chapo}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="n-page">
          <MaskedImage tone={cahier.tone} ratio="16 / 9" />
        </div>
      </section>

      <section className="relative pb-32">
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              {loc.body.map((para, i) => (
                <p
                  key={i}
                  className="n-serif mb-8 first:first-line:tracking-[0.06em]"
                  style={{
                    fontSize: i === 0 ? "clamp(20px, 1.6vw, 26px)" : "clamp(18px, 1.4vw, 22px)",
                    lineHeight: 1.55,
                    color: "var(--n-ink)",
                  }}
                >
                  {i === 0 && (
                    <span
                      className="n-serif float-left mr-3 mt-1 leading-[0.85]"
                      style={{
                        fontSize: "clamp(56px, 7vw, 96px)",
                        color: "var(--n-gold-deep)",
                      }}
                    >
                      {para.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? para.substring(1) : para}
                </p>
              ))}

              <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--n-line-soft)" }}>
                <p className="n-mono opacity-60">— {t.cahier.signatureSuffix} · {loc.rubric}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24" style={{ background: "var(--n-bg-2)" }}>
        <div className="n-page">
          <PageEyebrow numeral={t.cahier.piecesEyebrowNum} label={t.cahier.piecesEyebrowLabel} className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PIECES.map((p) => (
              <Link
                key={p.slug}
                href={`/collection/${p.slug}`}
                className="group flex flex-col gap-3"
              >
                <span
                  className="block w-full aspect-square overflow-hidden"
                  style={{ background: "var(--n-bg-3)" }}
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </span>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="n-serif text-[17px] leading-none">{p.name}</span>
                  <span className="n-meta opacity-55">{formatPrice(p.priceEuro, locale)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24" style={{ background: "var(--n-bg-warm)" }}>
        <div className="n-page">
          <PageEyebrow numeral={t.cahier.othersEyebrowNum} label={t.cahier.othersEyebrowLabel} className="mb-14" />
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            {others.map((c) => {
              const ol = localizeCahier(c, locale);
              return (
                <Link
                  key={c.slug}
                  href={`/journal/${c.slug}`}
                  className="col-span-12 md:col-span-6 group block"
                >
                  <article className="relative n-mask" style={{ aspectRatio: "5 / 3" }}>
                    <div className={`n-tile is-${c.tone}`} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,15,10,0) 40%, rgba(20,15,10,0.55) 100%)" }} />
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <span className="n-mono opacity-80" style={{ color: "var(--n-bg)" }}>{t.cahier.cahierN(c.numeral)} · {ol.rubric}</span>
                      <span className="n-mono opacity-70" style={{ color: "var(--n-bg)" }}>{ol.read}</span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3
                        className="n-display leading-[1] mb-2"
                        style={{ fontSize: "clamp(24px, 2.6vw, 40px)", color: "var(--n-bg)" }}
                      >
                        {ol.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
