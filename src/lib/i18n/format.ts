import type { Locale } from "./LanguageContext";

const LOCALE_TAG: Record<Locale, string> = {
  fr: "fr-FR",
  de: "de-DE",
};

export function formatPrice(amount: number, locale: Locale) {
  return (
    amount.toLocaleString(LOCALE_TAG[locale], {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
}
