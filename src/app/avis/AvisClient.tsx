"use client";

import LineReveal from "@/components/LineReveal";
import { useT } from "@/lib/i18n/LanguageContext";

export default function AvisClient() {
  const t = useT();
  return (
    <section className="relative pt-40 md:pt-52 pb-32">
      <div className="n-page">
        <LineReveal
          as="h1"
          className="n-display leading-[0.98]"
          lines={[t.avis.title1]}
          delayStep={140}
          style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
        />
      </div>
    </section>
  );
}
