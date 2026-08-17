import Image from "next/image";
import { carStats } from "./common/Helper";
import StatCard from "./common/StatCard";
const Document = () => {
  const leftStats = carStats.filter((item) => item.side === "left");
  const rightStats = carStats.filter((item) => item.side === "right");

  return (
    <>
      <div className="document-layers relative isolate grow">
        <span className="document-inside-layers" />
        <div className="relative z-10 flex sm:flex-row flex-col mx-auto w-fit gap-6 sm:gap-0">
          {/* LEFT STATS */}
          <div className="flex sm:flex-col justify-between gap-4 xl:pr-8 sm:pr-6 sm:text-right text-left">
            {leftStats.map((item, index) => (
              <StatCard
                key={item.label}
                item={item}
                index={index}
                side="left"
              />
            ))}
          </div>

          {/* CAR */}
          <div className="relative ">
            <Image
              className="relative z-10 aspect-square w-full 3xl:max-w-85.5 max-w-72 rounded-full object-cover dark:shadow-lightSoft shadow-darkSoft"
              src="/images/png/black-car.png"
              alt="black car"
              width={342}
              height={342}
              priority
            />
            <Image
              className="absolute bottom-[5%] left-1/2 z-0 h-[312%] w-[130%] -translate-x-1/2 object-fill opacity-0 dark:opacity-100"
              src="/images/png/light-up.png"
              alt="black car"
              width={189}
              height={342}
              priority
            />{" "}
            <Image
              className="absolute bottom-[5%] left-1/2 z-0 h-[312%] w-[130%] -translate-x-1/2 object-fill dark:opacity-0 opacity-100"
              src="/images/png/dark-light-up.png"
              alt="light-up"
              width={189}
              height={342}
              priority
            />
          </div>

          {/* RIGHT STATS */}
          <div className="flex sm:flex-col justify-between gap-4 xl:pl-8 sm:pl-6  text-left ">
            {rightStats.map((item, index) => (
              <StatCard
                key={item.label}
                item={item}
                index={index}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
