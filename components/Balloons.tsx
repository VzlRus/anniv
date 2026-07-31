"use client";

import { motion } from "framer-motion";

const BALLOONS = [
  { color: "#FF6FA5", left: "6%", size: 60, delay: 0, duration: 9 },
  { color: "#FFD166", left: "18%", size: 44, delay: 1.4, duration: 11 },
  { color: "#B892FF", left: "82%", size: 54, delay: 0.6, duration: 10 },
  { color: "#8BE8C4", left: "90%", size: 38, delay: 2.1, duration: 8 },
  { color: "#FFB4A2", left: "50%", size: 34, delay: 1.1, duration: 12 },
];

export default function Balloons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {BALLOONS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: b.left, bottom: -120, width: b.size, height: b.size * 1.2 }}
          animate={{
            y: ["0vh", "-130vh"],
            x: [0, 18, -12, 0],
          }}
          transition={{
            y: { duration: b.duration, repeat: Infinity, delay: b.delay, ease: "linear" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg viewBox="0 0 40 50" width="100%" height="100%">
            <ellipse cx="20" cy="20" rx="18" ry="20" fill={b.color} />
            <path d="M20 40 L20 50" stroke="#2B1B33" strokeWidth="1" opacity="0.4" />
            <path d="M17 40 L20 44 L23 40 Z" fill={b.color} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
