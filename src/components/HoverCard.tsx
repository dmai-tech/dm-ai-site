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
              y: -10,
              scale: 1.02,
              boxShadow:
                "0 24px 48px -16px rgba(20, 40, 80, 0.55), 0 8px 16px -8px rgba(80, 130, 220, 0.35), 0 0 0 1px rgba(140, 180, 230, 0.4)",
            }
      }
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.a>
  );
}
