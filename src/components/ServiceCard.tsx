"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  index: number;
  title: string;
  desc: string;
  price: string;
  ctaHref: string;
  children?: ReactNode;
};

export default function ServiceCard({
  index,
  title,
  desc,
  price,
  ctaHref,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              boxShadow:
                "0 16px 36px -14px rgba(180, 138, 74, 0.32), 0 0 0 1px rgba(216, 154, 91, 0.45)",
            }
      }
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="group p-8 tech-border flex flex-col cursor-default relative overflow-hidden shadow-[0_8px_28px_-14px_rgba(180,138,74,0.26)]"
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(216,154,91,0)] via-transparent to-[rgba(216,154,91,0)] group-hover:from-[rgba(216,154,91,0.18)] group-hover:to-[rgba(216,154,91,0.04)] transition-all duration-500" />

      <motion.p
        whileHover={reduce ? undefined : { scale: 1.18, x: 2 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-xs tracking-[0.35em] text-silver-soft mb-6 group-hover:text-silver transition-colors origin-left"
      >
        [ {String(index + 1).padStart(2, "0")} ]
      </motion.p>
      <h3 className="font-serif text-xl font-medium tracking-[0.05em] text-foreground mb-4 relative">
        {title}
      </h3>
      <p className="text-ink-soft leading-[2] text-[14px] tracking-wide flex-1 relative">
        {desc}
      </p>
      <div className="mt-8 pt-6 border-t border-border flex items-center justify-between relative">
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted">
          {price}
        </span>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-[0.3em] uppercase text-foreground inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          詢問 <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}
