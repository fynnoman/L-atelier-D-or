"use client";

import Link from "next/link";
import LineReveal from "../LineReveal";
import { useT } from "@/lib/i18n/LanguageContext";

export default function EndCall() {
  const t = useT();
  return (
    <section
      className="relative overflow-hidden n-velour"
      style={{
        paddingBlock: "clamp(160px, 24vh, 280px)",
      }}
    >
      <div className="n-page">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 text-center">
            <span
              className="n-eyebrow"
              style={{ color: "rgba(237,227,206,0.72)" }}
            >
              {t.home.endCall.eyebrow}
            </span>

            <LineReveal
              as="p"
              className="n-quote leading-[1.02] mt-14 mx-auto max-w-[16ch]"
              lines={[t.home.endCall.line1, t.home.endCall.line2]}
              delayStep={140}
              style={{
                fontSize: "clamp(56px, 10vw, 168px)",
                color: "var(--n-bg)",
              }}
            />

            <p
              className="n-body mt-14 mx-auto max-w-[54ch] opacity-75"
              style={{
                fontSize: "clamp(16px, 1.4vw, 22px)",
                lineHeight: 1.55,
              }}
            >
              {t.home.endCall.body}
            </p>

            <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
              <Link
                href="/collection"
                className="n-cta n-cta-ghost"
                style={{ color: "var(--n-bg)", borderColor: "var(--n-bg)" }}
              >
                {t.home.endCall.ctaCollection}
              </Link>
              <Link
                href="/atelier"
                className="n-link"
                style={{ color: "var(--n-bg)" }}
              >
                {t.home.endCall.ctaAtelier}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
