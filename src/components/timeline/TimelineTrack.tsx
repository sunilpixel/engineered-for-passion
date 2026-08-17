"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { EASE, RED, STEPS } from "../common/Helper";
import ProgressTip from "../common/ProgressTip";

const EDGE_PADDING = 16;

export default function TimelineTrack({ step }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipX, setTooltipX] = useState(0);

  const clampTooltip = useCallback(() => {
    const track = trackRef.current;
    const tooltip = tooltipRef.current;

    if (!track || !tooltip) return;

    const trackRect = track.getBoundingClientRect();

    const width = tooltip.offsetWidth;

    const viewport = document.documentElement.clientWidth;

    const progress = STEPS.length > 1 ? step / (STEPS.length - 1) : 0;
    const anchor = trackRect.left + trackRect.width * progress;

    const left = anchor - width / 2;
    const right = anchor + width / 2;

    let shift = 0;

    if (left < EDGE_PADDING) {
      shift = EDGE_PADDING - left;
    } else if (right > viewport - EDGE_PADDING) {
      shift = viewport - EDGE_PADDING - right;
    }

    setTooltipX(shift);
  }, [step]);

  const setTooltipNode = useCallback(
    (node: HTMLDivElement | null) => {
      tooltipRef.current = node;
      if (node) clampTooltip();
    },
    [clampTooltip],
  );

  useEffect(() => {
    clampTooltip();

    window.addEventListener("resize", clampTooltip);

    return () => window.removeEventListener("resize", clampTooltip);
  }, [clampTooltip]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="3xl:mt-20 xl:mt-16 mt-10 "
    >
      <div
        ref={trackRef}
        className="relative mx-auto w-full max-w-[91%] md:max-w-[60%] lg:max-w-[70%] 2xl:max-w-full  "
      >
        {/* Timeline */}
        <motion.div
          className="top-0 h-px origin-left -translate-y-1/2 rounded-[40px] border-y border-dashed py-px"
          style={{ borderColor: RED }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
        />
        {/* Completed steps */}
        {STEPS.map((_, i) =>
          i < step ? (
            <div
              key={i}
              style={{ left: `${(i / (STEPS.length - 1)) * 100}%` }}
              className="absolute top-0 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-deepRed/20"
            >
              <motion.span
                className="size-2.75 rounded-full"
                style={{ background: RED }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
            </div>
          ) : null,
        )}
        {/* Current step */}
        <motion.div
          className="absolute top-0"
          animate={{ left: `${(step / (STEPS.length - 1)) * 100}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        >
          <div
            className="absolute bottom-6.25 left-0"
            style={{ transform: `translateX(calc(-50% + ${tooltipX}px))` }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                ref={setTooltipNode}
                key={step}
                className="whitespace-nowrap text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <ProgressTip step={step} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Car */}
          <div className="absolute left-1/2 top-0 size-11.5 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#322728] p-1 shadow-innerHighlightLight">
            <div className="moving-car-border rounded-full p-1">
              <Image
                src="/images/png/red-car.png"
                alt="CAR"
                width={46}
                height={46}
                className="relative z-10 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
