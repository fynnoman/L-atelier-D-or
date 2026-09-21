import type { Piece } from "@/data/collection";

type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function StructuredData({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------- Builder Helpers (nur belegbare Felder) ---------- */

export function organizationJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "L'Atelier d'Or",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Petite maison française de lunetterie. Édition brève, numérotée à la main.",
  };
}

export function websiteJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "L'Atelier d'Or",
    url: siteUrl,
    inLanguage: "fr-FR",
  };
}

export function productJsonLd(piece: Piece, siteUrl: string) {
  const pageUrl = `${siteUrl}/collection/${piece.slug}`;
  const image = piece.image ? `${siteUrl}${piece.image}` : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: piece.name,
    sku: piece.slug,
    brand: { "@type": "Brand", name: "L'Atelier d'Or" },
    description: piece.tagline,
    url: pageUrl,
    ...(image ? { image } : {}),
    offers: {
      "@type": "Offer",
      price: piece.priceEuro.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
      itemCondition: "https://schema.org/NewCondition",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
