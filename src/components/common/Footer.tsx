"use client";

import { LAPS, LINE } from "./Helper";

export default function Footer({ step = 3 }: { step?: number }) {
  return (
    <div className="relative h-52 w-full overflow-hidden md:h-64 xl:h-86.75">
      <svg
        viewBox="0 0 1894 347"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="trackFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C40504" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C40504" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={`${LINE} L1894 347 L0 347 Z`} fill="url(#trackFill)" />

        <path
          d={LINE}
          fill="none"
          stroke="#C40504"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="11 11"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {LAPS.map((lap, i) => {
        const active = step === i + 1;

        return (
          <div
            key={lap.title}
            className="absolute bottom-6 flex -translate-x-1/2 flex-col items-center"
            style={{
              left: `${(lap.x / 1894) * 100}%`,
              top: `${(lap.y / 347) * 100}%`,
            }}
          >
            {/* dot */}
            <span className="relative -mt-2 flex size-4 lg:-mt-3 lg:size-6">
              {active && (
                <span className="absolute size-full animate-ping rounded-full bg-deepRed opacity-60" />
              )}
              <span
                className={`size-full rounded-full transition-colors ${
                  active ? "bg-deepRed" : "dark:bg-babyGrey bg-eerieBlack"
                }`}
              />
            </span>

            {/* dashed connector */}
            <span className="w-px flex-1 dark:border-white/50 bg-eerieBlack/20 border  border-dashed" />

            <p
              className={`mt-1.25 whitespace-nowrap sm:text-sm text-xs leading-none transition-colors lg:text-base ${
                active
                  ? "font-black text-eerieBlack dark:text-white"
                  : "font-semibold text-eerieBlack/68 dark:text-white/68"
              }`}
            >
              {lap.title}
            </p>

            <p
              className={`mt-3 hidden whitespace-nowrap sm:text-sm text-xs font-medium leading-none transition-colors sm:block lg:text-[17px] ${
                active
                  ? "dark:text-vibrant text-eerieBlack"
                  : "dark:text-vibrant/40 text-eerieBlack/40"
              }`}
            >
              {lap.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}
