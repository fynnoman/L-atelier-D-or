export type Article = {
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  read: string;      // "6 min de lecture"
  chapter: string;   // like Cartier chapters
  hero: string;      // gradient descriptor: rouge | foret | cristal | emeraude | boutique
  body: string[];    // paragraphs
  date: string;      // display date
};

export const articles: Article[] = [
  {
    slug: "le-geste-juste",
    kicker: "Métier",
    title: "Le geste juste, à trois centimètres du visage",
    dek: "Comment naît une paire à L’Atelier d’Or : les mains, la lime, la lumière rasante.",
    read: "6 min",
    chapter: "Cahier I",
    hero: "boutique",
    date: "Septembre",
    body: [
      "Un cadre d’acétate, ce n’est pas un objet ; c’est une succession de décisions. Pour chaque paire de la collection, quatorze gestes distincts précèdent la mise en forme, et rien ne se joue sur la vitesse.",
      "Nous travaillons à la lumière rasante, celle qui trahit les défauts, jamais dans un néon plat. L’œil du monteur suit l’arête de la façade comme on suit la ligne d’un texte : lentement, en s’arrêtant à chaque virgule.",
      "La finition, elle, appartient au fondateur. Il polit, puis polit encore. Une paire quitte l’atelier lorsqu’elle a cessé d’accrocher la lumière comme un métal, et qu’elle la retient comme une peau.",
    ],
  },
  {
    slug: "quatre-atmospheres",
    kicker: "Collection",
    title: "Quatre atmosphères, un seul regard",
    dek: "La première collection de la maison, pièce par pièce.",
    read: "5 min",
    chapter: "Cahier II",
    hero: "emeraude",
    date: "Septembre",
    body: [
      "Nous n’avons pas dessiné quatre montures. Nous avons dessiné quatre heures, quatre lieux, quatre manières d’entrer dans une pièce. Le regard, ensuite, choisit celle qui lui convient.",
      "La Roi Rouge appartient à la nuit chaude, la Roi Noir à la campagne stoïque, la Roi Cristal aux matins clairs, la Roi Émeraude aux dîners longs. Elles ne se ressemblent pas ; elles se répondent.",
      "Chacune est produite en atelier, en séries brèves, numérotée à la main. Vous n’en verrez jamais mille sur les mêmes visages : c’est un choix, non une contrainte.",
    ],
  },
  {
    slug: "le-huit-cent-mille",
    kicker: "Prix",
    title: "Pourquoi quatre-vingts euros, et pas quatre-vingts mille",
    dek: "Une pièce de haute exigence peut coûter le prix d’une bonne bouteille. Explication.",
    read: "4 min",
    chapter: "Cahier III",
    hero: "cristal",
    date: "Août",
    body: [
      "La maison a fait un choix inhabituel : quatre-vingts euros la pièce, sans exception. C’est le prix d’un vin honorable ; ce n’est pas le prix qu’on associe à la finition d’un atelier.",
      "Ce choix est délibéré. Nous voulons que la Roi soit portée, pas rangée. Qu’elle appartienne à des professions, à des visages, à des vies actives — pas seulement à des vitrines.",
      "Le coût de fabrication est réel ; nous serrons la marge, nous vendons en direct, et nous refusons les intermédiaires. Le luxe, ici, n’est pas dans le prix : il est dans la matière, dans le geste, et dans la retenue.",
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
