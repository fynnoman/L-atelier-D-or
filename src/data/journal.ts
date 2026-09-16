export type Cahier = {
  slug: "geste-juste" | "quatre-atmospheres" | "quatre-vingts-euros";
  numeral: "I" | "II" | "III";
  rubric: "Métier" | "Collection" | "Prix";
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
    rubric: "Métier",
    title: "Le geste juste, à trois centimètres du visage",
    chapo:
      "Quatorze gestes par paire. Quatre personnes. Une seule règle : ce qui doit rester à la main y reste.",
    read: "6 min",
    date: "Septembre",
    tone: "warm",
    body: [
      "L'atelier occupe deux étages d'un immeuble du VIIIᵉ. Hautes fenêtres, lumière du nord, planchers de bois, rien qu'on ait rénové sans nécessité. On y entre comme on entre chez soi.",
      "La matière première nous arrive en plaques : acétate d'Italie, coulé chez Mazzucchelli à Castiglione Olona. C'est un acétate épais, dense, chargé de couleur — celui qu'on préfère parce qu'il tient la lime sans plaindre.",
      "Chaque paire passe entre quatorze gestes. Quatre personnes. Le tracé, la découpe, la pose de l'âme titane, le limage, le polissage à la peau de chamois, la vérification sous lumière rasante — puis le finissage.",
      "Le finissage, c'est moi. Une paire ne quitte l'atelier tant qu'elle accroche encore la lumière comme un métal. On veut qu'elle la retienne comme une peau.",
      "Nous refusons d'automatiser ce qui définit la maison. Les gestes ne se délèguent pas. Une machine peut poncer plus vite ; elle ne peut pas décider quand s'arrêter.",
      "Chaque exemplaire est numéroté à la main, à l'intérieur de la branche gauche, à l'encre bleue. C'est la seule chose qui distingue votre paire de la nôtre.",
    ],
  },
  {
    slug: "quatre-atmospheres",
    numeral: "II",
    rubric: "Collection",
    title: "Quatre atmosphères, un seul regard",
    chapo:
      "La première collection ne dessine pas des montures. Elle dessine des heures, des lieux, des rôles.",
    read: "5 min",
    date: "Septembre",
    tone: "ink",
    body: [
      "Roi. Quatre atmosphères. Le Salon, La Chasse, La Chapelle, Le Dîner. Quatre manières d'entrer dans une pièce.",
      "Roi Rouge est du soir : 22 h 10, un cabinet privé sous les toits, le velours qui retient la lumière un instant de plus que la peau. L'acétate est taillé dans la masse, la charnière or est vissée, le filet or court en bout de branche.",
      "Roi Noir est un après-midi long, cinq heures avant le dîner. Une panto haute, vert forêt mat, l'âme titane, les rivets bronze patiné. Le tweed sec, le bois humide, et rien de trop.",
      "Roi Cristal est un matin pâle, 9 h 45. Une chapelle de campagne. L'ovale allongé, l'acétate cristal, les vis argent : une lumière qui ne trahit personne.",
      "Roi Émeraude est le dîner sous les arbres, dans une orangerie. Une panto masculine, l'émeraude coupée main, le filet or 18 carats sur l'arête supérieure, la charnière prune. Les verres teintent, les bougies vacillent.",
      "Chaque pièce est vendue quatre-vingts euros. Chacune est numérotée. Aucune n'est exposée en vitrine.",
    ],
  },
  {
    slug: "quatre-vingts-euros",
    numeral: "III",
    rubric: "Prix",
    title: "Pourquoi quatre-vingts euros, et pas quatre-vingts mille",
    chapo:
      "Le prix d'une bonne bouteille, pour une paire faite main. Ce n'est pas une provocation : c'est un modèle.",
    read: "4 min",
    date: "Août",
    tone: "parchment",
    body: [
      "Quatre-vingts euros la pièce. Le prix d'un vin honorable. C'est exactement ce que nous voulons.",
      "Nous serrons la marge. Nous vendons en direct. Nous refusons les intermédiaires. Une paire n'a pas à traverser trois vitrines et deux catalogues avant d'arriver sur un visage.",
      "Nous voulons que la Roi soit portée, pas rangée. Qu'elle appartienne à des professions, à des visages, à des vies actives — pas seulement à des vitrines.",
      "Le luxe, ici, n'est pas dans le prix. Il est dans la matière, dans le geste, et dans la retenue. Quatre pièces la première année. Pas plus.",
      "Une maison se construit par ce qu'elle refuse d'ajouter au monde. Nous refusons trois choses : le plastique, l'intermédiaire, le supplément inutile.",
      "Rien de trop, rien de moins. Le prix juste. Le geste juste.",
    ],
  },
];

export const getCahier = (slug: string) =>
  CAHIERS.find((c) => c.slug === slug);
