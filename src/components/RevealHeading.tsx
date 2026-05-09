"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  lines: string[];
  className?: string;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 22, scale: 0.92, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function RevealHeading({ lines, className }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <h1 className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {Array.from(line).map((ch, ci) => (
            <motion.span
              key={`${li}-${ci}`}
              variants={child}
              className="inline-block"
              style={{ whiteSpace: "pre" }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
