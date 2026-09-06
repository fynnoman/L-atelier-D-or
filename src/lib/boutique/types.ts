export type Coloris = {
  label: string;
  hex: string;
};

export type Engraving = {
  initials: string;
  placement: "temple-left" | "temple-right" | "inside-bridge";
  finish: "or-mat" | "or-poli";
};

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  edition: string;
  editionNumber: number;
  price: string;
  priceValue: number;
  color: Coloris;
  image: string;
  engraving: Engraving | null;
  addedAt: number;
};

export type CabinetItem = {
  slug: string;
  name: string;
  subtitle: string;
  edition: string;
  price: string;
  image: string;
  savedAt: number;
};

export type DrawerId = null | "panier" | "cabinet" | "recherche" | "essai";
