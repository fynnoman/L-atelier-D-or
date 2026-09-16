import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Mentions légales",
  description: "Éditeur, direction de la publication et hébergement du site de L'Atelier d'Or.",
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
          title: "Éditeur",
          body: [
            "L'Atelier d'Or — SAS à capital variable, 14, rue de l'Éclipse, 75008 Paris — France.",
            "Immatriculée au Registre du commerce et des sociétés de Paris (RCS Paris).",
          ],
        },
        {
          title: "Direction de la publication",
          body: [
            "Le président en exercice de la maison assure la direction de la publication.",
          ],
        },
        {
          title: "Hébergement",
          body: [
            "Le site est hébergé par un prestataire dont les coordonnées peuvent être communiquées sur demande écrite à concierge@latelier-dor.com.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          body: [
            "L'ensemble des contenus présents sur le site — textes, photographies, dessins, marques, logos — est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
            "Toute reproduction, représentation ou diffusion, en tout ou partie, est soumise à l'autorisation écrite préalable de la maison.",
          ],
        },
        {
          title: "Contact",
          body: [
            "Toute question relative à l'édition, au contenu ou à l'usage du site peut être adressée à concierge@latelier-dor.com. Réponse sous vingt-quatre heures ouvrées.",
          ],
        },
      ]}
    />
  );
}
