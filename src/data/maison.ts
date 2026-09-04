// Single source of truth for maison-level content: timeline, artisans,
// rules, references. Product data stays in ./products.ts.

export const maison = {
  name: "L'Atelier d'Or",
  short: "L'Atelier d'Or",
  foundedYear: 1972,
  founder: "Rémi Kessler",
  legalForm: "L'Atelier d'Or SA",
  ateliers: ["Paris", "Berlin", "Jura"],
  claim: "Objekte aus Licht und Titan. Seit 1972.",
  emailPrimary: "atelier@latelier-dor.example",
  emailPress: "presse@latelier-dor.example",
  concierge: {
    name: "Léa Marchand",
    role: "Concierge · Réservation",
    email: "atelier@latelier-dor.example",
    phone: "+33 1 44 71 12 40",
  },
  address: {
    street: "12 rue de la Paix",
    zip: "75002",
    city: "Paris",
    country: "France",
  },
};

export const timeline = [
  {
    year: 1972,
    title: "Gründung im Jura",
    body: "Rémi Kessler eröffnet eine kleine Werkstatt am Waldrand von Le Sentier. Erste Titan-Drähte werden von Hand gebogen.",
  },
  {
    year: 1998,
    title: "Manufaktur Bugnon",
    body: "Umzug in die heutige Manufaktur an der Route du Bugnon. Der Betrieb wächst um Politur, Vergoldung und Sehstärke-Anpassung.",
  },
  {
    year: 2014,
    title: "Zweite Generation",
    body: "Camille Aubry übernimmt die Cheffe d'Atelier. Erste limitierte Édition mit 18 Karat Vergoldung entsteht.",
  },
  {
    year: 2019,
    title: "Berliner Werkstatt",
    body: "Zweite Werkstatt in Berlin für Anproben, mobile Fittings und die Betreuung der DACH-Klientel.",
  },
  {
    year: 2025,
    title: "Salon Privé Paris",
    body: "Salon Privé in der Rue de la Paix. Vier Fassungen pro Jahr, jede in kleiner Serie, alle im Haus signiert.",
  },
];

export const artisans = [
  {
    name: "Rémi Kessler",
    role: "Maître · Fondateur",
    email: "remi@latelier-dor.example",
    note: "Führt die Werkstatt in dritter Generation. Verantwortlich für Silhouette, Prototypen und Signatur jeder Serie.",
    since: "1972",
  },
  {
    name: "Camille Aubry",
    role: "Cheffe d'Atelier · Titan",
    note: "Zwölf Jahre Erfahrung im Kaltbiegen von Titan-Drähten. Härtet, satiniert, poliert von Hand.",
    since: "2012",
  },
  {
    name: "Julien Fauré",
    role: "Acétate · Polissage",
    note: "Wählt die Mazzucchelli-Blöcke, wartet sechs Wochen Reifezeit, poliert an sieben Tagen.",
    since: "2016",
  },
  {
    name: "Élise Mercier",
    role: "Vergoldung · 18 Karat",
    note: "Zuständig für die Vergoldung mit 18 Karat und die Perlmutt-Details am Nasensteg der Orphée.",
    since: "2019",
  },
  {
    name: "Antoine Devaux",
    role: "Optique · Berlin",
    note: "Anpassung, Sehstärke, Anprobe. Betreut die Berliner Werkstatt und die mobilen Fittings.",
    since: "2021",
  },
  {
    name: "Léa Marchand",
    role: "Concierge · Réservation",
    email: "atelier@latelier-dor.example",
    note: "Erste Ansprechpartnerin. Koordiniert Anproben in Paris, Berlin und im Jura.",
    since: "2023",
  },
  {
    name: "Sabrina Bissig",
    role: "Datenschutz · Verwaltung",
    note: "Betreut Verträge, Datenschutz und die Anschriften der Klientel.",
  },
];

export const references = [
  { name: "Vogue France", sector: "Presse" },
  { name: "Le Monde M Magazine", sector: "Presse" },
  { name: "Monocle", sector: "Presse" },
  { name: "AD Germany", sector: "Presse" },
  { name: "Concept Store 10 Corso Como", sector: "Stockist · Milan" },
  { name: "Andreas Murkudis", sector: "Stockist · Berlin" },
  { name: "The Broken Arm", sector: "Stockist · Paris" },
  { name: "Dover Street Market", sector: "Stockist · London" },
];

export const workshopMarks = [
  { label: "Handgefertigt" },
  { label: "Titan Béta" },
  { label: "MMXXV", italic: true },
  { label: "18 Karat" },
  { label: "Limitiert" },
  { label: "Paris · Berlin · Jura", italic: true },
  { label: "Made in Europe" },
  { label: "Signé à la main", italic: true },
];
