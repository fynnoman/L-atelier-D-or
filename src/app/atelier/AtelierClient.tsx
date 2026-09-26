"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import MaskedImage from "@/components/MaskedImage";
import Numeral from "@/components/Numeral";
import PageEyebrow from "@/components/PageEyebrow";
import { useT } from "@/lib/i18n/LanguageContext";

export default function AtelierClient() {
  const t = useT();
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-24 overflow-hidden">
        <div className="n-page relative">
          <PageEyebrow numeral={t.atelier.heroEyebrowNum} label={t.atelier.heroEyebrowLabel} className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={[t.atelier.heroTitle1, t.atelier.heroTitle2]}
                delayStep={130}
                style={{ fontSize: "clamp(64px, 12vw, 210px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {t.atelier.heroLede}
              </p>
            </div>
          </div>
        </div>

        <div className="n-page mt-24 grid grid-cols-12 gap-x-6 gap-y-10 items-start">
          <div className="col-span-12 md:col-span-8 relative">
            <MaskedImage tone="warm" ratio="16 / 10" />
            <div
              className="hidden md:block absolute -right-6 -bottom-10 w-[260px] h-[170px] z-10 border"
              style={{ borderColor: "var(--n-line)" }}
            >
              <MaskedImage tone="parchment" ratio="260 / 170" />
            </div>
          </div>
          <aside className="col-span-12 md:col-span-4 flex flex-col gap-8 md:pt-6">
            <div>
              <div className="n-eyebrow mb-3">{t.atelier.houseEyebrow}</div>
              <p className="n-serif text-[19px] leading-[1.35]">
                {t.atelier.houseBody}
              </p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">{t.atelier.editionEyebrow}</div>
              <p className="n-serif text-[19px] leading-[1.35]">
                {t.atelier.editionBody}
              </p>
            </div>
            <div>
              <div className="n-eyebrow mb-3">{t.atelier.ruleEyebrow}</div>
              <p className="n-serif-italic text-[19px] leading-[1.4]" style={{ color: "var(--n-muted)" }}>
                {t.atelier.ruleQuote}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="relative py-36"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page grid grid-cols-12 gap-x-6 items-end mb-24">
          <div className="col-span-12 md:col-span-7">
            <PageEyebrow numeral={t.atelier.section1Eyebrow} label={t.atelier.section1Label} className="mb-8" />
            <h2 className="n-display leading-[0.94]" style={{ fontSize: "clamp(48px, 8vw, 132px)" }}>
              {t.atelier.section1Title1} <br />
              <span className="n-serif-italic opacity-80">{t.atelier.section1Title2}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <p
              className="n-serif text-[18px] leading-[1.55] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {t.atelier.section1Body}
            </p>
          </div>
        </div>

        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-4">
          {t.atelier.gestes.map((g, i) => (
            <article
              key={g.n}
              className="col-span-12 md:col-span-6 flex items-baseline gap-6 py-6 border-t"
              style={{ borderColor: "var(--n-line-soft)" }}
            >
              <span
                className="n-serif leading-none opacity-40"
                style={{ fontSize: "clamp(40px, 4vw, 64px)" }}
              >
                {g.n}
              </span>
              <div>
                <div className="n-eyebrow opacity-70 mb-1">{t.atelier.gesteWord} 0{i + 1}</div>
                <div className="n-serif text-[22px] leading-[1.15]">{g.label}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="n-page mt-24 grid grid-cols-12 gap-x-6 items-start">
          <div className="col-span-12 md:col-span-6 relative">
            <MaskedImage tone="ink" ratio="4 / 5" />
            <div
              className="hidden md:block absolute -right-8 top-10 w-[180px] h-[240px] border"
              style={{ borderColor: "var(--n-line)" }}
            >
              <MaskedImage tone="warm" ratio="180 / 240" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-12 md:mt-0">
            <span className="n-serif opacity-15 leading-none block mb-4" style={{ fontSize: "clamp(120px, 14vw, 220px)" }}>
              <Numeral n={4} />
            </span>
            <p
              className="n-serif text-[22px] leading-[1.5] max-w-[42ch] mb-8"
              style={{ color: "var(--n-ink)" }}
            >
              {t.atelier.piece4Body}
            </p>
          </div>
        </div>
      </section>

      <section className="n-section relative">
        <div className="n-page grid grid-cols-12 gap-x-6 items-end mb-16">
          <div className="col-span-12 md:col-span-7">
            <PageEyebrow numeral={t.atelier.section2Eyebrow} label={t.atelier.section2Label} className="mb-8" />
            <h2 className="n-display leading-[0.94]" style={{ fontSize: "clamp(48px, 8vw, 132px)" }}>
              {t.atelier.section2Title1} <br />
              <span className="n-serif-italic opacity-80">{t.atelier.section2Title2}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <p
              className="n-serif text-[18px] leading-[1.55] max-w-[36ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {t.atelier.section2Body}
            </p>
          </div>
        </div>

        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-10">
          {t.atelier.principles.map((v, i) => (
            <article key={v.t} className="col-span-12 md:col-span-4 border-t pt-8" style={{ borderColor: "var(--n-line)" }}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="n-serif text-[40px] leading-none opacity-40">0{i + 1}</span>
                <span className="n-eyebrow">{t.atelier.principleWord}</span>
              </div>
              <div className="n-serif text-[24px] leading-[1.15] mb-4">{v.t}</div>
              <p className="n-serif text-[16px] leading-[1.55]" style={{ color: "var(--n-muted)" }}>{v.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative py-32" style={{ background: "var(--n-ink)", color: "var(--n-bg)" }}>
        <div className="n-page grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <h2
              className="n-display leading-[0.96]"
              style={{ fontSize: "clamp(48px, 8vw, 132px)" }}
            >
              {t.atelier.ctaTitle1} <br />
              <span className="n-serif-italic opacity-80">{t.atelier.ctaTitle2}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
            <p className="n-serif text-[18px] leading-[1.55] opacity-80 max-w-[36ch] mb-8">
              {t.atelier.ctaBody}
            </p>
            <Link href="/collection" className="n-cta">{t.atelier.cta}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
