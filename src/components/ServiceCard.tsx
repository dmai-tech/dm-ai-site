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
              y: -8,
              boxShadow:
                "0 20px 44px -16px rgba(60, 45, 25, 0.28), 0 0 0 1px rgba(180, 130, 70, 0.3)",
            }
      }
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="group p-8 rounded-sm border border-border bg-paper flex flex-col cursor-default relative overflow-hidden"
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(220,170,90,0.0)] via-transparent to-[rgba(180,130,60,0.0)] group-hover:from-[rgba(220,170,90,0.12)] group-hover:to-[rgba(180,130,60,0.06)] transition-all duration-500" />

      <motion.p
        whileHover={reduce ? undefined : { scale: 1.18, x: 2 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-xs tracking-[0.35em] text-muted mb-6 group-hover:text-foreground transition-colors origin-left"
      >
        0{index + 1}
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
