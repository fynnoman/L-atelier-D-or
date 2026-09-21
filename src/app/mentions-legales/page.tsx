import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Mentions légales",
  description:
    "Informations légales du site de L'Atelier d'Or. Site en cours de constitution.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsPage() {
  return (
    <LegalPage
      numeral="Cahier — Discrétion"
      rubric="Mentions légales"
      title="Cahier — Discrétion."
      chapo="Ce que la maison est, dans les formes. Rien de plus, rien de moins."
      sections={[
        {
          title: "Statut du site",
          body: [
            "L’Atelier d’Or est une maison en cours de constitution. Le présent site est présenté à titre éditorial et n’effectue à ce jour aucune vente au public.",
            "Les mentions légales définitives — raison sociale, siège social, numéro RCS/SIRET, capital, direction de la publication, hébergeur — seront publiées ici dès que la société sera immatriculée.",
          ],
        },
        {
          title: "Éditeur",
          body: [
            "L’Atelier d’Or (dénomination provisoire).",
            "Coordonnées éditeur à communiquer sur demande écrite via le formulaire de contact.",
          ],
        },
        {
          title: "Hébergement",
          body: [
            "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          body: [
            "L’ensemble des contenus présents sur le site — textes, photographies, dessins, marques, logos — est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
            "Toute reproduction, représentation ou diffusion, en tout ou partie, est soumise à l’autorisation écrite préalable de la maison.",
          ],
        },
        {
          title: "Contact",
          body: [
            "Toute question relative au contenu ou à l’usage du site peut être adressée via la page « Conseil ».",
          ],
        },
      ]}
    />
  );
}
