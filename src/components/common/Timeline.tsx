"use client";

import { AnimatePresence, MotionConfig } from "motion/react";
import { useEffect, useState } from "react";
import TimelineDelivery from "../timeline/TimelineDelivery";
import TimelineHero from "../timeline/TimelineHero";
import TimelineThanks from "../timeline/TimelineThanks";
import TimelineTrack from "../timeline/TimelineTrack";
import { CUES } from "./Helper";

export default function Timeline() {
  const [run, setRun] = useState(0);
  const [cue, setCue] = useState(CUES[0]);

  const [, phase, step] = cue;

  // const FREEZE: number | null = 0;

  useEffect(() => {
    // if (FREEZE !== null) {
    //   setCue(CUES[FREEZE]);
    //   return;
    // }

    setCue(CUES[0]);

    const timers = CUES.map((c) => setTimeout(() => setCue(c), c[0]));

    return () => timers.forEach(clearTimeout);
  }, [run]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative max-w-246.75 grow mx-auto  h-full timeline-layers isolate">
        <AnimatePresence>
          {(phase === "hero" || phase === "warp") && (
            <TimelineHero key="hero" phase={phase} />
          )}
        </AnimatePresence>
        <span className="timeline-inside-layers" />
        <span className="timeline-inside-layers-2" />
        <AnimatePresence>
          {phase === "track" && <TimelineTrack step={step} />}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {phase === "delivery" && <TimelineDelivery key="delivery" />}
          {phase === "thanks" && (
            <TimelineThanks key="thanks" onHome={() => setRun((r) => r + 1)} />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
