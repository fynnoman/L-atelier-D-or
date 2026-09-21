import Link from "next/link";
import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";
import { CAHIERS } from "@/data/journal";

export const metadata = {
  title: "Journal",
  description:
    "Les cahiers de la maison. Trois cahiers pour l'instant. Un ou deux par saison, quand nous avons quelque chose à dire.",
  alternates: { canonical: "/journal" },
};

export default function JournalIndex() {
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-24">
        <div className="n-page">
          <PageEyebrow numeral="Journal" label="Les cahiers de la maison" className="mb-14" />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.94]"
                lines={["Un cahier,", "quand nous avons", "quelque chose à dire."]}
                delayStep={130}
                style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                Trois cahiers pour l&rsquo;instant. Nous en publions un ou deux par saison — et jamais autrement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="n-page grid grid-cols-12 gap-x-6 gap-y-24">
          {CAHIERS.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={c.slug}
                className={`col-span-12 grid grid-cols-12 gap-x-6 items-end pb-16 border-b`}
                style={{ borderColor: "var(--n-line-soft)" }}
              >
                <div
                  className={`col-span-12 md:col-span-2 ${flip ? "md:order-3 md:text-right" : ""}`}
                >
                  <div
                    className="n-serif leading-none opacity-30"
                    style={{ fontSize: "clamp(56px, 6vw, 96px)" }}
                  >
                    {c.numeral}
                  </div>
                  <div className="n-mono opacity-60 mt-4">{c.rubric}</div>
                </div>

                <div
                  className={`col-span-12 md:col-span-7 ${flip ? "md:order-2 md:col-start-4" : "md:col-start-4"}`}
                >
                  <h2
                    className="n-display leading-[0.98]"
                    style={{ fontSize: "clamp(36px, 5.5vw, 84px)" }}
                  >
                    <Link
                      href={`/journal/${c.slug}`}
                      style={{ color: "var(--n-ink)" }}
                    >
                      {c.title}
                    </Link>
                  </h2>
                  <p
                    className="n-serif text-[19px] leading-[1.5] mt-6 max-w-[54ch]"
                    style={{ color: "var(--n-muted)" }}
                  >
                    {c.chapo}
                  </p>
                </div>

                <div
                  className={`col-span-12 md:col-span-3 ${flip ? "md:order-1 md:col-start-11 md:text-right" : "md:col-start-12"} mt-6 md:mt-0`}
                >
                  <div className="flex flex-col gap-2">
                    <span className="n-mono opacity-60">{c.date}</span>
                    <span className="n-mono opacity-60">{c.read}</span>
                    <Link href={`/journal/${c.slug}`} className="n-link mt-4 self-start md:self-end">
                      Lire le cahier
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
