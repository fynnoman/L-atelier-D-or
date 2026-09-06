"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PasseportSearch() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleaned = value.trim().toUpperCase();
    if (!cleaned) return;
    router.push(`/passeport/${encodeURIComponent(cleaned)}`);
  };

  return (
    <form onSubmit={submit} className="border border-line p-6 md:p-8 bg-bg-2/40">
      <p className="eyebrow-gold">Punze-Nummer eingeben</p>
      <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
        <label className="block">
          <span className="eyebrow block mb-2">Référence · z. B. SOL-042</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value.toUpperCase())}
            placeholder="SOL-042"
            className="w-full bg-transparent border border-line px-4 py-4 text-[18px] tracking-[0.24em] text-ink outline-none focus:border-or-2 uppercase numeral"
            style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
          />
        </label>
        <button type="submit" className="btn-gold whitespace-nowrap">
          Passeport öffnen
        </button>
      </div>
      <p className="mt-4 text-[11.5px] text-muted leading-[1.7]">
        Die Nummer finden Sie in der Bügelinnenseite links. Bei Verlust kontaktieren Sie die Concierge.
      </p>
    </form>
  );
}
