export function parsePriceLabel(label: string): number {
  const match = label.replace(/ /g, " ").match(/([\d\s.,]+)/);
  if (!match) return 0;
  const cleaned = match[1]
    .replace(/[\s.]/g, "")
    .replace(",", ".");
  const value = parseFloat(cleaned);
  return Number.isFinite(value) ? value : 0;
}

export function romanNumeral(n: number): string {
  if (n <= 0) return "";
  const table: Array<[number, string]> = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let out = "";
  let rest = n;
  for (const [v, s] of table) {
    while (rest >= v) {
      out += s;
      rest -= v;
    }
  }
  return out;
}

export function editionNumeral(n: number): string {
  const padded = String(n).padStart(3, "0");
  return `N° ${padded}`;
}
