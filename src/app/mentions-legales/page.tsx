import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Mentions légales",
  description:
    "Informations légales du site de L'Atelier d'Or. Site en cours de constitution.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsPage() {
  return <LegalPage kind="mentions" />;
}
