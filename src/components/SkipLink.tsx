"use client";

import { useT } from "@/lib/i18n/LanguageContext";

export default function SkipLink() {
  const t = useT();
  return (
    <a href="#main" className="n-skip">
      {t.common.skipToContent}
    </a>
  );
}
