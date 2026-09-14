import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section
      className="relative"
      style={{
        paddingInline: "var(--page-x)",
        paddingBlock: "clamp(60px, 10vh, 120px)",
        background: "var(--bg)",
      }}
    >
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <div
            className="serif space-y-6"
            style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)" }}
          >
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
