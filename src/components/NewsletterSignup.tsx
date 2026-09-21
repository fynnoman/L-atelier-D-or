"use client";

import { useRef, useState, type FormEvent } from "react";

const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;
const accessKey = process.env.NEXT_PUBLIC_NEWSLETTER_ACCESS_KEY;

type Status = "idle" | "sending" | "ok" | "error";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const busyRef = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busyRef.current) return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!email) {
      setStatus("error");
      setMessage("Une adresse valide, s’il vous plaît.");
      return;
    }
    if (!endpoint) {
      setStatus("error");
      setMessage("L’inscription est en cours d’installation.");
      return;
    }
    busyRef.current = true;
    setStatus("sending");
    setMessage("");
    const payload: Record<string, string> = { email };
    if (accessKey) payload.access_key = accessKey;
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Rejected");
      formRef.current?.reset();
      setStatus("ok");
      setMessage("Merci. Vous êtes inscrit·e.");
    } catch {
      setStatus("error");
      setMessage("Inscription non enregistrée. Réessayez plus tard.");
    } finally {
      busyRef.current = false;
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      className="flex flex-col gap-4"
      aria-label="Inscription à la lettre de la maison"
    >
      <label htmlFor="newsletter-email" className="n-eyebrow">
        La lettre de la maison
      </label>
      <p
        className="n-body text-[14px] leading-[1.5] max-w-[36ch]"
        style={{ color: "var(--n-muted)" }}
      >
        Une à deux fois par saison. Nouvelle pièce, cahier, silence.
        Rien de plus.
      </p>
      <div
        className="flex items-stretch"
        style={{
          border: "1px solid var(--n-line)",
          background: "var(--n-bg-2)",
        }}
      >
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          maxLength={254}
          placeholder="votre@email.com"
          className="flex-1 px-4 py-3 bg-transparent outline-none"
          style={{
            fontSize: "15px",
            color: "var(--n-ink)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
          autoComplete="email"
          disabled={status === "sending" || status === "ok"}
        />
        <button
          type="submit"
          disabled={status === "sending" || status === "ok"}
          className="px-5 transition-opacity disabled:opacity-50"
          style={{
            background: "var(--n-ink)",
            color: "var(--n-bg)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {status === "sending"
            ? "…"
            : status === "ok"
            ? "✓"
            : "S’inscrire"}
        </button>
      </div>
      {message && (
        <p
          role="status"
          className="n-meta"
          style={{
            color:
              status === "ok"
                ? "var(--n-ink)"
                : status === "error"
                ? "var(--n-ink)"
                : "var(--n-muted)",
            opacity: 0.75,
            marginTop: "4px",
            textTransform: "none",
            letterSpacing: "0.02em",
            fontSize: "12px",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}
