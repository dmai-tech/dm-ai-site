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
              y: -4,
              boxShadow:
                "0 12px 32px -12px rgba(60, 50, 30, 0.18), 0 0 0 1px rgba(180, 140, 80, 0.18)",
            }
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.a>
  );
}
