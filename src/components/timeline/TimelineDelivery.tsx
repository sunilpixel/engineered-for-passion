import { motion } from "motion/react";
import Image from "next/image";
import { EASE } from "../common/Helper";

export default function TimelineDelivery() {
  return (
    <motion.div
      key="truck"
      className="flex items-center justify-center "
      initial={{ x: "55%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{
        x: "130%",
        transition: {
          duration: 2.3,
          ease: [0.5, 0, 0.75, 0],
        },
      }}
      transition={{
        duration: 0.75,
        ease: EASE,
      }}
    >
      {/* Car */}
      <motion.div
        className="relative aspect-square moving-car-border shadow-innerHighlightLight overflow-hidden rounded-full gap-4 sm:block hidden grow"
        initial={{ scale: 0.26, x: 0 }}
        animate={{ scale: 1, x: 350, opacity: 0 }}
        transition={{
          scale: { duration: 0.7, ease: EASE },
          x: { duration: 0.7, delay: 1.4, ease: EASE },
          opacity: { duration: 0.25, delay: 1.85 },
        }}
      >
        <Image
          src="/images/png/red-car.png"
          alt="Your car"
          width={207}
          height={207}
          className="object-cover xl:max-w-51.75 max-w-35"
        />
      </motion.div>
      {/* Truck */}
      <div className="relative max-w-210.5 w-full">
        <Image
          className="max-w-32.5 w-full object-cover block md:hidden mx-auto"
          src="/images/png/logo.png"
          width={130}
          height={59}
          alt="logo"
        />

        <Image
          src="/images/png/truck.png"
          alt="Delivery truck"
          width={1200}
          height={460}
          className="h-auto w-full object-cover"
        />
        <div className="md:absolute left-[41%] md:top-[42%] md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center flex-col">
          <Image
            className="max-w-32.5 w-full object-cover md:block hidden"
            src="/images/png/logo.png"
            width={130}
            height={59}
            alt="logo"
          />
          <p className="leading-9.75 3xl:text-[40px] 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-sf-pro font-extrabold tracking-[1%] md:text-black/80 text-white">
            VEICHLE DELIVERY
          </p>
        </div>
      </div>
    </motion.div>
  );
}
