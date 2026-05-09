"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Props = {
  href: string;
  image: string;
  alt: string;
  title: string;
  desc: string;
  tag: string;
  external?: boolean;
};

export default function ImageHoverCard({
  href,
  image,
  alt,
  title,
  desc,
  tag,
  external = true,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative block rounded-sm overflow-hidden border border-border bg-paper aspect-[4/3] sm:aspect-[16/11]"
      whileHover={
        reduce
          ? undefined
          : {
              y: -10,
              scale: 1.02,
              boxShadow:
                "0 24px 48px -16px rgba(60, 45, 25, 0.32), 0 8px 16px -8px rgba(180, 130, 70, 0.28), 0 0 0 1px rgba(200, 150, 80, 0.35)",
            }
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={reduce ? undefined : { scale: 1.06 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
          priority={false}
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,12,0.88)] via-[rgba(20,18,12,0.45)] to-[rgba(20,18,12,0.05)] group-hover:from-[rgba(20,18,12,0.92)] transition-all duration-500"
      />

      <div className="relative z-10 h-full flex flex-col p-7 sm:p-8">
        <div className="flex justify-between items-start">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 backdrop-blur-sm bg-white/10 px-2.5 py-1 rounded-sm">
            {tag}
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.05em] text-white mb-3">
            {title}
          </h3>
          <p className="text-white/85 leading-[1.9] text-[13px] tracking-wide mb-5 max-w-md">
            {desc}
          </p>
          <p className="text-[11px] tracking-[0.3em] uppercase text-white inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            前往試玩 <span>→</span>
          </p>
        </div>
      </div>
    </motion.a>
  );
}
