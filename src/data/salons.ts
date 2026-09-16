export type Salon = {
  city: "Paris" | "Berlin" | "Londres";
  address: string;
  district: string;
  hosting: string;
  days: string;
  gmt: string;
};

export const SALONS: Salon[] = [
  {
    city: "Paris",
    address: "14, rue de l’Éclipse",
    district: "VIIIᵉ arrondissement",
    hosting: "Salon privé des Ateliers",
    days: "Mardi — Samedi",
    gmt: "GMT +1",
  },
  {
    city: "Berlin",
    address: "Kurfürstendamm 218",
    district: "Charlottenburg",
    hosting: "Invité d'un opticien partenaire",
    days: "Mercredi & Vendredi",
    gmt: "GMT +1",
  },
  {
    city: "Londres",
    address: "Mount Street, Mayfair",
    district: "W1K",
    hosting: "Invité d'un salon privé de Mayfair",
    days: "Jeudi & Samedi",
    gmt: "GMT",
  },
];
