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
    rubric: "Fabrication",
    title: "Montage à la main, à Paris.",
    chapo:
      "Chaque monture est montée et finie à la main dans notre atelier partenaire parisien.",
    read: "5 min",
    date: "Septembre",
    tone: "warm",
    body: [
      "Chaque monture Roi est fabriquée à Paris : coupe, fraisage, cintrage, polissage, rivetage et finition sont réalisés dans notre atelier partenaire.",
      "Le montage à la main permet un contrôle précis de chaque arête, de chaque charnière et de chaque surface. Ce qu’une machine ferait plus vite effacerait la ligne du dessin.",
      "Le fini est inspecté à l’œil nu sous lumière rasante. Une monture ne quitte l’atelier qu’une fois charnières, rivets et polissage parfaitement conformes.",
      "Chaque modèle reste réglable chez tout opticien : charnières et branches sont vissées de manière classique, sans collage.",
    ],
  },
  {
    slug: "quatre-atmospheres",
    numeral: "II",
    rubric: "Collection",
    title: "Rouge, Noir, Cristal, Émeraude.",
    chapo:
      "Rectangle, Panto, Ovale et Panto masculine : les quatre modèles de la collection Roi.",
    read: "4 min",
    date: "Septembre",
    tone: "ink",
    body: [
      "Roi réunit quatre modèles en acétate italien avec finitions métalliques.",
      "Roi Rouge — silhouette rectangle, acétate rouge coloré dans la masse, charnières dorées. Modèle statement, lignes franches.",
      "Roi Noir — panto haute, acétate vert sous-bois, rivets bronze mats. La monture la plus fermée de la collection.",
      "Roi Cristal — ovale allongé, acétate cristal translucide, charnières argentées. Le modèle le plus discret.",
      "Roi Émeraude — panto masculine, acétate émeraude, finition dorée. Branches longues, arête sculptée.",
    ],
  },
  {
    slug: "quatre-vingts-euros",
    numeral: "III",
    rubric: "Prix",
    title: "Vente directe : notre modèle de prix.",
    chapo:
      "78,90 € par modèle. Directement de l’atelier, sans intermédiaire.",
    read: "4 min",
    date: "Août",
    tone: "parchment",
    body: [
      "Dans la distribution classique, la plus grande partie du prix de vente est captée par les boutiques, grossistes et intermédiaires.",
      "Nous vendons exclusivement en ligne, directement depuis l’atelier parisien. Le prix reflète uniquement le produit : acétate, métal, temps de montage.",
      "L’acétate provient de manufactures italiennes qui fournissent les grandes maisons depuis des générations. Les plaques sont sélectionnées par nos soins.",
      "Chaque monture est contrôlée à chaque étape de la fabrication. Aucun stock intermédiaire, aucune série non vérifiée.",
      "Le résultat : une monture de qualité manufacturière à un prix qui reflète la production, pas la marge des intermédiaires.",
    ],
  },
];

export const getCahier = (slug: string) =>
  CAHIERS.find((c) => c.slug === slug);
