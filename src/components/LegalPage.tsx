import LineReveal from "./LineReveal";
import PageEyebrow from "./PageEyebrow";

type Section = {
  title: string;
  body: string[];
};

export default function LegalPage({
  numeral,
  rubric,
  title,
  chapo,
  sections,
}: {
  numeral: string;
  rubric: string;
  title: string;
  chapo?: string;
  sections: Section[];
}) {
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow numeral={numeral} label={rubric} className="mb-14" />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={[title]}
                delayStep={120}
                style={{ fontSize: "clamp(44px, 7vw, 108px)" }}
              />
              {chapo && (
                <p
                  className="n-serif-italic mt-10 text-[22px] leading-[1.4] max-w-[52ch]"
                  style={{ color: "var(--n-muted)" }}
                >
                  {chapo}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 gap-y-16">
            {sections.map((s, i) => (
              <article key={s.title} className="col-span-12 md:col-span-10 md:col-start-2">
                <div
                  className="grid grid-cols-12 gap-x-6 pt-10 border-t"
                  style={{ borderColor: "var(--n-line-soft)" }}
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex items-baseline gap-3">
                      <span className="n-serif text-[40px] leading-none opacity-30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="n-eyebrow">Article</span>
                    </div>
                    <h2 className="n-serif text-[22px] leading-[1.15] mt-6">{s.title}</h2>
                  </div>
                  <div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
                    {s.body.map((para, j) => (
                      <p
                        key={j}
                        className="n-serif text-[17px] leading-[1.6] mb-5"
                        style={{ color: "var(--n-ink)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
