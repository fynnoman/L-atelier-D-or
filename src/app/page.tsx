import Hero from "@/components/Hero";
import Campaign from "@/components/Campaign";
import CategoryGrid from "@/components/CategoryGrid";
import EssentielsGrid from "@/components/EssentielsGrid";
import MaisonTrio from "@/components/MaisonTrio";
import Immersion from "@/components/Immersion";
import Manifesto from "@/components/Manifesto";
import GoldMarquee from "@/components/GoldMarquee";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />

      <GoldMarquee tone="noir" />

      <CategoryGrid
        eyebrow="Nouvelles Créations"
        title={
          <>
            Vier Fassungen,{" "}
            <span style={{ fontStyle: "italic", color: "var(--or-2)" }}>
              vom Draht bis zur Signatur.
            </span>
          </>
        }
        paragraph="Jedes Modell wird in kleiner Serie zwischen 60 und 120 Stück gefertigt und im Bügel handnummeriert."
        products={products}
        cta={{ href: "/kollektion", label: "Alle Fassungen" }}
        columns={4}
      />

      <Manifesto />

      <Campaign
        eyebrow="Optique · Automne"
        title={
          <>
            Solène et{" "}
            <span style={{ fontStyle: "italic", color: "var(--or-glow)" }}>
              Orphée.
            </span>
          </>
        }
        paragraph="Titan Béta, Vergoldung 18 Karat, Perlmutt-Detail am Steg. In Jura kalt gebogen und dreifach gehärtet."
        image="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=2600&q=88"
        imageAlt="Optique Kampagne — Automne / Hiver"
        cta={{ href: "/kollektion", label: "Optique entdecken" }}
        align="left"
        tone="light"
        plaque="Édition Optique · N° 01"
        height="h-[96dvh] min-h-[640px]"
      />

      <Immersion />

      <Campaign
        eyebrow="Solaire · Édition"
        title={
          <>
            Malbec et{" "}
            <span style={{ fontStyle: "italic", color: "var(--or-glow)" }}>
              Valois.
            </span>
          </>
        }
        paragraph="Acetat Mazzucchelli mit Titan-Kern, Zeiss Mineralglas polarisiert. Sechs Wochen Reifezeit, sieben Tage Politur."
        image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=2600&q=88"
        imageAlt="Solaire Kampagne"
        cta={{ href: "/kollektion", label: "Solaire entdecken" }}
        align="right"
        tone="light"
        plaque="Édition Solaire · N° 02"
        height="h-[96dvh] min-h-[640px]"
      />

      <EssentielsGrid />

      <MaisonTrio />

      <GoldMarquee tone="parchment" />
    </>
  );
}
