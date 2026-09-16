import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Confidentialité",
  description: "Ce que la maison collecte, ce qu'elle ne collectera jamais, et vos droits.",
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      numeral="Cahier — Discrétion"
      rubric="Confidentialité"
      title="Vos coordonnées ne sortent jamais de la maison."
      chapo="Ce que nous collectons, ce que nous ne collecterons jamais, ce que vous pouvez nous demander à tout moment."
      sections={[
        {
          title: "Ce que la maison collecte",
          body: [
            "Uniquement les informations que vous nous transmettez volontairement : nom, courriel, ville souhaitée pour un rendez-vous, et le message que vous choisissez d'y joindre.",
            "Nous ne collectons aucune donnée comportementale, aucun profil publicitaire, aucun identifiant de suivi tiers.",
          ],
        },
        {
          title: "Ce que la maison ne fait pas",
          body: [
            "Nous ne vendons pas vos coordonnées. Nous ne les partageons avec aucune régie, aucun réseau publicitaire, aucun partenaire commercial.",
            "Nous ne posons pas de traceurs à des fins de mesure d'audience tierce, ni d'outils de re-ciblage.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "Le site utilise uniquement des cookies strictement nécessaires — affichage, préférences d'accessibilité, cache.",
            "Aucun cookie de mesure d'audience tierce, aucun cookie de suivi publicitaire.",
          ],
        },
        {
          title: "Vos droits",
          body: [
            "Conformément au Règlement général sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et de portabilité concernant vos données personnelles.",
            "Vous pouvez exercer ces droits par courriel à concierge@latelier-dor.com. Nous répondons sous vingt-quatre heures ouvrées.",
          ],
        },
        {
          title: "Durée de conservation",
          body: [
            "Les échanges relatifs à un rendez-vous sont conservés le temps du dialogue, puis effacés sur simple demande. Aucune conservation prolongée sans raison exprimée.",
          ],
        },
      ]}
    />
  );
}
