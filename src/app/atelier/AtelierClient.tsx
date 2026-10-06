"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import PageEyebrow from "@/components/PageEyebrow";
import { useT } from "@/lib/i18n/LanguageContext";

export default function AtelierClient() {
  const t = useT();
  return (
    <>
      {/* Hero – kompakter, ohne dominante Riesen-Typo */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div className="n-page relative">
          <PageEyebrow
            numeral={t.atelier.heroEyebrowNum}
            label={t.atelier.heroEyebrowLabel}
            className="mb-10"
          />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={[t.atelier.heroTitle1, t.atelier.heroTitle2]}
                delayStep={110}
                style={{ fontSize: "clamp(44px, 7vw, 108px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-4 mt-8 md:mt-0">
              <p
                className="n-serif leading-[1.55] max-w-[38ch]"
                style={{ fontSize: "17px", color: "var(--n-muted)" }}
              >
                {t.atelier.heroLede}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* § 01 — Origine */}
      <section className="relative pb-24 md:pb-32">
        <div className="n-page grid grid-cols-12 gap-x-6 items-start">
          <div className="col-span-12 md:col-span-4">
            <PageEyebrow
              numeral={t.atelier.originEyebrow}
              label={t.atelier.originLabel}
              className="mb-6"
            />
            <h2
              className="n-display leading-[1.02]"
              style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
            >
              {t.atelier.originTitle}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 mt-8 md:mt-0 flex flex-col gap-5">
            {t.atelier.originParas.map((para, i) => (
              <p
                key={i}
                className="n-serif leading-[1.6] max-w-[62ch]"
                style={{ fontSize: "17px", color: "var(--n-ink)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative">
        <div className="n-page">
          <MaskedImage
            tone="warm"
            ratio="21 / 9"
            src="/atelier/boutique-shelf.png"
            alt="Présentoir de la boutique L'Atelier d'Or, lunettes alignées sur une étagère de travertin."
            objectPosition="50% 55%"
          />
        </div>
      </section>

      {/* § 02 — Démarche + Principles */}
      <section
        className="relative py-24 md:py-32 mt-16"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-10 items-start mb-14">
          <div className="col-span-12 md:col-span-4">
            <PageEyebrow
              numeral={t.atelier.approachEyebrow}
              label={t.atelier.approachLabel}
              className="mb-6"
            />
            <h2
              className="n-display leading-[1.02]"
              style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
            >
              {t.atelier.approachTitle}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col gap-5">
            {t.atelier.approachParas.map((para, i) => (
              <p
                key={i}
                className="n-serif leading-[1.6] max-w-[62ch]"
                style={{ fontSize: "17px", color: "var(--n-ink)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-10">
          {t.atelier.principles.map((p, i) => (
            <article
              key={p.t}
              className="col-span-12 md:col-span-4 border-t pt-8"
              style={{ borderColor: "var(--n-line)" }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="n-serif text-[32px] leading-none opacity-35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="n-eyebrow">{t.atelier.principleWord}</span>
              </div>
              <h3 className="n-serif text-[22px] leading-[1.2] mb-3">{p.t}</h3>
              <p
                className="n-serif leading-[1.55] max-w-[36ch]"
                style={{ fontSize: "15px", color: "var(--n-muted)" }}
              >
                {p.b}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* § 03 — Collection (transition) */}
      <section className="relative py-24 md:py-32">
        <div className="n-page grid grid-cols-12 gap-x-6 items-center">
          <div className="col-span-12 md:col-span-5">
            <PageEyebrow
              numeral={t.atelier.collectionEyebrow}
              label={t.atelier.collectionLabel}
              className="mb-6"
            />
            <h2
              className="n-display leading-[1.02] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
            >
              {t.atelier.collectionTitle}
            </h2>
            <p
              className="n-serif leading-[1.6] max-w-[46ch] mb-8"
              style={{ fontSize: "17px", color: "var(--n-muted)" }}
            >
              {t.atelier.collectionBody}
            </p>
            <Link href="/collection" className="n-cta">
              {t.atelier.cta}
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-0">
            <MaskedImage tone="ink" ratio="4 / 5" />
          </div>
        </div>
      </section>

      {/* § 04 — Materials & details */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "var(--n-bg-2)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 items-end mb-14">
          <div className="col-span-12 md:col-span-7">
            <PageEyebrow
              numeral={t.atelier.materialsEyebrow}
              label={t.atelier.materialsLabel}
              className="mb-6"
            />
            <h2
              className="n-display leading-[1.02]"
              style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
            >
              {t.atelier.materialsTitle}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <p
              className="n-serif leading-[1.55] max-w-[36ch]"
              style={{ fontSize: "16px", color: "var(--n-muted)" }}
            >
              {t.atelier.materialsIntro}
            </p>
          </div>
        </div>

        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-10">
          {t.atelier.materialsItems.map((m, i) => (
            <article
              key={m.t}
              className="col-span-12 md:col-span-6 lg:col-span-3 border-t pt-6"
              style={{ borderColor: "var(--n-line-soft)" }}
            >
              <span className="n-mono opacity-45" style={{ fontSize: "11px", letterSpacing: "0.2em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="n-serif text-[19px] leading-[1.2] mt-3 mb-3">{m.t}</h3>
              <p
                className="n-serif leading-[1.55]"
                style={{ fontSize: "14px", color: "var(--n-muted)" }}
              >
                {m.b}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — sober, product-forward */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "var(--n-ink)", color: "var(--n-bg)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <div
              className="n-eyebrow mb-6"
              style={{ color: "rgba(237,227,206,0.72)" }}
            >
              {t.atelier.ctaEyebrow}
            </div>
            <h2
              className="n-display leading-[1.02]"
              style={{ fontSize: "clamp(32px, 4vw, 72px)" }}
            >
              {t.atelier.ctaTitle1} <br />
              <span className="n-serif-italic opacity-80">{t.atelier.ctaTitle2}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
            <p
              className="n-serif leading-[1.55] max-w-[36ch] mb-8 opacity-80"
              style={{ fontSize: "16px" }}
            >
              {t.atelier.ctaBody}
            </p>
            <Link href="/collection" className="n-cta">
              {t.atelier.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
