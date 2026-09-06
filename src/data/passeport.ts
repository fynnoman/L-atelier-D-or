export type ProvenanceStep = {
  date: string;
  atelier: string;
  handler: string;
  action: string;
  detail: string;
  numeral: string;
};

export type Passeport = {
  reference: string;
  productSlug: string;
  productName: string;
  edition: string;
  editionNumber: number;
  serial: string;
  materials: { label: string; value: string }[];
  hallmarks: { label: string; value: string }[];
  currentOwner: string;
  handoverDate: string;
  timeline: ProvenanceStep[];
};

export const passeports: Passeport[] = [
  {
    reference: "SOL-042",
    productSlug: "solene-01",
    productName: "Solène 01 · Or Pâle",
    edition: "Édition de 120",
    editionNumber: 42,
    serial: "SOL-01-042 / MMXXV",
    materials: [
      { label: "Titan Béta", value: "0,9 mm · kalt gebogen" },
      { label: "Vergoldung", value: "18 Karat · 6 μm · galvanisch" },
      { label: "Naturkautschuk", value: "Nasenpads · Sri Lanka" },
    ],
    hallmarks: [
      { label: "Poinçon Or", value: "750" },
      { label: "Numéro", value: "N° 042 / 120" },
      { label: "Année", value: "MMXXV" },
    ],
    currentOwner: "Sous scellé  attribution en cours",
    handoverDate: "2026-05-24",
    timeline: [
      {
        date: "2026-01-08",
        atelier: "Jura · Le Sentier",
        handler: "Camille Aubry",
        action: "Draht bezogen",
        detail:
          "Titan-Draht 0,9 mm bezogen von Fournisseur Jura, Charge 2025-Q4. Auf 145 mm zugeschnitten.",
        numeral: "I",
      },
      {
        date: "2026-01-15",
        atelier: "Jura · Le Sentier",
        handler: "Camille Aubry",
        action: "Kaltbiegen",
        detail:
          "Silhouette in drei Zügen kalt gebogen. Zwei Prototypen verworfen. Dritter Zug freigegeben.",
        numeral: "II",
      },
      {
        date: "2026-01-22",
        atelier: "Jura · Le Sentier",
        handler: "Camille Aubry",
        action: "Härten",
        detail:
          "Dreifach gehärtet in Vakuum-Ofen bei 420 °C. Vermessen auf 0,03 mm Toleranz.",
        numeral: "III",
      },
      {
        date: "2026-02-05",
        atelier: "Berlin · Charlottenburg",
        handler: "Élise Mercier",
        action: "Vergoldung 18 Karat",
        detail:
          "Drei Schichten galvanisch. Zwischen jeder Schicht 12 Stunden Ruhezeit. Handpolitur mit Ziegenhaar.",
        numeral: "IV",
      },
      {
        date: "2026-02-19",
        atelier: "Jura · Le Sentier",
        handler: "Rémi Kessler",
        action: "Poinçon N° 042",
        detail:
          "Stahlstempel geführt. Ein Schlag. Punze N° 042 auf der Bügelinnenseite links. Freigabe Signature.",
        numeral: "V",
      },
      {
        date: "2026-03-11",
        atelier: "Paris · Rue de la Paix",
        handler: "Léa Marchand",
        action: "Anprobe",
        detail:
          "Klientin M.K. Anprobe im Salon Paris. Sehstärke aufgenommen, Nasenpad angepasst, Bügel um 0,5 mm gerichtet.",
        numeral: "VI",
      },
      {
        date: "2026-05-24",
        atelier: "Paris · Rue de la Paix",
        handler: "Léa Marchand",
        action: "Signature · Übergabe",
        detail:
          "Fassung im Coffret Signature übergeben. Rechnung, Pass und Réparation à vie ausgehändigt.",
        numeral: "VII",
      },
    ],
  },
  {
    reference: "MAL-018",
    productSlug: "malbec-02",
    productName: "Malbec 02 · Havane Profond",
    edition: "Édition de 80",
    editionNumber: 18,
    serial: "MAL-02-018 / MMXXV",
    materials: [
      { label: "Acetat", value: "Mazzucchelli · 6 Wochen gereift" },
      { label: "Titan-Kern", value: "Béta · 0,8 mm" },
      { label: "Gläser", value: "Zeiss Mineral · Antireflex" },
    ],
    hallmarks: [
      { label: "Poinçon", value: "Signé à la main" },
      { label: "Numéro", value: "N° 018 / 080" },
      { label: "Année", value: "MMXXV" },
    ],
    currentOwner: "Cabinet Privé  en attente",
    handoverDate: "2026-06-08",
    timeline: [
      {
        date: "2025-12-02",
        atelier: "Castiglione Olona · Italie",
        handler: "Fournisseur Mazzucchelli",
        action: "Acetat bezogen",
        detail:
          "Acetat-Block Havane Profond, Charge 2025-11. Sechs Wochen Reifezeit an der Nordseite der Werkstatt.",
        numeral: "I",
      },
      {
        date: "2026-01-14",
        atelier: "Jura · Le Sentier",
        handler: "Julien Fauré",
        action: "Grobschliff",
        detail:
          "Silhouette aus einem Block gefräst. Titan-Kern manuell eingesetzt. Kanten mit 240er Papier gebrochen.",
        numeral: "II",
      },
      {
        date: "2026-01-27",
        atelier: "Jura · Le Sentier",
        handler: "Julien Fauré",
        action: "Sieben Tage Politur",
        detail:
          "Politurablauf Jour I bis Jour VII. Baumwollrad, Ziegenhaar, Feinpaste, Lammleder. Handpolitur am Tag VII.",
        numeral: "III",
      },
      {
        date: "2026-02-24",
        atelier: "Jura · Le Sentier",
        handler: "Rémi Kessler",
        action: "Poinçon N° 018",
        detail: "Punze N° 018 auf der Bügelinnenseite links. Freigabe Signature.",
        numeral: "IV",
      },
      {
        date: "2026-04-18",
        atelier: "Berlin · Charlottenburg",
        handler: "Antoine Devaux",
        action: "Anprobe",
        detail:
          "Klient P.O. Anprobe im Salon Berlin. Sehstärke aufgenommen, Antireflex-Coating bestätigt.",
        numeral: "V",
      },
    ],
  },
];

export function getPasseport(reference: string) {
  return passeports.find(
    (p) => p.reference.toLowerCase() === reference.toLowerCase(),
  );
}
