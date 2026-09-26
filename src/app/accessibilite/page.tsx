import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Accessibilité",
  description:
    "Nos engagements en matière d'accessibilité : WCAG 2.2 AA, respect des préférences de mouvement, contact.",
  alternates: { canonical: "/accessibilite" },
};

export default function AccessibilitePage() {
  return <LegalPage kind="a11y" />;
}
