"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COLORS = ["#FF6FA5", "#FFD166", "#B892FF", "#8BE8C4", "#FFB4A2"];

// Deterministic pseudo-random generator: same output every time it's called,
// so re-computing it never causes mismatched values.
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${seededRandom(i * 12.9898) * 100}%`,
  size: seededRandom(i * 37.719 + 1) * 6 + 4,
  color: COLORS[i % COLORS.length],
  duration: seededRandom(i * 5.113 + 2) * 6 + 8,
  delay: seededRandom(i * 8.233 + 3) * 6,
  rotate: seededRandom(i * 3.71 + 4) > 0.5,
}));

export default function AmbientConfetti() {
  // Render nothing during SSR / the first client pass, then mount the
  // animated particles once we're safely past hydration. This guarantees
  // the server-rendered HTML and the first client render are identical,
  // no matter what Framer Motion does internally with animated styles.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-5%]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.5,
            backgroundColor: p.color,
            borderRadius: 2,
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: p.rotate ? [0, 360] : [0, -360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

