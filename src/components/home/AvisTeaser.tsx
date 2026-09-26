"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/LanguageContext";

export default function AvisTeaser() {
  const t = useT();
  return (
    <section
      className="relative"
      style={{
        paddingBlock: "clamp(72px, 12vh, 128px)",
        background: "var(--n-bg-2)",
      }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="n-eyebrow block mb-8">{t.home.avisTeaser.eyebrow}</span>
            <h2
              className="n-display leading-[0.98]"
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                fontWeight: 300,
              }}
            >
              {t.home.avisTeaser.title1} <br />
              <span className="opacity-80">{t.home.avisTeaser.title2}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
            <p
              className="n-body leading-[1.55] max-w-[38ch] mb-8"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                color: "var(--n-muted)",
              }}
            >
              {t.home.avisTeaser.body}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/conseil" className="n-cta">
                {t.home.avisTeaser.ctaShare}
              </Link>
              <Link href="/avis" className="n-link">
                {t.home.avisTeaser.ctaSee}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
