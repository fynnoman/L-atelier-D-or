import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Campaign from "@/components/Campaign";
import PlaceholderImage from "@/components/PlaceholderImage";
import { timeline, artisans } from "@/data/maison";

export const metadata: Metadata = {
  title: "Atelier · Histoire & Ateliers",
  description:
    "Seit 1972 zwischen Paris, Berlin und dem Jura. Drei Generationen L'Atelier d'Or.",
};

export default function AtelierPage() {
  return (
    <>
      <PageHeader
        eyebrow="Maison · Depuis 1972"
        title="Ein Handwerk in dritter Generation."
        intro="1972 von Rémi Kessler am Waldrand des Jura gegründet. Heute mit Werkstätten in Paris, Berlin und Le Sentier. Vier Fassungen pro Jahr, jede von Hand signiert."
      />

      {/* Timeline */}
      <section className="bg-bg pb-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ul className="border-t border-line-soft">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="grid grid-cols-[100px_1fr] md:grid-cols-[160px_1fr] gap-6 md:gap-16 border-b border-line-soft py-10 md:py-14"
              >
                <div>
                  <p className="font-light text-ink text-[36px] md:text-[52px] leading-none tracking-[-0.02em]">
                    {t.year}
                  </p>
                </div>
                <div className="max-w-2xl">
                  <h2 className="font-light text-ink text-[20px] md:text-[26px] leading-tight tracking-[-0.01em]">
                    {t.title}
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-[1.75] text-muted">
                    {t.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Campaign
        eyebrow="Manufaktur"
        title={
          <>
            Verwurzelt
            <br />
            am Waldrand.
          </>
        }
        paragraph="Route du Bugnon 4, Le Sentier. Hier reifen Acetat-Blöcke, werden Titan-Drähte gebogen, gefeilt und dreifach gehärtet."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2600&q=85"
        imageAlt="Werkstatt im Jura"
        cta={{ href: "/kontakt", label: "Werkstatt besuchen" }}
        align="center"
        tone="light"
        height="h-[85dvh] min-h-[560px]"
      />

      {/* Artisans */}
      <section id="artisans" className="relative bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="eyebrow">Les Artisans</p>
            <h2 className="mt-5 font-light text-ink text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em]">
              Menschen hinter dem Handwerk.
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {artisans.map((a) => (
              <li key={a.name}>
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-bg-3">
                  <PlaceholderImage
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=80"
                    alt=""
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    quality={74}
                    className="object-cover"
                    style={{ filter: "grayscale(15%)" }}
                  />
                </div>
                <div className="mt-5">
                  <p className="font-light text-[18px] text-ink leading-tight tracking-[-0.01em]">
                    {a.name}
                  </p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-muted-2">
                    {a.role}
                  </p>
                  {a.note && (
                    <p className="mt-4 text-[14px] leading-[1.7] text-muted">
                      {a.note}
                    </p>
                  )}
                  {a.email && (
                    <a
                      href={`mailto:${a.email}`}
                      className="mt-3 inline-block text-[12.5px] text-ink link-underline break-all"
                    >
                      {a.email}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section className="relative w-full h-[62dvh] min-h-[440px] overflow-hidden bg-bg-2">
        <PlaceholderImage
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2600&q=85"
          alt=""
          sizes="100vw"
          quality={78}
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="max-w-3xl text-center">
            <p className="font-light text-ink text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.35] tracking-[-0.01em]">
              „Ein Handwerk bleibt nur so lange lebendig, wie eine Familie es
              weiterträgt."
            </p>
            <p className="mt-8 eyebrow">Rémi Kessler · Maître Fondateur</p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 text-center">
          <p className="eyebrow">Réservation · Anprobe</p>
          <h2 className="mt-6 font-light text-ink text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em] max-w-2xl mx-auto">
            Anprobe im Salon oder in Ihrer Stadt.
          </h2>
          <div className="mt-10">
            <Link href="/kontakt" className="lv-btn lv-btn-solid">
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
