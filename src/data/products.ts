export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  edition: string;
  price: string;
  materials: string[];
  colors: { label: string; hex: string }[];
  story: string;
  measurements: { label: string; value: string }[];
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "solene-01",
    name: "Solène 01",
    subtitle: "Optische Fassung, Aviator-Silhouette",
    edition: "Édition de 120",
    price: "Ab 1 480 €",
    materials: ["Titan Béta", "Vergoldung 18 Karat", "Naturkautschuk"],
    colors: [
      { label: "Or Pâle", hex: "#d9b78a" },
      { label: "Bronze Ancien", hex: "#7a5a30" },
      { label: "Noir Encre", hex: "#0f0d0a" },
    ],
    story:
      "Die Solène ist im Atelier in Jura entstanden. Eine leichte Fassung mit doppeltem Steg und einer Linie, die den Blick öffnet. Jede Fassung wird poliert, satiniert und von Hand nummeriert.",
    measurements: [
      { label: "Glasbreite", value: "52 mm" },
      { label: "Nasensteg", value: "20 mm" },
      { label: "Bügellänge", value: "145 mm" },
      { label: "Gewicht", value: "12,4 g" },
    ],
    image: "/models/solene-01.jpg",
    imageAlt: "Solène 01, Titanfassung mit Vergoldung",
  },
  {
    slug: "malbec-02",
    name: "Malbec 02",
    subtitle: "Sonnenbrille, Panto",
    edition: "Édition de 80",
    price: "Ab 1 720 €",
    materials: ["Acetat Mazzucchelli", "Titan-Kern", "Zeiss Mineralglas"],
    colors: [
      { label: "Havane Profond", hex: "#3b2618" },
      { label: "Écaille Cendrée", hex: "#5c4a3a" },
      { label: "Noir Verre", hex: "#0b0908" },
    ],
    story:
      "Die Malbec entsteht aus einem einzigen Acetat-Block, sechs Wochen gereift, sieben Tage von Hand poliert. Die Gläser werden in Deutschland geschliffen und mit einer Anti-Reflex-Beschichtung versehen.",
    measurements: [
      { label: "Glasbreite", value: "49 mm" },
      { label: "Nasensteg", value: "22 mm" },
      { label: "Bügellänge", value: "148 mm" },
      { label: "Gewicht", value: "22,1 g" },
    ],
    image: "/models/malbec-02.jpg",
    imageAlt: "Malbec 02, Panto-Silhouette aus Acetat",
  },
  {
    slug: "orphee-03",
    name: "Orphée 03",
    subtitle: "Optische Fassung, Rund",
    edition: "Édition de 60",
    price: "Ab 2 240 €",
    materials: ["Titan-Draht 0,9 mm", "Vergoldung 18 Karat", "Perlmutt-Detail"],
    colors: [
      { label: "Or Miel", hex: "#c99a53" },
      { label: "Argent Poli", hex: "#c9c5bd" },
    ],
    story:
      "Die Orphée trägt einen Perlmutt-Punkt am Steg. Ein Ritual, das an die Gründung des Hauses erinnert. Der Draht wird kalt in Form gebogen und dreifach gehärtet.",
    measurements: [
      { label: "Glasbreite", value: "47 mm" },
      { label: "Nasensteg", value: "22 mm" },
      { label: "Bügellänge", value: "145 mm" },
      { label: "Gewicht", value: "8,9 g" },
    ],
    image: "/models/orphee-03.jpg",
    imageAlt: "Orphée 03, runde Titanfassung mit Perlmutt",
  },
  {
    slug: "valois-04",
    name: "Valois 04",
    subtitle: "Sonnenbrille, Cat-Eye",
    edition: "Édition de 100",
    price: "Ab 1 640 €",
    materials: ["Acetat Bio", "Titan-Scharniere", "Zeiss Mineralglas polarisiert"],
    colors: [
      { label: "Bordeaux Nuit", hex: "#4a1a1e" },
      { label: "Ambre Fumée", hex: "#8a5a2a" },
      { label: "Noir Mat", hex: "#0a0908" },
    ],
    story:
      "Die Valois zitiert die Silhouetten der 60er Jahre, ohne sie zu kopieren. Die Bügel enden in einem gebürsteten Titan-Endstück, das den Bogen der Fassung fortführt.",
    measurements: [
      { label: "Glasbreite", value: "54 mm" },
      { label: "Nasensteg", value: "18 mm" },
      { label: "Bügellänge", value: "140 mm" },
      { label: "Gewicht", value: "24,6 g" },
    ],
    image: "/models/valois-04.jpg",
    imageAlt: "Valois 04, Cat-Eye Sonnenbrille",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
