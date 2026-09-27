import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Droit de rétractation",
  description:
    "Vos droits d’acquéreur : délai de rétractation, procédure, remboursement.",
  alternates: { canonical: "/retractation" },
};

export default function RetractationPage() {
  return <LegalPage kind="retractation" />;
}
