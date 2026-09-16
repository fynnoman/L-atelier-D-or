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
  priceEuro: 80;
};

export const PIECES: Piece[] = [
  {
    slug: "roi-rouge",
    index: 1,
    numeral: "I",
    name: "Roi Rouge",
    tagline: "Une braise sous le velours.",
    chapter: "Chapitre I — Le Salon",
    place: "Un cabinet privé, quelque part sous les toits du VIIIᵉ",
    time: "22 h 10",
    silhouette: "Rectangle doucement arrondi, angles taillés main.",
    materie: "Acétate d'Italie · âme titane · charnières or vissées.",
    teintes: [
      { name: "Rouge Ember", hex: "#7E1F14" },
      { name: "Noir Encre", hex: "#0B0704" },
    ],
    details: [
      "Front 48 mm",
      "Plaques rouges taillées dans la masse",
      "Filet or en bout de branche",
    ],
    notes: ["cuir patiné", "tabac blond", "poivre long", "cire noire"],
    scene: "Le velours retient la lumière plus longtemps que la peau.",
    mood: "rouge",
    image: "/models/malbec-02.png",
    priceEuro: 80,
  },
  {
    slug: "roi-noir",
    index: 2,
    numeral: "II",
    name: "Roi Noir",
    tagline: "L'ombre du sous-bois, tenue au millimètre.",
    chapter: "Chapitre II — La Chasse",
    place: "Un pavillon de chasse rénové, en Sologne",
    time: "Cinq heures avant le dîner",
    silhouette: "Panto haute, ligne fermée, arête douce.",
    materie: "Acétate vert forêt mat · âme titane · rivets bronze patiné.",
    teintes: [
      { name: "Vert Sous-Bois", hex: "#1F3D24" },
      { name: "Mousse Cendrée", hex: "#3D6B3E" },
    ],
    details: [
      "Panto 49 mm",
      "Embouts bronze polis main",
      "Plaquettes titane d'un seul tenant",
    ],
    notes: ["mousse", "cèdre du Liban", "cuir de sellerie", "encre végétale"],
    scene: "Le bois humide, le tweed sec, et rien de trop.",
    mood: "foret",
    image: "/models/orphee-03.png",
    priceEuro: 80,
  },
  {
    slug: "roi-cristal",
    index: 3,
    numeral: "III",
    name: "Roi Cristal",
    tagline: "Le clair de la porcelaine, la douceur du satin.",
    chapter: "Chapitre III — La Chapelle",
    place: "Une chapelle de campagne, tôt le matin",
    time: "9 h 45",
    silhouette: "Ovale allongé, arête cristalline très fine.",
    materie: "Acétate cristal · vis argent poli · plaquettes silicone laiteux.",
    teintes: [
      { name: "Cristal Bleu Ciel", hex: "#B6D2E3" },
      { name: "Blanc de Neige", hex: "#F4F8FB" },
    ],
    details: [
      "Ovale 51 mm",
      "Épaisseur 2,4 mm",
      "Charnières argent polies main",
    ],
    notes: ["iris", "eau claire", "amande fraîche", "papier de soie"],
    scene: "Un jour pâle, une lumière qui ne trahit personne.",
    mood: "cristal",
    image: "/models/solene-01.png",
    priceEuro: 80,
  },
  {
    slug: "roi-emeraude",
    index: 4,
    numeral: "IV",
    name: "Roi Émeraude",
    tagline: "Un jardin après la nuit tombée.",
    chapter: "Chapitre IV — Le Dîner",
    place: "Un dîner dans une orangerie, sous les arbres",
    time: "21 h 30",
    silhouette: "Panto masculin, arête sculptée, longues branches.",
    materie: "Acétate émeraude · filet or 18 carats · charnières prune.",
    teintes: [
      { name: "Vert Émeraude", hex: "#1F6B4A" },
      { name: "Violet Prune", hex: "#6A3F8E" },
    ],
    details: [
      "Panto 50 mm",
      "Front vert taillé main",
      "Filet or 18 ct sur l'arête supérieure",
    ],
    notes: ["gardénia", "figue mûre", "violette poudrée", "vin ambré"],
    scene: "Les verres teintent, les bougies vacillent, quelqu'un rit bas.",
    mood: "emeraude",
    image: "/models/valois-04.png",
    priceEuro: 80,
  },
];

export const getPiece = (slug: string) =>
  PIECES.find((p) => p.slug === slug);
