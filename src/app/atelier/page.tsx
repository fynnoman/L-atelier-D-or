import AtelierClient from "./AtelierClient";

export const metadata = {
  title: "L’Atelier",
  description:
    "Une petite maison française de lunetterie. Édition brève, faite avec soin, numérotée à la main.",
  alternates: { canonical: "/atelier" },
};

export default function AtelierPage() {
  return <AtelierClient />;
}
