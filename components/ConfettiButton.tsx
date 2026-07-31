"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = ["#FF6FA5", "#FFD166", "#B892FF", "#8BE8C4", "#FFB4A2"];

type Piece = {
  id: number;
  x: number;
  rotate: number;
  color: string;
  delay: number;
};

export default function ConfettiButton({
  label,
  onFire,
}: {
  label: string;
  onFire?: () => void;
}) {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [burstKey, setBurstKey] = useState(0);

  function fire() {
    const next: Piece[] = Array.from({ length: 60 }, (_, i) => ({
      id: burstKey * 100 + i,
      x: (Math.random() - 0.5) * 500,
      rotate: Math.random() * 720 - 360,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.15,
    }));
    setPieces(next);
    setBurstKey((k) => k + 1);
    onFire?.();
    setTimeout(() => setPieces([]), 1600);
  }

  return (
    <div className="relative flex items-center justify-center">
      <AnimatePresence>
        {pieces.map((p) => (
          <motion.span
            key={p.id}
            className="absolute top-1/2 left-1/2 h-3 w-2 rounded-sm"
            style={{ backgroundColor: p.color }}
            initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: 0,
              x: p.x,
              y: -Math.abs(p.x) * 0.6 - Math.random() * 200,
              rotate: p.rotate,
            }}
            transition={{ duration: 1.3, delay: p.delay, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      <motion.button
        onClick={fire}
        whileHover={{ scale: 1.08, rotate: -2 }}
        whileTap={{ scale: 0.94 }}
        animate={{
          boxShadow: [
            "0 8px 0 #c94d80, 0 0 0px rgba(255,111,165,0.6)",
            "0 8px 0 #c94d80, 0 0 26px rgba(255,111,165,0.6)",
            "0 8px 0 #c94d80, 0 0 0px rgba(255,111,165,0.6)",
          ],
        }}
        transition={{ boxShadow: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
        className="relative z-10 rounded-full border-2 border-white/70 bg-bubblegum px-6 py-3 font-display text-base text-cream active:translate-y-1 sm:px-10 sm:py-5 sm:text-xl"
      >
        {label}
      </motion.button>
    </div>
  );
}
