"use client";

import PlaceholderImage from "../PlaceholderImage";
import type { JournalBlock, JournalEntry } from "@/data/journal";

export default function JournalArticle({ entry }: { entry: JournalEntry }) {
  return (
    <article className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[760px] px-6 md:px-8 space-y-10">
        {entry.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <div className="pt-10 border-t border-line-soft flex flex-wrap items-center gap-4 justify-between text-[11px] uppercase tracking-[0.24em] text-muted">
          <span>Signé · {entry.author}</span>
          <span>{entry.location}</span>
        </div>
      </div>
    </article>
  );
}

function Block({ block }: { block: JournalBlock }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p className="text-[16.5px] leading-[1.85] text-ink font-light first-letter:font-normal">
          {block.text}
        </p>
      );
    case "section":
      return (
        <div className="pt-4">
          <p className="eyebrow-gold mb-3">Section</p>
          <h2 className="display text-ink text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.05] tracking-[-0.015em]">
            {block.title}
            {block.italic && (
              <span
                className="block mt-1"
                style={{
                  fontStyle: "italic",
                  fontFamily: "var(--font-fraunces), serif",
                  color: "var(--or-2)",
                  fontSize: "0.68em",
                }}
              >
                {block.italic}
              </span>
            )}
          </h2>
        </div>
      );
    case "quote":
      return (
        <blockquote className="border-l border-or pl-6 py-3 my-4">
          <p
            className="text-[19px] md:text-[22px] leading-[1.5] text-ink font-light"
            style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
          >
            «&nbsp;{block.text}&nbsp;»
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-muted">
             {block.attribution}
          </p>
        </blockquote>
      );
    case "figure":
      return (
        <figure className="-mx-2 md:-mx-8 my-4">
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-3">
            <PlaceholderImage
              src={block.image}
              alt={block.caption}
              sizes="(min-width: 768px) 780px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[11.5px] text-muted italic text-center">
            {block.caption}
          </figcaption>
        </figure>
      );
    case "hallmark":
      return (
        <aside className="grid grid-cols-[auto_1fr] items-center gap-5 border border-line-soft px-5 py-5 bg-bg-2/40">
          <div className="text-center min-w-[64px]">
            <p
              className="numeral text-or-2"
              style={{
                fontSize: "clamp(1.6rem,2.4vw,2rem)",
                fontStyle: "italic",
              }}
            >
              {block.numeral}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted">
              {block.label}
            </p>
          </div>
          <p className="text-[13.5px] text-ink leading-[1.7] font-light">
            {block.note}
          </p>
        </aside>
      );
  }
}
