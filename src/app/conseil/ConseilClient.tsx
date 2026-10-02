"use client";

import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import ConseilEcrin from "@/components/conseil/ConseilEcrin";
import { useT } from "@/lib/i18n/LanguageContext";

export default function ConseilClient() {
  const t = useT();
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-20 md:pb-28">
        <div className="n-page">
          <PageEyebrow label={t.conseil.eyebrowLabel} className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={[t.conseil.title1, t.conseil.title2]}
                delayStep={140}
                style={{ fontSize: "clamp(56px, 10vw, 180px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[18px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                {t.conseil.lede}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess — wie wir beraten */}
      <section
        className="relative py-20 md:py-28"
        style={{ background: "var(--n-bg-2)" }}
      >
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-end mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-7">
              <PageEyebrow label={t.conseil.processEyebrow} className="mb-6" />
              <h2
                className="n-display leading-[1.02]"
                style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 300 }}
              >
                {t.conseil.processTitle}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
              <p
                className="n-serif leading-[1.6] max-w-[38ch]"
                style={{ fontSize: "16px", color: "var(--n-muted)" }}
              >
                {t.conseil.processLede}
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-12 gap-x-6 gap-y-10 list-none p-0">
            {t.conseil.steps.map((s, i) => (
              <li
                key={s.t}
                className="col-span-12 md:col-span-4 border-t pt-8"
                style={{ borderColor: "var(--n-line)" }}
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    className="n-display leading-none opacity-40"
                    style={{ fontSize: "40px", fontWeight: 300 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="n-eyebrow">{t.atelier.principleWord}</span>
                </div>
                <h3 className="n-serif text-[22px] leading-[1.2] mb-4">{s.t}</h3>
                <p
                  className="n-serif leading-[1.55] max-w-[40ch]"
                  style={{ fontSize: "15px", color: "var(--n-muted)" }}
                >
                  {s.b}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Etui-Formular */}
      <section className="relative pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="n-page">
          <ConseilEcrin />
        </div>
      </section>

      {/* Was eine Beratung enthält */}
      <section className="relative py-20 md:py-28">
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-start">
            <div className="col-span-12 md:col-span-5">
              <PageEyebrow label={t.conseil.expectEyebrow} className="mb-6" />
              <h2
                className="n-display leading-[1.04]"
                style={{ fontSize: "clamp(28px, 3.8vw, 52px)", fontWeight: 300 }}
              >
                {t.conseil.expectTitle}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-8 md:mt-0">
              <ul className="flex flex-col gap-5 list-none p-0">
                {t.conseil.expectItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-5 border-t pt-5"
                    style={{ borderColor: "var(--n-line-soft)" }}
                  >
                    <span
                      className="n-mono opacity-45"
                      style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="n-serif leading-[1.55] max-w-[52ch]"
                      style={{ fontSize: "16px", color: "var(--n-ink)" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rendez-vous privé */}
      <section
        className="relative py-24 md:py-32"
        style={{ background: "var(--n-ink)", color: "var(--n-bg)" }}
      >
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <PageEyebrow label={t.conseil.rendezvousEyebrow} className="mb-6" />
              <h2
                className="n-display leading-[1.04]"
                style={{ fontSize: "clamp(32px, 5vw, 80px)", fontWeight: 300 }}
              >
                {t.conseil.rendezvousTitle}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-0">
              <p
                className="n-serif leading-[1.55] max-w-[36ch] opacity-80"
                style={{ fontSize: "16px" }}
              >
                {t.conseil.rendezvousBody}
              </p>
            </div>
          </div>

          <div
            className="mt-16 pt-10 flex flex-wrap gap-x-14 gap-y-4 border-t"
            style={{ borderColor: "rgba(237,227,206,0.22)" }}
          >
            {t.conseil.rendezvousCities.map((c) => (
              <span
                key={c}
                className="n-display leading-none"
                style={{
                  fontSize: "clamp(28px, 4vw, 56px)",
                  fontWeight: 300,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
