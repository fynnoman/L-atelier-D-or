"use client";

import { useState } from "react";

const CITIES = ["Paris", "Berlin", "Londres"] as const;

export default function ConciergeForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const city = String(data.get("city") ?? "Paris");
        const message = String(data.get("message") ?? "");
        const body =
          `Bonjour,\n\nJe souhaite prendre rendez-vous à ${city}.\n\n` +
          `Nom : ${name}\nEmail : ${email}\n\n${message}\n\n` +
          `— Envoyé depuis le site de L'Atelier d'Or.`;
        window.location.href =
          `mailto:concierge@latelier-dor.com?subject=${encodeURIComponent("Rendez-vous — " + city)}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
      className="grid grid-cols-12 gap-x-6 gap-y-8"
    >
      <div className="col-span-12 md:col-span-6 flex flex-col gap-3">
        <label className="n-eyebrow" htmlFor="name">Votre nom</label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="n-serif text-[19px] leading-[1.4] bg-transparent border-b py-2 outline-none focus:border-current transition-colors"
          style={{ borderColor: "var(--n-line)" }}
        />
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col gap-3">
        <label className="n-eyebrow" htmlFor="email">Votre courriel</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="n-serif text-[19px] leading-[1.4] bg-transparent border-b py-2 outline-none focus:border-current transition-colors"
          style={{ borderColor: "var(--n-line)" }}
        />
      </div>

      <div className="col-span-12 flex flex-col gap-4">
        <label className="n-eyebrow">Ville souhaitée</label>
        <div className="flex flex-wrap gap-3">
          {CITIES.map((c, i) => (
            <label
              key={c}
              className="flex items-center gap-3 px-5 py-3 border cursor-pointer"
              style={{ borderColor: "var(--n-line)" }}
            >
              <input
                type="radio"
                name="city"
                value={c}
                defaultChecked={i === 0}
                className="accent-current"
              />
              <span className="n-serif text-[17px]">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="col-span-12 flex flex-col gap-3">
        <label className="n-eyebrow" htmlFor="message">Un mot pour la maison</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Une pièce en particulier, un jour, une heure, un contexte…"
          className="n-serif text-[19px] leading-[1.5] bg-transparent border p-4 outline-none focus:border-current transition-colors"
          style={{ borderColor: "var(--n-line)" }}
        />
      </div>

      <div className="col-span-12 flex flex-wrap items-center gap-6 mt-2">
        <button type="submit" className="n-cta">
          Écrire au concierge
        </button>
        <p className="n-mono opacity-60 max-w-[42ch]">
          Réponse sous 24 heures ouvrées. Vos coordonnées ne sortent jamais de la maison.
        </p>
      </div>

      {sent && (
        <p className="col-span-12 n-serif-italic mt-4" style={{ color: "var(--n-gold-deep)" }}>
          Votre client mail s&rsquo;ouvre — envoyez le message quand tout vous convient.
        </p>
      )}
    </form>
  );
}
