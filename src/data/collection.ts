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
    tagline: "Rectangle, acétate rouge à finition dorée.",
    chapter: "Chapitre I · Le Salon",
    place: "Un salon privé, tard le soir.",
    time: "Fin de soirée",
    silhouette: "Rectangle aux angles adoucis, arête franche.",
    materie: "Acétate coloré dans la masse, finition dorée sur les charnières.",
    teintes: [
      { name: "Rouge Ember", hex: "#7E1F14" },
      { name: "Noir Encre", hex: "#0B0704" },
    ],
    details: [
      "Silhouette rectangle",
      "Acétate rouge dans la masse",
      "Finition dorée sur les charnières",
    ],
    notes: ["cuir patiné", "tabac clair", "poivre long", "cire noire"],
    scene: "Le velours tient la lumière plus longtemps que la peau.",
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
    chapter: "Chapitre II · La Chasse",
    place: "Un pavillon en lisière de forêt, en fin d’après-midi.",
    time: "Avant le dîner",
    silhouette: "Panto haute, ligne fermée, arête douce.",
    materie: "Acétate vert profond, rivets bronze en finition mate.",
    teintes: [
      { name: "Vert Sous-Bois", hex: "#1F3D24" },
      { name: "Mousse Cendrée", hex: "#3D6B3E" },
    ],
    details: [
      "Silhouette panto haute",
      "Acétate vert sous-bois",
      "Rivets bronze mat",
    ],
    notes: ["mousse", "cèdre", "cuir sellier", "encre végétale"],
    scene: "Bois humide, tweed sec. Rien de trop.",
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
    tagline: "Ovale, acétate cristal à charnières argentées.",
    chapter: "Chapitre III · La Chapelle",
    place: "Une chapelle de campagne, au petit matin.",
    time: "Tôt le matin",
    silhouette: "Ovale allongé, arête cristalline très fine.",
    materie: "Acétate cristal translucide, finition argentée.",
    teintes: [
      { name: "Cristal Bleu Ciel", hex: "#B6D2E3" },
      { name: "Blanc de Neige", hex: "#F4F8FB" },
    ],
    details: [
      "Silhouette ovale allongée",
      "Acétate cristal translucide",
      "Finition argentée sur les charnières",
    ],
    notes: ["iris", "eau claire", "amande fraîche", "papier de soie"],
    scene: "Un jour pâle, une lumière qui ne trahit personne.",
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
    tagline: "Panto, acétate émeraude à finition dorée.",
    chapter: "Chapitre IV · Le Dîner",
    place: "Un dîner dans une orangerie, sous les arbres.",
    time: "En soirée",
    silhouette: "Panto masculine, arête sculptée, branches longues.",
    materie: "Acétate émeraude, finition dorée sur la bordure.",
    teintes: [
      { name: "Vert Émeraude", hex: "#1F6B4A" },
      { name: "Violet Prune", hex: "#6A3F8E" },
    ],
    details: [
      "Silhouette panto masculine",
      "Acétate émeraude taillé main",
      "Finition dorée sur la bordure",
    ],
    notes: ["gardénia", "figue mûre", "violette poudrée", "vin ambré"],
    scene: "Les verres tintent, les bougies vacillent, quelqu’un rit doucement.",
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
  }) + " €";
