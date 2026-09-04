import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CategoryGrid from "@/components/CategoryGrid";
import EssentielsGrid from "@/components/EssentielsGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Kollektion",
  description:
    "Vier Fassungen in limitierter Auflage. Titan, Acetat, 18 Karat.",
};

const optique = products.filter((p) =>
  p.subtitle.toLowerCase().includes("optische")
);
const solaire = products.filter((p) =>
  p.subtitle.toLowerCase().includes("sonnenbrille")
);

export default function KollektionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kollektion · Automne / Hiver"
        title="Neue Fassungen."
        intro="Vier eng aufeinander abgestimmte Fassungen — Aviator, Panto, Rund, Cat-Eye. Jede in kleiner Serie, jede von Hand signiert."
      />

      <CategoryGrid
        eyebrow="Optique"
        title="Optische Fassungen."
        paragraph="Titan Béta, Vergoldung, Perlmutt-Detail — kalt gebogen und dreifach gehärtet."
        products={optique}
        columns={optique.length >= 4 ? 4 : 2}
      />

      <CategoryGrid
        eyebrow="Solaire"
        title="Sonnenbrillen."
        paragraph="Acetat Mazzucchelli, Titan-Kern, Zeiss Mineralglas — sechs Wochen Reifezeit."
        products={solaire}
        columns={solaire.length >= 4 ? 4 : 2}
      />

      <EssentielsGrid />
    </>
  );
}
