"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
};

const RADIUS = 80;
const STRENGTH = 0.18;

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = true,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > RADIUS) {
      x.set(0);
      y.set(0);
      return;
    }
    x.set(dx * STRENGTH);
    y.set(dy * STRENGTH);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "inline-block px-10 py-4 rounded-sm text-sm tracking-[0.15em] relative overflow-hidden";

  const variantClass =
    variant === "primary"
      ? "magnetic-primary text-background"
      : "border border-foreground/30 hover:border-foreground hover:bg-cream-deep text-foreground transition-colors";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${variantClass} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
