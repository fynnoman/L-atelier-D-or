import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Confidentialité",
  description:
    "Ce que la maison collecte, ce qu'elle ne collectera jamais, et vos droits.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return <LegalPage kind="privacy" />;
}
