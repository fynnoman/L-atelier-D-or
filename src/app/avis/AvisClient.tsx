"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import LineReveal from "@/components/LineReveal";
import { useT } from "@/lib/i18n/LanguageContext";

type Status = "idle" | "sending" | "ok" | "error";
const endpoint = process.env.NEXT_PUBLIC_FEEDBACK_ENDPOINT;
const accessKey = process.env.NEXT_PUBLIC_FEEDBACK_ACCESS_KEY;
const recipient = process.env.NEXT_PUBLIC_FEEDBACK_EMAIL || "";

export default function AvisClient() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const busyRef = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busyRef.current) return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const model = String(data.get("model") || "").trim();
    const rating = String(data.get("rating") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent") === "on";
    if (!name || !message) {
      setStatus("error");
      setError(t.feedback.errorEmpty);
      return;
    }
    setError("");
    if (!endpoint && !recipient) {
      setStatus("error");
      setError(t.feedback.errorSetup);
      return;
    }
    busyRef.current = true;
    setStatus("sending");
    try {
      if (endpoint) {
        const payload: Record<string, string> = {
          name,
          email,
          model,
          rating,
          message,
          consent: consent ? "yes" : "no",
        };
        if (accessKey) payload.access_key = accessKey;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Rejected");
      } else if (recipient) {
        const body = `${message}\n\n— ${name}\n${email}\nModel: ${model}\nRating: ${rating}\nConsent: ${
          consent ? "yes" : "no"
        }`;
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
          `Feedback — ${name}`
        )}&body=${encodeURIComponent(body)}`;
      }
      formRef.current?.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
      setError(t.feedback.errorSend);
    } finally {
      busyRef.current = false;
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-20 md:pb-28">
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={[t.avis.title1]}
                delayStep={140}
                style={{ fontSize: "clamp(56px, 10vw, 160px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
              <p
                className="n-serif leading-[1.55] max-w-[32ch]"
                style={{ fontSize: "18px", color: "var(--n-muted)" }}
              >
                {t.avis.lede}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section
        className="relative py-24 md:py-28"
        style={{ background: "var(--n-bg-warm)" }}
      >
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-end mb-14 md:mb-16">
            <div className="col-span-12 md:col-span-8">
              <h2
                className="n-display leading-[1.02]"
                style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 300 }}
              >
                {t.feedback.promiseTitle}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            {t.feedback.promisePoints.map((p, i) => (
              <article
                key={p.t}
                className="col-span-12 md:col-span-4 border-t pt-8"
                style={{ borderColor: "var(--n-line)" }}
              >
                <span
                  className="n-mono opacity-55"
                  style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="n-serif text-[20px] leading-[1.2] mt-3 mb-3">
                  {p.t}
                </h3>
                <p
                  className="n-serif leading-[1.55] max-w-[40ch]"
                  style={{ fontSize: "15px", color: "var(--n-muted)" }}
                >
                  {p.b}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-24 md:py-32">
        <div className="n-page">
          <div className="grid grid-cols-12 gap-x-6 items-end mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-8">
              <h2
                className="n-display leading-[1.02]"
                style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 300 }}
              >
                {t.avis.cta}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 mt-6 md:mt-0">
              <p
                className="n-serif leading-[1.55] max-w-[34ch]"
                style={{ fontSize: "15px", color: "var(--n-muted)" }}
              >
                {t.avis.ctaBody}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-6">
            <div
              className="col-span-12 md:col-span-10 md:col-start-2 p-8 md:p-12"
              style={{
                border: "1px solid var(--n-line-soft)",
                borderRadius: "clamp(20px, 1.8vw, 28px)",
                background: "var(--n-bg-2)",
                boxShadow:
                  "0 1px 2px rgba(10,10,10,0.04), 0 30px 80px -32px rgba(10,10,10,0.14)",
              }}
            >
              {status === "ok" ? (
                <div className="flex flex-col items-start gap-4 py-6">
                  <h3
                    className="n-serif"
                    style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1 }}
                  >
                    {t.feedback.thanksTitle}
                  </h3>
                  <p
                    className="n-serif leading-[1.55] max-w-[46ch]"
                    style={{ fontSize: "17px", color: "var(--n-muted)" }}
                  >
                    {t.feedback.thanksBody}
                  </p>
                  <Link href="/collection" className="n-link mt-4">
                    {t.piece.ctaCollection} →
                  </Link>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={submit}
                  aria-label={t.feedback.formAria}
                  aria-busy={status === "sending"}
                  className="flex flex-col gap-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                      <span className="n-eyebrow opacity-70">
                        {t.feedback.nameLabel}
                      </span>
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        className="w-full bg-transparent border-b py-2 outline-none focus:border-current"
                        style={{
                          borderColor: "var(--n-line)",
                          fontSize: "17px",
                          color: "var(--n-ink)",
                        }}
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="n-eyebrow opacity-70">
                        {t.feedback.emailLabel}
                      </span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        className="w-full bg-transparent border-b py-2 outline-none focus:border-current"
                        style={{
                          borderColor: "var(--n-line)",
                          fontSize: "17px",
                          color: "var(--n-ink)",
                        }}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="n-eyebrow opacity-70">
                      {t.feedback.modelLabel}
                    </span>
                    <input
                      name="model"
                      type="text"
                      placeholder={t.feedback.modelPlaceholder}
                      maxLength={140}
                      className="w-full bg-transparent border-b py-2 outline-none focus:border-current placeholder:opacity-40"
                      style={{
                        borderColor: "var(--n-line)",
                        fontSize: "17px",
                        color: "var(--n-ink)",
                      }}
                    />
                  </label>

                  <fieldset className="flex flex-col gap-3">
                    <legend className="n-eyebrow opacity-70">
                      {t.feedback.ratingLabel}
                    </legend>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {t.feedback.ratingOptions.map((r) => (
                        <label
                          key={r}
                          className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors"
                          style={{
                            border: "1px solid var(--n-line)",
                            borderRadius: "999px",
                            fontSize: "13px",
                          }}
                        >
                          <input
                            type="radio"
                            name="rating"
                            value={r}
                            className="peer sr-only"
                          />
                          <span className="peer-checked:font-medium">{r}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className="flex flex-col gap-2">
                    <span className="n-eyebrow opacity-70">
                      {t.feedback.messageLabel}
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      maxLength={3000}
                      className="w-full bg-transparent border-b py-2 outline-none focus:border-current resize-none"
                      style={{
                        borderColor: "var(--n-line)",
                        fontSize: "17px",
                        color: "var(--n-ink)",
                        lineHeight: 1.55,
                      }}
                    />
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-1 accent-current"
                    />
                    <span
                      className="n-serif leading-[1.5]"
                      style={{ fontSize: "14px", color: "var(--n-muted)" }}
                    >
                      {t.feedback.consent}
                    </span>
                  </label>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="n-cta disabled:opacity-50"
                    >
                      {status === "sending"
                        ? t.feedback.submitting
                        : t.feedback.submit}
                    </button>
                    {error && (
                      <p
                        role="alert"
                        className="n-meta"
                        style={{
                          color: "var(--n-ink)",
                          opacity: 0.75,
                          fontSize: "12px",
                          textTransform: "none",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {error}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

          <div
            className="mt-16 pt-10 border-t flex flex-col md:flex-row items-baseline justify-between gap-6"
            style={{ borderColor: "var(--n-line-soft)" }}
          >
            <p
              className="n-serif leading-[1.55] max-w-[46ch]"
              style={{ fontSize: "16px", color: "var(--n-muted)" }}
            >
              {t.feedback.conseilFooterBody}
            </p>
            <Link href="/conseil" className="n-link">
              {t.feedback.conseilFooterCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
