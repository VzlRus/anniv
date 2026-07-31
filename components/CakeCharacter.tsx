"use client";

import { motion } from "framer-motion";

export default function CakeCharacter() {
  return (
    <motion.div
      className="relative mx-auto"
      style={{ width: "clamp(160px, 45vw, 230px)", height: "clamp(160px, 45vw, 230px)" }}
      animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* sparkles around the character */}
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="absolute text-lg"
          style={{
            top: `${[8, 18, 70, 55][i]}%`,
            left: `${[6, 88, 90, 2][i]}%`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.1, 0.5] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.span>
      ))}

      <svg viewBox="0 0 220 220" width="100%" height="100%">
        {/* shadow */}
        <ellipse cx="110" cy="204" rx="60" ry="9" fill="#2B1B33" opacity="0.12" />

        {/* body */}
        <ellipse cx="110" cy="130" rx="76" ry="70" fill="#FF6FA5" />

        {/* far arm, tucked behind the cake */}
        <ellipse cx="50" cy="148" rx="13" ry="22" fill="#FF6FA5" />

        {/* feet */}
        <ellipse cx="86" cy="196" rx="16" ry="9" fill="#FF6FA5" />
        <ellipse cx="134" cy="196" rx="16" ry="9" fill="#FF6FA5" />

        {/* cheeks */}
        <ellipse cx="74" cy="138" rx="12" ry="8" fill="#FF9FC0" opacity="0.7" />
        <ellipse cx="146" cy="138" rx="12" ry="8" fill="#FF9FC0" opacity="0.7" />

        {/* happy closed eyes (^_^) */}
        <path d="M84 116 Q90 108 96 116" stroke="#2B1B33" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M124 116 Q130 108 136 116" stroke="#2B1B33" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* big smile */}
        <path d="M92 132 Q110 148 128 132" stroke="#2B1B33" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* ---- the cake, held up front ---- */}
        <g>
          {/* plate */}
          <ellipse cx="110" cy="182" rx="46" ry="8" fill="#F4E3CF" />
          {/* cake base */}
          <rect x="76" y="150" width="68" height="32" rx="6" fill="#F7D9C4" />
          {/* frosting drip layer */}
          <path
            d="M76 150 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0 L144 150 Z"
            fill="#FFFFFF"
          />
          {/* candle */}
          <rect x="106" y="122" width="8" height="26" rx="2" fill="#B892FF" />
          {/* flame, flickering */}
          <motion.ellipse
            cx="110"
            cy="116"
            rx="5"
            ry="8"
            fill="#FFD166"
            animate={{ scaleY: [1, 1.25, 0.9, 1], opacity: [0.9, 1, 0.85, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "110px 122px" }}
          />
          {/* sprinkles */}
          <circle cx="90" cy="162" r="2.5" fill="#B892FF" />
          <circle cx="102" cy="170" r="2.5" fill="#8BE8C4" />
          <circle cx="120" cy="164" r="2.5" fill="#FF6FA5" />
          <circle cx="132" cy="172" r="2.5" fill="#FFD166" />
        </g>

        {/* near arm, holding the cake from the side */}
        <motion.g
          style={{ transformOrigin: "168px 150px" }}
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="168" cy="150" rx="13" ry="24" fill="#FF6FA5" />
        </motion.g>

        {/* tiny heart on belly */}
        <path
          d="M110 170 c-6-8 -18-4 -18 4 c0 8 10 12 18 20 c8-8 18-12 18-20 c0-8 -12-12 -18-4Z"
          fill="#fff"
          opacity="0"
        />
      </svg>
    </motion.div>
  );
}
