"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
};

// LV editorial page header. Ruhig, weiß, viel Whitespace.
export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="relative bg-bg pb-16 pt-32 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-light text-ink text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] tracking-[-0.02em]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-muted"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </header>
  );
}
