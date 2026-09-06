export type JournalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "quote"; text: string; attribution: string }
  | { kind: "figure"; image: string; caption: string }
  | { kind: "section"; title: string; italic?: string }
  | { kind: "hallmark"; label: string; numeral: string; note: string };

export type JournalEntry = {
  slug: string;
  category: "Atelier" | "Matière" | "Portrait" | "Signature";
  title: string;
  italic: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  location: string;
  reading: string;
  author: string;
  blocks: JournalBlock[];
};

const solene =
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=85";
const jura =
  "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=2400&q=85";
const gold =
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=2400&q=85";
const paris =
  "https://images.unsplash.com/photo-1509057199575-6c3719aec627?auto=format&fit=crop&w=2400&q=85";

export const journal: JournalEntry[] = [
  {
    slug: "sept-jours-de-polissage",
    category: "Atelier",
    title: "Sept jours de polissage.",
    italic: "Warum die Malbec sieben Tage in der Hand liegt.",
    excerpt:
      "Julien Fauré poliert die Malbec 02 nicht schneller als seine Grossmutter. Ein Bericht aus der Werkstatt in Le Sentier.",
    cover: solene,
    coverAlt: "Politur einer Acetat-Fassung im Atelier",
    date: "2026-04-12",
    location: "Le Sentier · Jura",
    reading: "6 min",
    author: "Léa Marchand",
    blocks: [
      {
        kind: "paragraph",
        text: "Der Mazzucchelli-Block trocknet sechs Wochen an der Nordseite der Werkstatt. Julien misst mit dem Daumen, ob die Kante scharf genug ist, ohne zu splittern. Sein Grossvater hat auf demselben Werkbank vor sechzig Jahren dieselbe Silhouette poliert.",
      },
      {
        kind: "section",
        title: "Der Ablauf",
        italic: "Tag für Tag, Werkzeug für Werkzeug.",
      },
      {
        kind: "hallmark",
        label: "Jour I",
        numeral: "I",
        note: "Grobschliff mit 240er Papier. Kanten brechen, Silhouette fixieren.",
      },
      {
        kind: "hallmark",
        label: "Jour III",
        numeral: "III",
        note: "Feinschliff, Übergang Acetat auf Titan-Kern. Julien misst mit Messuhr auf 0,05 mm.",
      },
      {
        kind: "hallmark",
        label: "Jour V",
        numeral: "V",
        note: "Baumwollrad, Ziegenhaar, Feinpaste. Der Glanz beginnt.",
      },
      {
        kind: "hallmark",
        label: "Jour VII",
        numeral: "VII",
        note: "Handpolitur mit weichem Lammleder. Ohne Paste. Nur Wärme.",
      },
      {
        kind: "quote",
        text: "Die Politur endet nicht, wenn das Acetat glänzt. Sie endet, wenn es sich warm anfühlt.",
        attribution: "Julien Fauré, Cheffe d'Atelier · Acétate",
      },
      {
        kind: "figure",
        image: jura,
        caption: "Werkstatt an der Route du Bugnon, Frühjahr 2026.",
      },
      {
        kind: "paragraph",
        text: "Wer die Malbec ansieht, sieht die Silhouette. Wer sie trägt, spürt die Politur. Der Unterschied ist die Zeit, die kein Roboter reproduziert.",
      },
    ],
  },
  {
    slug: "or-dix-huit-carats",
    category: "Matière",
    title: "Or, dix-huit carats.",
    italic: "Warum wir bei 18 Karat bleiben, wenn 24 Karat glänzender wäre.",
    excerpt:
      "Élise Mercier über die Wahl des Goldgehalts, die Politur unter dem Mikroskop und die Grenzen der Vergoldung.",
    cover: gold,
    coverAlt: "18 Karat Vergoldung unter dem Mikroskop",
    date: "2026-03-01",
    location: "Berlin · Charlottenburg",
    reading: "8 min",
    author: "Élise Mercier",
    blocks: [
      {
        kind: "paragraph",
        text: "24 Karat glänzt heller. 22 Karat trägt sich seidiger. 18 Karat aber überlebt zehn Jahre am Bügel, ohne dass Sie es merken. Genau deshalb bleiben wir dabei.",
      },
      {
        kind: "section",
        title: "Härte gegen Glanz",
        italic: "Der Kompromiss, den wir nicht eingehen wollten.",
      },
      {
        kind: "paragraph",
        text: "Reines Gold ist weich wie ein Kaugummi. Ein 24-Karat-Bügel würde nach drei Wochen an der Aussentemperatur biegen. Also legieren wir. Kupfer für den warmen Ton, Silber für die Härte, ein Hauch Palladium für die Farbe. 18 Karat ist der Punkt, an dem Härte und Glanz sich die Hand geben.",
      },
      {
        kind: "quote",
        text: "Ich vergolde nicht die Fassung, ich vergolde die zehn Jahre, die sie leben wird.",
        attribution: "Élise Mercier, Vergoldung · 18 Karat",
      },
      {
        kind: "hallmark",
        label: "Poinçon",
        numeral: "750",
        note: "Der Stempel für 18 Karat, in der Bügelinnenseite. Ohne diese Punze verlässt keine Fassung das Haus.",
      },
      {
        kind: "figure",
        image: gold,
        caption: "Poinçon 750, Bügelinnenseite Orphée 03.",
      },
      {
        kind: "paragraph",
        text: "Die Vergoldung wird galvanisch aufgetragen, drei Schichten, insgesamt sechs Mikrometer. Danach folgt die Handpolitur. Kein Schleifen mehr, nur noch Wischen mit Baumwoll-Watte und Alkohol.",
      },
    ],
  },
  {
    slug: "remi-kessler-le-fondateur",
    category: "Portrait",
    title: "Rémi Kessler, le fondateur.",
    italic: "Ein Werkstattbesuch nach 54 Jahren am selben Werkbank.",
    excerpt:
      "Der Gründer selten fotografiert, nie ohne seine Zeiss-Lupe erzählt vom ersten Titan-Draht, den er 1972 in der Hand hielt.",
    cover: paris,
    coverAlt: "Rémi Kessler in seiner Werkstatt",
    date: "2026-01-18",
    location: "Le Sentier · Jura",
    reading: "12 min",
    author: "Léa Marchand",
    blocks: [
      {
        kind: "paragraph",
        text: "Rémi Kessler hat 1972 zwei Möglichkeiten gehabt: den Familienbetrieb für Präzisionsuhren übernehmen oder eine Werkstatt für Brillen eröffnen. Er hat sich für die Brillen entschieden, weil, wie er sagt, «die Uhr am Handgelenk bleibt, die Brille sieht dich an».",
      },
      {
        kind: "section",
        title: "Die erste Fassung",
        italic: "Ein Draht, drei Nächte, kein Namen.",
      },
      {
        kind: "paragraph",
        text: "Die erste Fassung, die er verkauft hat, war ein 0,9-mm-Titan-Draht, kalt gebogen, dreifach gehärtet. Sie hatte keinen Namen. Der Käufer war ein Uhrmacher aus Genf, der sie 2019 der Werkstatt zurückgab. Sie liegt heute in einer Glasvitrine am Eingang.",
      },
      {
        kind: "quote",
        text: "Ich baue keine Brillen. Ich baue Objekte, die den Blick tragen.",
        attribution: "Rémi Kessler, Maître · Fondateur",
      },
      {
        kind: "figure",
        image: paris,
        caption: "Rémi Kessler am Werkbank, 2026.",
      },
      {
        kind: "hallmark",
        label: "MMXXV",
        numeral: "MMXXV",
        note: "Das Jahr, in dem der Salon Privé in der Rue de la Paix eröffnet hat. Camille Aubry führt die Werkstatt.",
      },
    ],
  },
  {
    slug: "signature-au-poincon",
    category: "Signature",
    title: "Signature au poinçon.",
    italic: "Warum jede Fassung eine Nummer trägt und was diese Nummer bedeutet.",
    excerpt:
      "Der Punze auf der Bügelinnenseite ist die Handschrift des Hauses. Rémi Kessler erklärt, warum kein digitaler Code sie ersetzen kann.",
    cover: solene,
    coverAlt: "Punze N° 042 auf einer Solène 01",
    date: "2025-11-04",
    location: "Le Sentier · Jura",
    reading: "5 min",
    author: "Rémi Kessler",
    blocks: [
      {
        kind: "paragraph",
        text: "Jede Fassung, die die Werkstatt verlässt, trägt eine Nummer. N° 001 bis N° 120 für die Solène. N° 001 bis N° 060 für die Orphée. Diese Nummer wird nicht graviert, sondern gepunzt: ein Stahlstempel, ein einziger Schlag, eine unwiderrufliche Handschrift.",
      },
      {
        kind: "quote",
        text: "Ein Stempel, der falsch sitzt, ist das Ende dieser Fassung. Wir haben schon Fassungen eingeschmolzen, weil die Punze schief war.",
        attribution: "Rémi Kessler",
      },
      {
        kind: "hallmark",
        label: "Poinçon",
        numeral: "N°",
        note: "Der Stempel wird von Hand geführt. Nur Rémi und Camille dürfen ihn setzen.",
      },
      {
        kind: "paragraph",
        text: "Zu jeder Nummer gehört ein digitaler Pass. Er dokumentiert die Rohmaterialien, die Politurtage, die Vergoldung, die Anprobe und den Verkauf. Er wird an den Käufer übergeben und ist Teil der Fassung wie der Bügel.",
      },
    ],
  },
];

export function getJournal(slug: string) {
  return journal.find((e) => e.slug === slug);
}
