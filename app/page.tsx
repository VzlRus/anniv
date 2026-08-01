"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Character from "@/components/Character";
import Balloons from "@/components/Balloons";
import ConfettiButton from "@/components/ConfettiButton";
import AmbientConfetti from "@/components/AmbientConfetti";
import NextLogo from "@/components/NextLogo";
import GiftPrompt from "@/components/GiftPrompt";
import ScatteredPhotos from "@/components/ScatteredPhotos";

const TITLE = "Joyeux Anniversaire Chouchou !";
const NEWS = "BREAKING NEWS";


export default function Home() {
  const [surprised, setSurprised] = useState(false);
  const [giftRevealed, setGiftRevealed] = useState(false);

  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-x-hidden bg-cream px-4 py-12 pb-[calc(3rem+env(safe-area-inset-bottom))] text-ink sm:px-6 sm:py-16">
      <Balloons />
      <AmbientConfetti />
      <ScatteredPhotos dimNearButton={surprised && !giftRevealed} />

      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lilac/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sun/30 blur-3xl" />

      <span className="relative z-10 mb-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-display italic text-ink/50 shadow-sm">
        La Reine du Jour 👑
      </span>

      <span className="relative z-10 mb-3 flex flex-col items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-bubblegum shadow-sm">
          <span>Pour toi</span>
          <span className="mt-1">✨ Camara Amy ✨</span>
      </span>

      {/* shimmering animated title */}
      <h1
        className="relative z-10 bg-clip-text text-center font-display text-4xl font-semibold text-transparent sm:text-6xl md:text-7xl"
        style={{
          backgroundImage:
            "linear-gradient(100deg, #2B1B33 20%, #FF6FA5 45%, #D4AF7A 60%, #2B1B33 80%)",
          backgroundSize: "250% auto",
          animation: "shimmer 5s ease-in-out infinite",
        }}
      >
        {TITLE}
      </h1>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <p className="relative z-10 mt-5 max-w-md text-center font-body text-base text-ink/70 sm:text-lg">
        <span
          className="relative z-10 bg-clip-text text-center font-display text-xl font-semibold text-transparent sm:text-2xl md:text-7xl"
          style={{
            backgroundImage:
              "linear-gradient(100deg, #2B1B33 20%, #FF6FA5 45%, #D4AF7A 60%, #2B1B33 80%)",
            backgroundSize: "250% auto",
            animation: "shimmer 5s ease-in-out infinite",
        }}
        >
          {NEWS}
        </span>
        🚨
        <span className="mt-2 block font-medium text-gray-900">
          Une légende est née aujourd'hui ! <br />
          Après plusieurs années d'existence, les scientifiques🔬 confirment 
          officiellement que ta beauté 😍✨et tes "zyeux bridé chine"😂 reste un mystère impossible à expliquer 🤯💖,
          et je remercie la vie🙏❤️ de t'avoir mise sur mon chemin🌹💫.
          Je te souhaite une journée remplie de bonheur😊✨, de rires🤣, d'amour🥰, de cadeaux🎁,
          et surtout beaucoup d'argent💰💵🤑💸beaucoup hin,beaucoup, pour t'offrir tout ce dont tu rêves. <br />Joyeux anniversaire chouchou ! 💖✨
        </span> 

      </p>

      {/* couple of mascots with captions */}
      <div className="relative z-10 mt-10 flex items-end justify-center gap-2 sm:gap-6">
        <div className="flex flex-col items-center">
          <span className="mb-2 max-w-[92px] rounded-2xl bg-white/70 px-2 py-1 text-center text-[10px] font-semibold leading-tight text-bubblegum shadow-sm sm:max-w-none sm:rounded-full sm:px-3 sm:text-[11px]">
            mxi doudou
          </span>
          <Character color="#FF6FA5" cheek="#FF9FC0" delay={0} size={140} hat />
        </div>

        <div className="relative mb-8 text-2xl sm:mb-10 sm:text-3xl">
          💗
          <motion.span
            className="absolute -right-3 -top-3 text-sm"
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.2 }}
          >
            ✦
          </motion.span>
          <motion.span
            className="absolute -left-3 top-0 text-xs"
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.8 }}
          >
            ✧
          </motion.span>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 max-w-[92px] rounded-2xl bg-white/70 px-2 py-1 text-center text-[10px] font-semibold leading-tight text-lilac shadow-sm sm:max-w-none sm:rounded-full sm:px-3 sm:text-[11px]">
            Joyeux anniversaire
          </span>
          <Character color="#B892FF" cheek="#D8C4FF" delay={0.4} flip size={140} grimace />
        </div>
      </div>

      <div className="relative z-10 mt-12">
        <ConfettiButton
          label="Clique moiiii 🥳"
          onFire={() => setSurprised(true)}
        />
      </div>

      <motion.p
        className="relative z-10 mt-6 text-center font-display text-2xl text-bubblegum sm:text-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={surprised ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        J't&apos;m bien mon humain préférer 💖
      </motion.p>

      {surprised && <GiftPrompt onReveal={() => setGiftRevealed(true)} />}

      <footer className="relative z-10 mt-16 flex max-w-xs flex-wrap items-center justify-center gap-1.5 text-center text-[11px] leading-relaxed text-ink/35 sm:max-w-md">
        <span>fait avec</span>
        <motion.span
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        >
          🤍
        </motion.span>
      </footer>
    </main>
  );
}
