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
        paddingBlock: "clamp(80px, 13vh, 150px)",
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
              className="n-product-name leading-[1.05] mt-8 mx-auto"
              lines={[t.home.endCall.line1, t.home.endCall.line2]}
              delayStep={140}
              style={{
                fontSize: "clamp(32px, 5vw, 76px)",
                color: "var(--n-bg)",
              }}
            />

            <p
              className="n-body mt-8 mx-auto max-w-[54ch] opacity-75"
              style={{
                fontSize: "clamp(14px, 1.1vw, 17px)",
                lineHeight: 1.55,
              }}
            >
              {t.home.endCall.body}
            </p>

            <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
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
