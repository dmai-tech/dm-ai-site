"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TOTAL_BARS = 24;

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("dm_loaded_once");
    if (seen) return;
    setShown(true);
    sessionStorage.setItem("dm_loaded_once", "1");

    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 2.2);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!shown) return null;

  const litCount = Math.round((progress / 100) * TOTAL_BARS);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <DMPixelLogo />
          <div className="mt-12 pixel-bar">
            {Array.from({ length: TOTAL_BARS }).map((_, i) => (
              <span key={i} className={i < litCount ? "" : "off"} />
            ))}
          </div>
          <div className="mt-6 font-mono text-[11px] tracking-[0.4em] text-silver-soft">
            LOADING DM ::: {String(progress).padStart(3, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DMPixelLogo() {
  // 2 個字母 D + M，用 5x7 點陣 grid
  const D = [
    "11110",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "11110",
  ];
  const M = [
    "10001",
    "11011",
    "10101",
    "10101",
    "10001",
    "10001",
    "10001",
  ];
  const dot = 8;
  const gap = 2;
  const cols = 5;
  const rows = 7;
  const letterW = cols * (dot + gap);
  const spacer = dot * 2;
  const totalW = letterW * 2 + spacer;
  const totalH = rows * (dot + gap);

  function renderLetter(grid: string[], offsetX: number) {
    return grid.flatMap((row, ry) =>
      row.split("").map((cell, cx) =>
        cell === "1" ? (
          <rect
            key={`${ry}-${cx}-${offsetX}`}
            x={offsetX + cx * (dot + gap)}
            y={ry * (dot + gap)}
            width={dot}
            height={dot}
            rx={1}
            fill="url(#pixelGrad)"
          />
        ) : null
      )
    );
  }

  return (
    <svg
      width={totalW}
      height={totalH}
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="drop-shadow-[0_0_24px_rgba(124,185,232,0.45)]"
    >
      <defs>
        <linearGradient id="pixelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D1F12" stopOpacity="1" />
          <stop offset="100%" stopColor="#D89A5B" stopOpacity="1" />
        </linearGradient>
      </defs>
      {renderLetter(D, 0)}
      {renderLetter(M, letterW + spacer)}
    </svg>
  );
}
