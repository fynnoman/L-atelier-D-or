"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import { useT } from "@/lib/i18n/LanguageContext";

export default function AvisClient() {
  const t = useT();
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow
            numeral={t.avis.eyebrowNum}
            label={t.avis.eyebrowLabel}
            className="mb-14"
          />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={[t.avis.title1, t.avis.title2]}
                delayStep={140}
                style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {t.avis.lede}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="n-page">
          <div
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            aria-label={t.avis.ariaLabel}
          >
            {[1, 2, 3].map((n) => (
              <article
                key={n}
                className="flex flex-col justify-between p-8"
                style={{
                  minHeight: "260px",
                  border: "1px solid var(--n-line)",
                  background: "var(--n-bg-2)",
                }}
              >
                <span className="n-meta opacity-45">{t.avis.testimonial(n)}</span>
                <p
                  className="n-serif-italic mt-8"
                  style={{
                    fontSize: "20px",
                    lineHeight: 1.35,
                    color: "var(--n-muted)",
                  }}
                >
                  {t.avis.bientot}
                </p>
                <span className="n-meta opacity-45 mt-8">{t.avis.aParaitre}</span>
              </article>
            ))}
          </div>

          <div
            className="mt-24 pt-10 border-t flex flex-col md:flex-row items-baseline justify-between gap-6"
            style={{ borderColor: "var(--n-line-soft)" }}
          >
            <p
              className="n-serif text-[17px] leading-[1.55] max-w-[46ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {t.avis.ctaBody}
            </p>
            <Link href="/conseil" className="n-cta">
              {t.avis.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
