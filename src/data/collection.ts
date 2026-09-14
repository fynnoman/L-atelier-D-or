export type Mood = "rouge" | "foret" | "cristal" | "emeraude";

export type Piece = {
  slug: string;
  name: string;
  numeral: string;         // I, II, III, IV
  tagline: string;         // short French line
  price: number;           // in EUR
  mood: Mood;
  silhouette: string;      // short shape description
  chapter: string;         // atmosphere label
  place: string;           // where it belongs
  hour: string;            // when it lives
  matiere: string[];       // materials
  teinte: { label: string; hex: string }[]; // frame colorway (max 2)
  scene: {
    kicker: string;        // eyebrow line
    title: string;         // scene title (poetic)
    body: string[];        // 1-2 short paragraphs of scene copy
    detail: string;        // small caption for the frame diagram
  };
  notes: string[];         // 3-4 sensory notes
};

export const collection: Piece[] = [
  {
    slug: "roi-rouge",
    name: "Roi Rouge",
    numeral: "I",
    tagline: "Une braise sous le velours.",
    price: 80,
    mood: "rouge",
    silhouette: "Rectangle adouci, angles taillés à la main",
    chapter: "Chapitre I — Le Salon",
    place: "Un cabinet privé, quelque part sous les toits du VIIIᵉ",
    hour: "Vingt-deux heures dix",
    matiere: ["Acétate d’Italie", "Cœur titane", "Charnières à visser or"],
    teinte: [
      { label: "Rouge Ember", hex: "#7e1f14" },
      { label: "Noir Encre", hex: "#0b0704" },
    ],
    scene: {
      kicker: "Atmosphère",
      title: "Le velours retient la lumière plus longtemps que la peau.",
      body: [
        "Cognac dans le cristal, tapis rouge sombre, un feu qui ne dit rien. La Roi Rouge se pose ; on la remarque avant de la voir.",
        "Elle laisse au visage sa dignité et prête au regard une profondeur qui n’est pas la sienne. C’est là son luxe : discret, mais souverain.",
      ],
      detail: "Front bombé de 48 mm, plaques rouges taillées dans la masse, filet or au bout des branches.",
    },
    notes: ["cuir patiné", "tabac blond", "poivre long", "cire noire"],
  },
  {
    slug: "roi-noir",
    name: "Roi Noir",
    numeral: "II",
    tagline: "L’ombre du sous-bois, tenue au millimètre.",
    price: 80,
    mood: "foret",
    silhouette: "Panto haute, ligne fermée, arête douce",
    chapter: "Chapitre II — La Chasse",
    place: "Un pavillon de chasse rénové, en Sologne",
    hour: "Cinq heures avant le dîner",
    matiere: ["Acétate mat forêt", "Âme titane", "Rivets bronze patiné"],
    teinte: [
      { label: "Vert Sous-Bois", hex: "#1f3d24" },
      { label: "Mousse Cendrée", hex: "#3d6b3e" },
    ],
    scene: {
      kicker: "Atmosphère",
      title: "Le bois humide, le tweed sec, et rien de trop.",
      body: [
        "Les fenêtres donnent sur des fougères que personne ne coupe. Sur la table, un livre ouvert, un verre d’eau, une paire de gants.",
        "La Roi Noir ne cherche pas la ville. Elle a la couleur des heures lentes et l’élégance retenue d’un vêtement bien coupé.",
      ],
      detail: "Panto de 49 mm, embouts bronze poli main, plaquettes titane monobloc.",
    },
    notes: ["mousse", "cèdre du Liban", "cuir de sellerie", "encre végétale"],
  },
  {
    slug: "roi-cristal",
    name: "Roi Cristal",
    numeral: "III",
    tagline: "Le clair de la porcelaine, la douceur du satin.",
    price: 80,
    mood: "cristal",
    silhouette: "Ovale allongé, arête cristalline, très fine",
    chapter: "Chapitre III — La Chapelle",
    place: "Une chapelle de campagne, tôt le matin",
    hour: "Dix heures moins le quart",
    matiere: ["Acétate cristal", "Vis argent poli", "Plaquettes silicone laiteux"],
    teinte: [
      { label: "Cristal Bleu Ciel", hex: "#b6d2e3" },
      { label: "Blanc de Neige", hex: "#f4f8fb" },
    ],
    scene: {
      kicker: "Atmosphère",
      title: "Un jour pâle, une lumière qui ne trahit personne.",
      body: [
        "Le sol de marbre est frais, l’air sent le lin repassé, une main sur la manche. La Roi Cristal accompagne l’instant sans le peser.",
        "Elle affine, adoucit, laisse voir les yeux. C’est la paire des grands jours où l’on ne parle pas trop fort.",
      ],
      detail: "Ovale de 51 mm, épaisseur 2,4 mm, charnière argent poli main.",
    },
    notes: ["iris", "eau claire", "amande fraîche", "papier de soie"],
  },
  {
    slug: "roi-emeraude",
    name: "Roi Émeraude",
    numeral: "IV",
    tagline: "Un jardin après la nuit tombée.",
    price: 80,
    mood: "emeraude",
    silhouette: "Panto masculin, arête sculptée, branches longues",
    chapter: "Chapitre IV — Le Dîner",
    place: "Un dîner dans une orangerie, sous les arbres",
    hour: "Vingt-et-une heures trente",
    matiere: ["Acétate émeraude", "Filet or 18 carats", "Charnières prune"],
    teinte: [
      { label: "Vert Émeraude", hex: "#1f6b4a" },
      { label: "Violet Prune", hex: "#6a3f8e" },
    ],
    scene: {
      kicker: "Atmosphère",
      title: "Les verres teintent, les bougies vacillent, quelqu’un rit bas.",
      body: [
        "Les nappes sont longues, les chaises se touchent presque, on parle de Rome et de rien à la fois. La Roi Émeraude est faite pour ces tables-là.",
        "Elle porte deux couleurs qui ne devraient pas s’aimer, et pourtant. Le vert profond retient la lumière ; le prune la relance. C’est de la théâtre discret.",
      ],
      detail: "Panto de 50 mm, façade vert taillée main, filet or 18 ct sur l’arête supérieure.",
    },
    notes: ["gardénia", "figue mûre", "violette poudrée", "vin ambré"],
  },
];

export const bySlug = (slug: string) => collection.find((p) => p.slug === slug);
