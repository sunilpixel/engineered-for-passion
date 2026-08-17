import {
  BackArrowIcon,
  ButtonBlur,
  CheckIcon,
  DownloadIcon,
  ShareIcon,
} from "./Icons";
import Link from "next/link";

const HeroContent = () => {
  return (
    <section className="common-container 3xl:mb-15.25 mb-10 relative z-10">
      <div className="flex items-center justify-between">
        <button className="dark:bg-casualBlack bg-eerieBlack backdrop-blur-[7px] rounded-full 3xl:size-12 size-10 flex items-center justify-center">
          <BackArrowIcon />
        </button>
        <div className="flex items-center gap-2.5 3xl:mb-0 mb-4">
          <Link
            className="dark:bg-darkGray/50 bg-darkGray 3xl:size-12 size-10 flex items-center justify-center rounded-full relative overflow-hidden"
            href="/"
          >
            <DownloadIcon />
            <ButtonBlur className="absolute bottom-[0%] w-full left-0 h-full rounded-full" />
          </Link>
          <button className="dark:bg-darkGray/50 bg-darkGray 3xl:size-12 size-10  flex items-center justify-center rounded-full relative overflow-hidden">
            <ShareIcon />{" "}
            <ButtonBlur className="absolute bottom-[0%] w-full left-0 h-full rounded-full" />
          </button>
          <button className="bg-deepRed 3xl:size-12 size-10 flex items-center justify-center rounded-full backdrop-blur-[14px] relative overflow-hidden">
            <CheckIcon />{" "}
            <ButtonBlur className="absolute bottom-[0%] w-full left-0 h-full rounded-full" />
          </button>
        </div>
      </div>
      <h1 className="font-shrikhand italic uppercase 3xl:text-6xl xl:text-5xl text-4xl tracking-[1%] dark:text-wildSand text-eerieBlack text-center">
        Engineered for <span className="text-guardsman">passion</span>
      </h1>
      <div className="font-semibold 3xl:text-lg w-fit mx-auto flex 2xl:text-base text-sm tracking-[1%] leading-9.75 dark:text-white text-eerieBlack opacity-68 font-sf-pro text-center">
        Precision.{" "}
        <p>
          Power{" "}
          <span className="bg-guardsman w-6.5 h-1 flex rounded-[40px] ml-auto" />
        </p>
        . Performance
      </div>
    </section>
  );
};

export default HeroContent;
