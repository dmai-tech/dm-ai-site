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
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 4 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
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
