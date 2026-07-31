"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type CharacterProps = {
  color: string;
  cheek: string;
  delay?: number;
  flip?: boolean;
  size?: number;
  hat?: boolean;
  grimace?: boolean;
};

export default function Character({
  color,
  cheek,
  delay = 0,
  flip = false,
  size = 150,
  hat = false,
  grimace = false,
}: CharacterProps) {
  const [jump, setJump] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      style={{
        width: `clamp(${Math.round(size * 0.6)}px, 24vw, ${size}px)`,
        height: `clamp(${Math.round(size * 0.6)}px, 24vw, ${size}px)`,
        scaleX: flip ? -1 : 1,
      }}
      initial={{ y: 0 }}
      animate={
        jump
          ? { y: [0, -70, 0], scaleY: [1, 1.1, 0.85, 1] }
          : { y: [0, -14, 0] }
      }
      transition={
        jump
          ? { duration: 0.55, ease: "easeOut" }
          : { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }
      }
      onAnimationComplete={() => jump && setJump(false)}
      onClick={() => setJump(true)}
      whileTap={{ scale: 0.92 }}
    >
      {jump && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 top-0 text-xl"
              style={{ scaleX: flip ? -1 : 1 }}
              initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
              animate={{
                opacity: 0,
                x: (i - 1) * 34,
                y: -60 - i * 10,
                scale: 1.1,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              💗
            </motion.span>
          ))}
        </>
      )}

      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <ellipse cx="100" cy="188" rx="46" ry="8" fill="#2B1B33" opacity="0.12" />

        <ellipse cx="100" cy="110" rx="72" ry="66" fill={color} />

        {hat && (
          <motion.g
            style={{ transformOrigin: "92px 58px" }}
            animate={{ rotate: [-14, -8, -14] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M92 12 L118 58 L66 58 Z" fill="#FFD166" stroke="#2B1B33" strokeWidth="2" />
            <path d="M78 34 L106 34" stroke="#FF6FA5" strokeWidth="5" />
            <path d="M72 48 L112 48" stroke="#B892FF" strokeWidth="5" />
            <circle cx="92" cy="10" r="7" fill="#FF6FA5" />
          </motion.g>
        )}

        <motion.g
          style={{ transformOrigin: "150px 110px" }}
          animate={{ rotate: [0, 28, 0, 28, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.4, delay }}
        >
          <ellipse cx="158" cy="118" rx="13" ry="24" fill={color} />
        </motion.g>

        <ellipse cx="42" cy="130" rx="13" ry="22" fill={color} />

        <ellipse cx="76" cy="172" rx="16" ry="9" fill={color} />
        <ellipse cx="124" cy="172" rx="16" ry="9" fill={color} />

        <ellipse cx="65" cy="118" rx="12" ry="8" fill={cheek} opacity="0.7" />
        <ellipse cx="135" cy="118" rx="12" ry="8" fill={cheek} opacity="0.7" />

        {grimace && (
          <g>
            <path
              d="M128 108 q10 -6 16 2 q4 8 -6 10 q-10 2 -12 -6 Z"
              fill="#FFF7F0"
              stroke="#2B1B33"
              strokeWidth="1.5"
            />
            <circle cx="140" cy="106" r="2.5" fill="#FF6FA5" />
          </g>
        )}

        {grimace ? (
          <g>
            <path d="M72 88 Q80 82 90 88" stroke="#2B1B33" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="80" cy="98" r="7" fill="#2B1B33" />
            <circle cx="120" cy="98" r="7" fill="#2B1B33" />
            <circle cx="82.5" cy="95.5" r="2" fill="#fff" />
            <circle cx="122.5" cy="95.5" r="2" fill="#fff" />
          </g>
        ) : (
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              times: [0, 0.9, 0.95, 1],
              delay,
            }}
            style={{ transformOrigin: "100px 98px" }}
          >
            <circle cx="80" cy="98" r="7" fill="#2B1B33" />
            <circle cx="120" cy="98" r="7" fill="#2B1B33" />
            <circle cx="82.5" cy="95.5" r="2" fill="#fff" />
            <circle cx="122.5" cy="95.5" r="2" fill="#fff" />
          </motion.g>
        )}

        {grimace ? (
          <g>
            <path
              d="M82 118 Q90 126 100 118 Q110 126 118 118"
              stroke="#2B1B33"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="100" cy="124" rx="6" ry="4" fill="#E0688F" />
          </g>
        ) : (
          <path
            d="M 84 116 Q 100 128 116 116"
            stroke="#2B1B33"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        )}

        <path
          d="M100 140 c-6-8 -18-4 -18 4 c0 8 10 12 18 20 c8-8 18-12 18-20 c0-8 -12-12 -18-4Z"
          fill="#fff"
          opacity="0.85"
        />
      </svg>
    </motion.div>
  );
}
