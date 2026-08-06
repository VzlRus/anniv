"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CakeCharacter from "@/components/CakeCharacter";

const MAX_STEP = 3;

export default function GiftPrompt({ onReveal }: { onReveal?: () => void }) {
  const [step, setStep] = useState(0);
  const [outcome, setOutcome] = useState<"none" | "oui" | "non">("none");

  const ouiScale = Math.max(1 - step * 0.14, 0.4);
  const nonScale = Math.min(1 + step * 0.16, 1.65);

  function clickOui() {
    if (step < MAX_STEP) {
      setStep((s) => s + 1);
      return;
    }
    setOutcome("oui");
    onReveal?.();
  }

  function clickNon() {
    setOutcome("non");
    onReveal?.();
  }

  if (outcome !== "none") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="relative z-10 mt-8 flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl border border-white/60 bg-white/60 px-5 py-6 text-center shadow-[0_16px_40px_rgba(43,27,51,0.15)] backdrop-blur-sm"
      >
        <p className="font-display text-xl leading-snug text-bubblegum sm:text-2xl">
          {outcome === "non"
            ? "Fait moi signe pour avoir ton cadeau quand même 😏💗"
            : "Ta cliquer dh🤣 Fait moi signe pour avoir ton cadeau"}
        </p>

        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-white bg-white/40 py-6 shadow-md">
          <CakeCharacter />
        </div>

        <p className="font-display text-base text-ink/70 sm:text-lg">
          Joyeux anniversaire, chouchou 💖
        </p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="relative z-10 mt-8 flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl border border-white/60 bg-white/60 px-5 py-6 shadow-[0_16px_40px_rgba(43,27,51,0.15)] backdrop-blur-sm"
      >
        <motion.span
          className="text-3xl"
          animate={{ y: [0, -6, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🎁
        </motion.span>

        <p className="text-center font-display text-xl text-ink sm:text-2xl">
          T&apos;veux ton cadeau  ?
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <motion.button
            onClick={clickOui}
            animate={{
              scale: ouiScale,
              boxShadow: [
                "0 6px 0 #4fae8c, 0 0 0px rgba(139,232,196,0.6)",
                "0 6px 0 #4fae8c, 0 0 18px rgba(139,232,196,0.6)",
                "0 6px 0 #4fae8c, 0 0 0px rgba(139,232,196,0.6)",
              ],
            }}
            transition={{
              scale: { type: "spring", stiffness: 260, damping: 16 },
              boxShadow: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: ouiScale * 1.06 }}
            whileTap={{ scale: ouiScale * 0.92 }}
            className="flex items-center gap-1.5 rounded-full bg-mint px-6 py-3 font-display text-base text-ink sm:px-8 sm:py-3.5 sm:text-lg"
          >
            💚 Oui
          </motion.button>

          <motion.button
            onClick={clickNon}
            animate={{ scale: nonScale }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            whileHover={{ scale: nonScale * 1.04 }}
            whileTap={{ scale: nonScale * 0.95 }}
            className="flex items-center gap-1.5 rounded-full bg-peach px-6 py-3 font-display text-base text-ink shadow-[0_6px_0_#d9836a] sm:px-8 sm:py-3.5 sm:text-lg"
          >
            🙈 Non
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {step > 0 && step < MAX_STEP && (
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-full bg-ink/5 px-3 py-1 text-xs text-ink/50"
            >
              Hé, {'"'}Oui{'"'} tu es sûre ? 👀
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}