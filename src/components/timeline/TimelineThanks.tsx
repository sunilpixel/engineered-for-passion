"use client";

import { motion } from "motion/react";
import { EASE } from "../common/Helper";

export default function TimelineThanks({ onHome }: timelineProps) {
  return (
    <motion.div
      className=" flex flex-col items-center justify-between lg:gap-7 gap-4 h-auto"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <p className="3xl:text-6xl xl:text-5xl lg:text-4xl text-2xl font-shrikhand tracking-[1%] text-wildSand">
        THANK YOU
      </p>

      <button
        type="button"
        onClick={onHome}
        className="bg-white/20 rounded-full px-4 w-full justify-center max-w-33.75 flex items-center lg:min-h-12 min-h-10 md:text-xl text-sf-pro text-white tracking-[1%] 3xl:mt-37.5 xl:mt-20 mt-10 xl:text-base text-sm"
      >
        Home
      </button>
    </motion.div>
  );
}
