import type { Locale } from "./LanguageContext";
import { dictionaries } from "./dictionaries";
import type { Piece } from "@/data/collection";

export type LocalizedPiece = Piece & {
  tagline: string;
  chapter: string;
  place: string;
  time: string;
  silhouette: string;
  materie: string;
  details: string[];
  notes: string[];
  scene: string;
  teintes: { name: string; hex: string }[];
};

export function localizePiece(piece: Piece, locale: Locale): LocalizedPiece {
  const dict = dictionaries[locale].pieces[piece.slug];
  if (!dict) return piece as LocalizedPiece;
  return {
    ...piece,
    tagline: dict.tagline,
    chapter: dict.chapter,
    place: dict.place,
    time: dict.time,
    silhouette: dict.silhouette,
    materie: dict.materie,
    details: dict.details,
    notes: dict.notes,
    scene: dict.scene,
    teintes: piece.teintes.map((t, i) => ({
      hex: t.hex,
      name: dict.teintes[i]?.name ?? t.name,
    })),
  };
}

