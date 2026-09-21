export type Cahier = {
  slug: "geste-juste" | "quatre-atmospheres" | "quatre-vingts-euros";
  numeral: "I" | "II" | "III";
  rubric: "Geste" | "Collection" | "Édition";
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
    rubric: "Geste",
    title: "Le geste juste, à trois centimètres du visage.",
    chapo:
      "Quelques principes que la maison se donne, gardés simples pour tenir dans le temps.",
    read: "5 min",
    date: "Septembre",
    tone: "warm",
    body: [
      "Une paire de lunettes se porte à trois centimètres du visage. Ce détail suffit à changer la manière dont on choisit chaque courbe, chaque arête, chaque angle.",
      "Nous montons chaque pièce à la main. Cela veut dire décider, à chaque étape, quand s’arrêter. Une machine peut aller plus vite ; elle ne sait pas s’arrêter au bon moment.",
      "Le fini est le seul instant où l’on relit tout le reste. Une pièce ne quitte l’atelier tant qu’elle n’a pas encore ce silence — cette manière de tenir la lumière comme une peau.",
      "Chaque exemplaire est numéroté à la main. Rien de plus. C’est la seule chose qui sépare votre paire de la nôtre.",
    ],
  },
  {
    slug: "quatre-atmospheres",
    numeral: "II",
    rubric: "Collection",
    title: "Quatre atmosphères, un seul regard.",
    chapo:
      "La première collection ne dessine pas quatre montures. Elle dessine quatre manières d’entrer dans une pièce.",
    read: "4 min",
    date: "Septembre",
    tone: "ink",
    body: [
      "Roi. Quatre atmosphères — le salon, la chasse, la chapelle, le dîner. Quatre manières d’entrer dans une pièce.",
      "Roi Rouge appartient au soir : un salon privé, la fin d’une soirée, la couleur qui retient la lumière un instant de plus que la peau.",
      "Roi Noir est un après-midi long : un pavillon en lisière de forêt, le tweed sec contre le bois humide. Rien de trop.",
      "Roi Cristal est un matin pâle, une chapelle de campagne : une lumière qui ne trahit personne.",
      "Roi Émeraude est le dîner sous les arbres, dans une orangerie. Les verres tintent, les bougies vacillent, quelqu’un rit doucement.",
      "Édition brève. Numérotée à la main. Vendue en ligne, directement.",
    ],
  },
  {
    slug: "quatre-vingts-euros",
    numeral: "III",
    rubric: "Édition",
    title: "Pourquoi une édition brève et un prix juste.",
    chapo:
      "78,90 € par pièce. Pas de vitrine, pas d’intermédiaire. Une position, pas une provocation.",
    read: "4 min",
    date: "Août",
    tone: "parchment",
    body: [
      "Nous vendons en direct. Une pièce ne doit pas passer par trois vitrines et deux catalogues avant d’arriver sur un visage.",
      "Nous voulons que Roi soit portée, pas rangée. Qu’elle appartienne à des visages, à des vies actives — pas à des vitrines.",
      "Le luxe, ici, ne se joue pas dans le prix. Il se joue dans la matière, dans le geste, dans la retenue. Quatre pièces la première année. Pas plus.",
      "Une maison se construit par ce qu’elle refuse d’ajouter au monde. Nous refusons trois choses : la vitrine inutile, l’intermédiaire, le supplément sans usage.",
      "Rien de trop, rien de trop peu. C’est tout.",
    ],
  },
];

export const getCahier = (slug: string) =>
  CAHIERS.find((c) => c.slug === slug);
