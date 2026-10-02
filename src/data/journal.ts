export type Cahier = {
  slug: "geste-juste" | "quatre-atmospheres" | "quatre-vingts-euros";
  numeral: "I" | "II" | "III";
  rubric: string;
  title: string;
  chapo: string;
  read: string;
  date: string;
  tone: "warm" | "ink" | "parchment";
  body: string[];
};

export const CAHIERS: Cahier[] = [
  {
    slug: "geste-juste",
    numeral: "I",
    rubric: "Savoir-faire",
    title: "Le geste juste, à trois centimètres du visage.",
    chapo:
      "Pourquoi le montage à la main reste la seule manière de tenir la ligne d’une monture.",
    read: "5 min",
    date: "Septembre",
    tone: "warm",
    body: [
      "Une paire de lunettes se porte à trois centimètres du visage. Ce détail suffit à changer la manière dont on choisit chaque courbe, chaque arête, chaque angle.",
      "Nous montons chaque pièce à la main. Cela veut dire décider, à chaque étape, quand s’arrêter. Une machine peut aller plus vite ; elle ne sait pas s’arrêter au bon moment.",
      "Le fini est le seul instant où l’on relit tout le reste. Une pièce ne quitte l’atelier qu’une fois qu’elle a ce silence — cette manière de tenir la lumière comme une peau.",
      "Rien de plus. C’est la seule chose qui sépare une pièce bien faite d’une pièce qui l’est à peu près.",
    ],
  },
  {
    slug: "quatre-atmospheres",
    numeral: "II",
    rubric: "Collection",
    title: "Rouge, Noir, Cristal, Émeraude.",
    chapo:
      "Quatre pièces, une même signature. Rectangle, Panto, Oval, Panto masculine : voici ce qui compose Roi.",
    read: "4 min",
    date: "Septembre",
    tone: "ink",
    body: [
      "Roi réunit quatre pièces. Rouge, Noir, Cristal, Émeraude. Une même main de dessin, quatre teintes d’acétate italien, quatre finitions métalliques.",
      "Roi Rouge est une silhouette rectangle, acétate rouge coloré dans la masse, charnières dorées. Pour les visages qui demandent une arête franche.",
      "Roi Noir est une panto haute, acétate vert sous-bois, rivets bronze mats. La monture la plus fermée de la collection.",
      "Roi Cristal est un ovale allongé, acétate cristal translucide, charnières argentées. La plus discrète, la plus lumineuse.",
      "Roi Émeraude est une panto masculine, acétate émeraude, finition dorée. Branches longues, arête sculptée. Pour les visages qui demandent de la hauteur.",
    ],
  },
  {
    slug: "quatre-vingts-euros",
    numeral: "III",
    rubric: "Design",
    title: "Pourquoi un prix juste change la pièce.",
    chapo:
      "78,90 € par pièce. Vente directe, acétate italien, montage à la main. Comment nous y arrivons.",
    read: "4 min",
    date: "Août",
    tone: "parchment",
    body: [
      "Le prix d’une monture de lunetterie n’est pas une fatalité. La majeure partie est captée par la distribution : trois vitrines et deux catalogues entre l’atelier et le visage.",
      "Nous vendons en direct. Pas de boutique physique, pas d’intermédiaire. Le prix reflète la pièce — l’acétate, le métal, le temps de montage — et rien d’autre.",
      "Nous travaillons avec un atelier partenaire à Paris. L’acétate vient d’Italie, chez des manufactures qui fournissent les grandes maisons depuis des générations. Nous choisissons les plaques nous-mêmes.",
      "Chaque pièce est contrôlée à chaque étape : coupe, fraisage, cintrage, polissage, rivetage, finition. Le fini est inspecté à l’œil nu, à la main, sous lumière rasante.",
      "Un prix juste n’est pas un prix bas. C’est un prix qui dit la vérité de la pièce — ce qu’elle contient, ce qu’elle a coûté à produire, ce qu’elle vaut à porter.",
    ],
  },
];

export const getCahier = (slug: string) =>
  CAHIERS.find((c) => c.slug === slug);
