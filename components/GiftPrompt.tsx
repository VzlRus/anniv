"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CakeCharacter from "@/components/CakeCharacter";

const MAX_STEP = 5;

export default function GiftPrompt() {
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
  }

  function clickNon() {
    setOutcome("non");
  }

  if (outcome !== "none") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mt-8 flex w-full max-w-sm flex-col items-center gap-4 px-2 text-center"
      >
        <p className="font-display text-2xl text-bubblegum sm:text-3xl">
          {outcome === "non"
            ? "Fait moi signe pour avoir ton cadeau quand même 😏💗"
            : "Fait moi signe pour avoir ton cadeau"}
        </p>

        <div className="relative flex w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl border-2 border-white bg-white/40 py-6 shadow-md">
          <CakeCharacter />
        </div>

        <p className="text-sm text-ink/60">Joyeux anniversaire, chouchou 💖</p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mt-8 flex w-full max-w-sm flex-col items-center gap-5 px-2"
      >
        <p className="font-display text-2xl text-ink sm:text-3xl text-center">
          T'veux ton cadeau mousso ? 🎁
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <motion.button
            onClick={clickOui}
            animate={{ scale: ouiScale }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            whileTap={{ scale: ouiScale * 0.92 }}
            className="rounded-full bg-mint px-5 py-2.5 font-display text-base text-ink shadow-[0_6px_0_#4fae8c] sm:px-7 sm:py-3 sm:text-lg"
          >
            Oui
          </motion.button>

          <motion.button
            onClick={clickNon}
            animate={{ scale: nonScale }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            whileTap={{ scale: nonScale * 0.95 }}
            className="rounded-full bg-peach px-5 py-2.5 font-display text-base text-ink shadow-[0_6px_0_#d9836a] sm:px-7 sm:py-3 sm:text-lg"
          >
            Non
          </motion.button>
        </div>

        {step > 0 && step < MAX_STEP && (
          <p className="text-xs text-ink/40">
            Hé, {"\""}Oui{"\""} tu es sûre ? 👀
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
