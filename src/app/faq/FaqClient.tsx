"use client";

import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import { useT } from "@/lib/i18n/LanguageContext";

export default function FaqClient() {
  const t = useT();
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow numeral={t.faq.eyebrowNum} label={t.faq.eyebrowLabel} className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={[t.faq.title1, t.faq.title2]}
                delayStep={140}
                style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {t.faq.lede}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="n-page">
          {t.faq.sections.map((section, i) => (
            <div
              key={section.title}
              className="grid grid-cols-12 gap-x-6 gap-y-6 py-14 border-t"
              style={{ borderColor: "var(--n-line-soft)" }}
            >
              <div className="col-span-12 md:col-span-4">
                <PageEyebrow numeral={`§ 0${i + 1}`} label={section.title} />
              </div>
              <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
                {section.qas.map((qa) => (
                  <article key={qa.q}>
                    <h3
                      className="n-serif text-[20px] leading-[1.3] mb-3"
                      style={{ color: "var(--n-ink)" }}
                    >
                      {qa.q}
                    </h3>
                    <p
                      className="n-body text-[16px] leading-[1.6]"
                      style={{
                        color: qa.pending ? "var(--n-muted-2)" : "var(--n-muted)",
                        fontStyle: qa.pending ? "italic" : "normal",
                      }}
                    >
                      {qa.a}
                      {qa.link && (
                        <>
                          {qa.link.before}
                          <Link href={qa.link.href} className="underline underline-offset-4">
                            {qa.link.text}
                          </Link>
                          {qa.link.after}
                        </>
                      )}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div
            className="mt-16 pt-10 border-t flex flex-col md:flex-row items-baseline justify-between gap-6"
            style={{ borderColor: "var(--n-line-soft)" }}
          >
            <p
              className="n-serif text-[17px] leading-[1.55] max-w-[46ch]"
              style={{ color: "var(--n-muted)" }}
            >
              {t.faq.footerBody}
            </p>
            <Link href="/conseil" className="n-cta">
              {t.faq.footerCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
