import Link from "next/link";
import Hero from "@/components/Hero";
import Campaign from "@/components/Campaign";
import CategoryGrid from "@/components/CategoryGrid";
import EssentielsGrid from "@/components/EssentielsGrid";
import MaisonTrio from "@/components/MaisonTrio";
import Immersion from "@/components/Immersion";
import PlaceholderImage from "@/components/PlaceholderImage";
import { products, type Product } from "@/data/products";

const optique = products.filter((p) =>
  p.subtitle.toLowerCase().includes("optische")
);
const solaire = products.filter((p) =>
  p.subtitle.toLowerCase().includes("sonnenbrille")
);

export default function Home() {
  return (
    <>
      <Hero />

      <Campaign
        eyebrow="Optique"
        title={
          <>
            Neue Fassungen
            <br />
            für den Blick.
          </>
        }
        paragraph="Solène und Orphée — Titan, Vergoldung, Perlmutt-Detail. In Jura kalt gebogen und dreifach gehärtet."
        image="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=2600&q=85"
        imageAlt="Optique Kampagne — Automne / Hiver"
        cta={{ href: "/kollektion", label: "Optique entdecken" }}
        align="left"
        tone="light"
        height="h-[92dvh] min-h-[620px]"
      />

      <Campaign
        eyebrow="Solaire"
        title={
          <>
            Édition
            <br />
            <span className="serif-italic">Automne.</span>
          </>
        }
        paragraph="Malbec und Valois — Acetat Mazzucchelli, Titan-Kern, Zeiss Mineralglas. Sechs Wochen Reifezeit."
        image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=2600&q=85"
        imageAlt="Solaire Kampagne"
        cta={{ href: "/kollektion", label: "Solaire entdecken" }}
        align="right"
        tone="light"
        height="h-[92dvh] min-h-[620px]"
      />

      <Immersion />

      <CategoryGrid
        eyebrow="Nouvelles Créations"
        title="Neue Fassungen der Saison."
        paragraph="Vier Objekte in kleiner Serie, jede von Hand signiert und im Bügel graviert."
        products={products}
        cta={{ href: "/kollektion", label: "Alle Fassungen" }}
        columns={4}
      />

      <EssentielsGrid />

      <section className="bg-bg-2 py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 md:mb-20 max-w-xl">
            <p className="eyebrow">Sélection · Saison</p>
            <h2 className="mt-5 font-light text-ink text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em]">
              Ausgewählte Fassungen.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-14 md:gap-y-20">
            {[...optique, ...solaire].slice(0, 4).map((p) => (
              <ProductThumbEditorial key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      <MaisonTrio />
    </>
  );
}

function ProductThumbEditorial({ p }: { p: Product }) {
  return (
    <Link href={`/kollektion/${p.slug}`} className="group block">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-3">
        <PlaceholderImage
          src={p.image}
          alt={p.imageAlt}
          sizes="(min-width: 1024px) 25vw, 50vw"
          quality={76}
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="font-light text-[15px] text-ink">{p.name}</p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-muted-2">
            {p.subtitle}
          </p>
        </div>
        <p className="text-[13px] text-ink font-light whitespace-nowrap">
          {p.price}
        </p>
      </div>
    </Link>
  );
}
