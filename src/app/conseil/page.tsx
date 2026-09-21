import LineReveal from "@/components/LineReveal";
import PageEyebrow from "@/components/PageEyebrow";

export const metadata = {
  title: "Conseil privé",
  description:
    "Un mot à la maison. Pas de formulaire, pas de rendez-vous — un écrin qui s'ouvre, une réponse écrite à la main.",
};

export default function ConseilPage() {
  return (
    <>
      <section className="relative pt-40 md:pt-52 pb-16">
        <div className="n-page">
          <PageEyebrow
            numeral="Conseil"
            label="La maison à votre écoute"
            className="mb-14"
          />

          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <LineReveal
                as="h1"
                className="n-display leading-[0.98]"
                lines={["Conseillez-", "moi."]}
                delayStep={140}
                style={{ fontSize: "clamp(64px, 12vw, 210px)" }}
              />
            </div>
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0">
              <p
                className="n-serif text-[19px] leading-[1.55] max-w-[30ch]"
                style={{ color: "var(--n-muted)" }}
              >
                Une conversation à quatre yeux, sans formulaire. Un
                écrin s&rsquo;ouvre, vous écrivez dedans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone reservee pour l'ecrin — sera remplacee par l'animation */}
      <section className="relative pb-32">
        <div className="n-page">
          <div
            data-etui-slot
            className="w-full flex items-center justify-center"
            style={{
              minHeight: "60vh",
              aspectRatio: "16 / 9",
              border: "1px solid var(--n-line)",
              background: "var(--n-bg-2)",
            }}
            aria-label="Écrin"
          >
            <span className="n-meta opacity-40">Écrin</span>
          </div>
        </div>
      </section>
    </>
  );
}
