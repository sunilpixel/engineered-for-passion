import React from "react";
import Image from "next/image";
import { LightUpIcon } from "./common/Icons";
import { carStats } from "./common/Helper";

const Document = () => {
  const leftStats = carStats.filter((item) => item.side === "left");
  const rightStats = carStats.filter((item) => item.side === "right");

  return (
    <>
      <LightUpIcon className="absolute top-[-10%] left-1/2 z-0 h-auto w-full max-w-95.5 -translate-x-1/2" />
      <div className=" relative mx-auto">
        <div className="relative z-10 flex">
          {/* LEFT STATS */}
          <div className="flex flex-col justify-between gap-4 xl:pr-8 sm:pr-6 pr-2 text-right">
            {leftStats.map((item, index) => (
              <div
                key={item.label}
                className={index === 1 ? "mr-2 sm:mr-6 3xl:mr-8" : ""}
              >
                <p className="font-sf-pro font-bold xl:text-2xl md:text-xl sm:text-lg xs:text-base text-sm leading-auto text-eerieBlack dark:text-white 3xl:text-[30px]">
                  {item.value}
                </p>

                <p className="font-sf-pro leading-auto text-eerieBlack dark:text-white/60 sm:text-sm xs:text-xs text-[10px] 3xl:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CAR */}
          <div className="relative ">
            <Image
              className="relative z-10 aspect-square w-full xl:max-w-72 max-w-52 rounded-full object-cover shadow-deepSoft 3xl:max-w-85.5"
              src="/images/png/black-car.png"
              alt="black car"
              width={342}
              height={342}
              priority
            />
          </div>

          {/* RIGHT STATS */}
          <div className="flex flex-col justify-between gap-4 xl:pl-8 sm:pl-6 pl-2 text-left">
            {rightStats.map((item, index) => (
              <div
                key={item.label}
                className={index === 1 ? "ml-2 sm:ml-6 3xl:ml-8" : ""}
              >
                <p className="font-sf-pro font-bold xl:text-2xl md:text-xl sm:text-lg xs:text-base text-sm leading-auto text-eerieBlack dark:text-white 3xl:text-[30px]">
                  {item.value}
                </p>

                <p className="font-sf-pro leading-auto text-eerieBlack dark:text-white/60 sm:text-sm xs:text-xs text-[10px] 3xl:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
