"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { LightUpIcon } from "../common/Icons";

export default function TimelineHero({ phase }: timelineHeroProps) {
  return (
    <motion.div
      className=" grid place-items-center"
      animate={{ opacity: phase === "warp" ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative grid place-items-center">
        <LightUpIcon className="absolute top-[-10%] left-1/2 h-[80%] w-full max-w-95.5 -translate-x-1/2" />

        <motion.div
          className="relative w-full max-w-72 3xl:max-w-85.5"
          animate={
            phase === "warp"
              ? {
                  scaleX: 2.4,
                  scaleY: 0.6,
                  filter: "blur(14px)",
                }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: [0.7, 0, 0.84, 0],
          }}
        >
          <Image
            className="aspect-square w-full rounded-full object-cover shadow-deepSoft"
            src="/images/png/red-car.png"
            alt="Your car"
            width={342}
            height={342}
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
