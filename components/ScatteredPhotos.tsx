"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Spot = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
  w: string;
  h: string;
  bg: [string, string];
  delay: number;
  hideOnMobile?: boolean;
  src?: string;
  nearButton?: boolean;
};

const SPOTS: Spot[] = [
  {
    top: "2%",
    left: "3%",
    rotate: -8,
    w: "clamp(140px, 34vw, 220px)",
    h: "clamp(170px, 42vw, 270px)",
    bg: ["#F7D9C4", "#E8B4C8"],
    delay: 0,
    src: "/photos/photo1.jpg",
  },
  {
    top: "11%",
    right: "4%",
    rotate: 12,
    w: "clamp(130px, 32vw, 210px)",
    h: "clamp(160px, 39vw, 250px)",
    bg: ["#D8C4FF", "#B892FF"],
    delay: 0.4,
    src: "/photos/photo2.jpg",
  },
  {
    bottom: "13%",
    left: "5%",
    rotate: 10,
    w: "clamp(135px, 33vw, 200px)",
    h: "clamp(165px, 40vw, 240px)",
    bg: ["#FFE6A8", "#FFD166"],
    delay: 0.8,
    src: "/photos/photo3.jpg",
    nearButton: true,
  },
  {
    bottom: "2%",
    right: "2%",
    rotate: -13,
    w: "clamp(140px, 33vw, 210px)",
    h: "clamp(170px, 40vw, 250px)",
    bg: ["#B7EFD9", "#8BE8C4"],
    delay: 1.2,
    src: "/photos/photo4.jpg",
    nearButton: true,
  },
  {
    top: "22%",
    left: "16%",
    rotate: -16,
    w: "clamp(120px, 28vw, 175px)",
    h: "clamp(150px, 34vw, 215px)",
    bg: ["#FFD1DC", "#FF9FC0"],
    delay: 0.2,
    hideOnMobile: true,
    src: "/photos/photo10.jpg",
  },
  {
    top: "34%",
    right: "3%",
    rotate: -9,
    w: "clamp(120px, 27vw, 190px)",
    h: "clamp(150px, 33vw, 230px)",
    bg: ["#C9E4FF", "#9AC2F5"],
    delay: 0.9,
    hideOnMobile: true,
    src: "/photos/photo9.jpg",
  },

  {
    bottom: "1%",
    left: "5%",
    rotate: -13,
    w: "clamp(125px, 29vw, 190px)",
    h: "clamp(155px, 35vw, 230px)",
    bg: ["#E0BBE4", "#C99BE0"],
    delay: 1.5,
    src: "/photos/photo5.jpg",
    nearButton: true,
  },
  {
    bottom: "23%",
    left: "43%",
    rotate: -6,
    w: "clamp(115px, 25vw, 170px)",
    h: "clamp(140px, 31vw, 210px)",
    bg: ["#B5EAD7", "#8FDCC0"],
    delay: 1.8,
    hideOnMobile: true,
    src: "/photos/photo8.jpg",
  },
  {
    top: "15%",
    left: "3%",
    rotate: 14,
    w: "clamp(110px, 24vw, 160px)",
    h: "clamp(135px, 29vw, 195px)",
    bg: ["#FFC6D9", "#FF8FB3"],
    delay: 0.6,
    hideOnMobile: true,
    src: "/photos/photo6.jpg",
  },
  {
    bottom: "18%",
    right: "15%",
    rotate: -17,
    w: "clamp(110px, 24vw, 160px)",
    h: "clamp(135px, 29vw, 195px)",
    bg: ["#CDE7FF", "#A9D4FF"],
    delay: 1.0,
    src: "/photos/photo7.jpg",
    nearButton: true,
  },
];

function PlaceholderPortrait({ from, to }: { from: string; to: string }) {
  const gradId = `grad-${from.replace("#", "")}-${to.replace("#", "")}`;
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="#FFE3D0" />
      <circle cx="100" cy="330" r="140" fill={`url(#${gradId})`} />
      <path d="M40 240 Q40 150 100 150 Q160 150 160 240 Z" fill={`url(#${gradId})`} />
      <circle cx="100" cy="118" r="52" fill="#FFD9B8" />
      <path
        d="M52 112 Q48 48 100 52 Q152 48 148 112 Q148 74 100 70 Q52 74 52 112 Z"
        fill="#F4E3CF"
      />
      <circle cx="100" cy="164" r="14" fill="#F4E3CF" />
      <circle cx="80" cy="114" r="5" fill="#2B1B33" />
      <circle cx="120" cy="114" r="5" fill="#2B1B33" />
      <path d="M86 132 Q100 142 114 132" stroke="#2B1B33" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <ellipse cx="66" cy="126" rx="9" ry="6" fill="#FF9FC0" opacity="0.6" />
      <ellipse cx="134" cy="126" rx="9" ry="6" fill="#FF9FC0" opacity="0.6" />
    </svg>
  );
}

export default function ScatteredPhotos({
  dimNearButton = false,
}: {
  dimNearButton?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {SPOTS.map((s, i) => {
        const hidden = !!(s.nearButton && dimNearButton && isMobile);
        return (
          // Niveau 1 : gère l'apparition / disparition (fondu + glissement),
          // exactement comme l'entrée initiale au chargement de la page.
          <motion.div
            key={i}
            className={`absolute ${s.hideOnMobile ? "hidden sm:block" : ""}`}
            style={{
              top: s.top,
              bottom: s.bottom,
              left: s.left,
              right: s.right,
              width: s.w,
              height: s.h,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: hidden ? 0 : 0.9,
              y: hidden ? 20 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: hidden ? 0 : s.delay,
            }}
          >
            {/* Niveau 2 : le flottement continu, indépendant du fondu ci-dessus */}
            <motion.div
              className="h-full w-full"
              animate={{
                rotate: [s.rotate - 2, s.rotate + 2, s.rotate - 2],
                y: [0, -10, 0],
              }}
              transition={{
                rotate: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div className="relative h-full w-full rounded-2xl border-[3px] border-white bg-white p-1.5 shadow-[0_16px_34px_rgba(43,27,51,0.22)]">
                <div className="h-full w-full overflow-hidden rounded-xl">
                  {s.src ? (
                    <img src={s.src} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <PlaceholderPortrait from={s.bg[0]} to={s.bg[1]} />
                  )}
                </div>
                {!s.src && (
                  <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-ink/60 shadow-sm">
                    📸 remplace-moi
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
