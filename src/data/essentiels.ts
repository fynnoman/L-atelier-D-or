// Companion items and services sold alongside the frames. Mirrors LV's
// "Saisonale Essentials" section — small object grid with tiny label + price.

export type Essentiel = {
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  imageAlt: string;
};

export const essentiels: Essentiel[] = [
  {
    slug: "etui-cuir-noir",
    name: "Étui Cuir Noir",
    category: "Etui · Kalbsleder",
    price: "240 €",
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Étui aus schwarzem Kalbsleder",
  },
  {
    slug: "cordon-soie",
    name: "Cordon Soie",
    category: "Brillenband · Seide",
    price: "95 €",
    image:
      "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Brillenband aus geflochtener Seide",
  },
  {
    slug: "chiffon-microfibre",
    name: "Chiffon Microfibre",
    category: "Reinigungstuch",
    price: "35 €",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Reinigungstuch aus Mikrofaser",
  },
  {
    slug: "gravure-personnalisee",
    name: "Gravure Personnalisée",
    category: "Service · Signatur",
    price: "Auf Anfrage",
    image:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Personalisierte Gravur am Bügel",
  },
];
