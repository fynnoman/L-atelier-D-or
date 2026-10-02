import AtelierClient from "./AtelierClient";

export const metadata = {
  title: "La Maison",
  description:
    "L’Atelier d’Or, maison française de lunetterie. Histoire, savoir-faire, matériaux et détails de la collection Roi.",
  alternates: { canonical: "/atelier" },
};

export default function AtelierPage() {
  return <AtelierClient />;
}
