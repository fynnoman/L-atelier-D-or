import StructuredData, { breadcrumbJsonLd } from "@/components/StructuredData";
import CollectionIndexClient from "./CollectionIndexClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://laterlierdor-fynn-schulzs-projects.vercel.app";

export const metadata = {
  title: "La Collection — Roi.",
  description:
    "Roi. Quatre pièces : Roi Rouge, Roi Noir, Roi Cristal, Roi Émeraude. Acétate italien, montage à la main, 78,90 € l'exemplaire.",
  alternates: { canonical: "/collection" },
};

export default function CollectionIndex() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Accueil", url: `${siteUrl}/` },
          { name: "Collection", url: `${siteUrl}/collection` },
        ])}
      />
      <CollectionIndexClient />
    </>
  );
}
