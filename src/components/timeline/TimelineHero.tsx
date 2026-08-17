"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function TimelineHero({ phase }: timelineHeroProps) {
  return (
    <motion.div
      className=" grid place-items-center"
      animate={{ opacity: phase === "warp" ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
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
        {" "}
        <Image
          className="absolute bottom-[5%] left-1/2 z-0 h-[312%] w-[130%] -translate-x-1/2 object-fill dark:opacity-100 opacity-0"
          src="/images/png/light-up.png"
          alt="light-up"
          width={189}
          height={342}
          priority
        />
        <Image
          className="absolute bottom-[5%] left-1/2 z-0 h-[312%] w-[130%] -translate-x-1/2 object-fill dark:opacity-0 opacity-100"
          src="/images/png/dark-light-up.png"
          alt="light-up"
          width={189}
          height={342}
          priority
        />
        <Image
          className="relative z-10 aspect-square w-full max-w-72 rounded-full object-cover  dark:shadow-lightSoft shadow-darkSoft  3xl:max-w-85.5"
          src="/images/png/red-car.png"
          alt="Your car"
          width={342}
          height={342}
          priority
        />
      </motion.div>
    </motion.div>
  );
}
