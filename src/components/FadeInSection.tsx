"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
  style?: React.CSSProperties;
};

export default function FadeInSection({
  children,
  className,
  delay = 0,
  as = "div",
  id,
  style,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
