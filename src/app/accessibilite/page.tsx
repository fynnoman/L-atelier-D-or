import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Accessibilité",
  description: "Nos engagements en matière d'accessibilité : WCAG 2.2 AA, respect des préférences de mouvement, contact.",
};

export default function AccessibilitePage() {
  return (
    <LegalPage
      numeral="Cahier — Discrétion"
      rubric="Accessibilité"
      title="Une lecture, à vue et à voix, pour tout le monde."
      chapo="Le site vise le niveau WCAG 2.2 AA et respecte les préférences de mouvement du système."
      sections={[
        {
          title: "Notre visée",
          body: [
            "Le site est conçu pour atteindre le niveau de conformité WCAG 2.2 AA (Web Content Accessibility Guidelines).",
            "Nous vérifions régulièrement contraste, ordre du contenu, navigation au clavier et compatibilité avec les lecteurs d'écran.",
          ],
        },
        {
          title: "Mouvement réduit",
          body: [
            "Les animations d'entrée, révélations et transitions du site sont désactivées automatiquement lorsque votre système est réglé sur « réduire les animations » (prefers-reduced-motion).",
            "Aucune animation essentielle à la compréhension n'est présente.",
          ],
        },
        {
          title: "Navigation",
          body: [
            "Toute la navigation est accessible au clavier. Les zones interactives disposent d'un état de focus visible.",
            "Les liens et boutons sont annoncés en toutes lettres, sans jargon.",
          ],
        },
        {
          title: "Signalement",
          body: [
            "Si vous rencontrez une difficulté d'accès à un contenu, écrivez-nous à concierge@latelier-dor.com. Nous répondons sous vingt-quatre heures ouvrées et corrigeons dans la mesure du possible sans délai.",
          ],
        },
      ]}
    />
  );
}
