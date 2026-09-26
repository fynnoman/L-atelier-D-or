"use client";

import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import ConseilEcrin from "@/components/conseil/ConseilEcrin";
import { useT } from "@/lib/i18n/LanguageContext";

export default function ConseilClient() {
  const t = useT();
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow
            numeral={t.conseil.eyebrowNum}
            label={t.conseil.eyebrowLabel}
            className="mb-14"
          />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={[t.conseil.title1, t.conseil.title2]}
                delayStep={140}
                style={{ fontSize: "clamp(64px, 12vw, 210px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {t.conseil.lede}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="n-page">
          <ConseilEcrin />
        </div>
      </section>
    </>
  );
}
