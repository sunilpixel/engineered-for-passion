import { STEPS } from "./Helper";
import { ClipPathbgIcon } from "./Icons";

const ProgressTip = ({ step }: ProgressTipProps) => {
  return (
    <div className="relative min-w-65.25 px-6 py-6 xl:py-10">
      <ClipPathbgIcon className="absolute inset-0 z-0 h-full w-full" />

      <p className="relative z-30 font-sf-pro text-sm font-black text-eerieBlack dark:text-white lg:text-base">
        {STEPS[step].title}
      </p>

      <p className="relative z-30 mt-1 font-sf-pro text-sm font-medium text-eerieBlack dark:text-vibrant lg:text-[17px]">
        {STEPS[step].sub}
      </p>
    </div>
  );
};

export default ProgressTip;
