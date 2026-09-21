export type Mood = "rouge" | "foret" | "cristal" | "emeraude";

export type Piece = {
  slug: "roi-rouge" | "roi-noir" | "roi-cristal" | "roi-emeraude";
  index: 1 | 2 | 3 | 4;
  numeral: "I" | "II" | "III" | "IV";
  name: string;
  tagline: string;
  chapter: string;
  place: string;
  time: string;
  silhouette: string;
  materie: string;
  teintes: { name: string; hex: string }[];
  details: string[];
  notes: string[];
  scene: string;
  mood: Mood;
  image?: string;
  imageWorn?: string;
  priceEuro: 78.9;
};

export const PIECES: Piece[] = [
  {
    slug: "roi-rouge",
    index: 1,
    numeral: "I",
    name: "Roi Rouge",
    tagline: "Rectangle, acétate rouge à charnières or.",
    chapter: "Kapitel I · Der Salon",
    place: "Ein Privatsalon unter den Dächern des VIII. Arrondissements.",
    time: "22:10 Uhr",
    silhouette: "Rechteck, weich abgerundet. Kanten von Hand geschnitten.",
    materie: "Italienisches Acetat · Titankern · verschraubte Goldscharniere.",
    teintes: [
      { name: "Rouge Ember", hex: "#7E1F14" },
      { name: "Noir Encre", hex: "#0B0704" },
    ],
    details: [
      "Front 48 mm",
      "Rote Platten aus der Masse geschnitten",
      "Goldfaden am Bügelende",
    ],
    notes: ["patiniertes Leder", "heller Tabak", "langer Pfeffer", "schwarzes Wachs"],
    scene: "Der Samt hält das Licht länger als die Haut.",
    mood: "rouge",
    image: "/models/roi-rouge.jpg",
    imageWorn: "/models/roi-rouge-worn.jpg",
    priceEuro: 78.9,
  },
  {
    slug: "roi-noir",
    index: 2,
    numeral: "II",
    name: "Roi Noir",
    tagline: "Panto, acétate vert sous-bois à rivets bronze.",
    chapter: "Kapitel II · Die Jagd",
    place: "Ein restauriertes Jagdpavillon in der Sologne.",
    time: "Fünf Stunden vor dem Dîner",
    silhouette: "Hohe Panto, geschlossene Linie, weiche Kante.",
    materie: "Mattes waldgrünes Acetat · Titankern · Nieten aus patinierter Bronze.",
    teintes: [
      { name: "Vert Sous-Bois", hex: "#1F3D24" },
      { name: "Mousse Cendrée", hex: "#3D6B3E" },
    ],
    details: [
      "Panto 49 mm",
      "Von Hand polierte Bronze-Enden",
      "Titan-Nasenpads aus einem Stück",
    ],
    notes: ["Moos", "libanesische Zeder", "Sattlerleder", "pflanzliche Tinte"],
    scene: "Feuchtes Holz, trockener Tweed. Nichts zu viel.",
    mood: "foret",
    image: "/models/roi-noir.jpg",
    imageWorn: "/models/roi-noir-worn.jpg",
    priceEuro: 78.9,
  },
  {
    slug: "roi-cristal",
    index: 3,
    numeral: "III",
    name: "Roi Cristal",
    tagline: "Ovale, acétate cristal à charnières argent.",
    chapter: "Kapitel III · Die Kapelle",
    place: "Eine Landkapelle, am frühen Morgen.",
    time: "9:45 Uhr",
    silhouette: "Länglicher Oval, sehr feine kristalline Kante.",
    materie: "Kristallacetat · polierte Silberschrauben · milchige Silikon-Pads.",
    teintes: [
      { name: "Cristal Bleu Ciel", hex: "#B6D2E3" },
      { name: "Blanc de Neige", hex: "#F4F8FB" },
    ],
    details: [
      "Oval 51 mm",
      "Materialstärke 2,4 mm",
      "Silberscharniere, von Hand poliert",
    ],
    notes: ["Iris", "klares Wasser", "frische Mandel", "Seidenpapier"],
    scene: "Ein blasser Tag, ein Licht, das niemanden verrät.",
    mood: "cristal",
    image: "/models/roi-cristal.jpg",
    imageWorn: "/models/roi-cristal-worn.jpg",
    priceEuro: 78.9,
  },
  {
    slug: "roi-emeraude",
    index: 4,
    numeral: "IV",
    name: "Roi Émeraude",
    tagline: "Panto, acétate émeraude à fil d'or 18 carats.",
    chapter: "Kapitel IV · Das Dîner",
    place: "Ein Dîner in einer Orangerie, unter den Bäumen.",
    time: "21:30 Uhr",
    silhouette: "Männliche Panto, skulptierte Kante, lange Bügel.",
    materie: "Smaragdacetat · Goldfaden 18 Karat · pflaumenfarbene Scharniere.",
    teintes: [
      { name: "Vert Émeraude", hex: "#1F6B4A" },
      { name: "Violet Prune", hex: "#6A3F8E" },
    ],
    details: [
      "Panto 50 mm",
      "Front aus grünem Acetat, von Hand geschnitten",
      "Goldfaden 18 Karat auf der Oberkante",
    ],
    notes: ["Gardenie", "reife Feige", "gepuderte Veilchen", "bernsteinfarbener Wein"],
    scene: "Die Gläser klingen, die Kerzen flackern, jemand lacht leise.",
    mood: "emeraude",
    image: "/models/roi-emeraude.jpg",
    imageWorn: "/models/roi-emeraude-worn.jpg",
    priceEuro: 78.9,
  },
];

export const getPiece = (slug: string) =>
  PIECES.find((p) => p.slug === slug);

export const formatEuro = (n: number) =>
  n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " €";
