"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export default function HoverCard({
  href,
  children,
  className = "",
  external = true,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group block ${className}`}
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              scale: 1.02,
              boxShadow:
                "0 18px 36px -14px rgba(180, 138, 74, 0.32), 0 6px 14px -6px rgba(216, 154, 91, 0.22), 0 0 0 1px rgba(216, 154, 91, 0.45)",
            }
      }
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.a>
  );
}
