import { RightMenuItems } from "./Helper";
import { CurveBorderIcon, TipbgIcon } from "./Icons";

const RightActions = ({ activeId, onSelect }: RightActionsProps) => {
  return (
    <div className="md:flex hidden items-center shrink-0">
      <div className="flex flex-col justify-between 3xl:gap-6 gap-4">
        {RightMenuItems.map((item, index) => (
          <div key={item.id} className="group relative flex items-center">
            <button
              type="button"
              onClick={() => onSelect(item.id)}
              className={`menu-buttons gradient-border relative z-20 ${
                index === 1 ? "ml-4.75" : ""
              } ${
                activeId === item.id
                  ? "dark:bg-deepRed/65 bg-deepRed dark:shadow-innershine shadow-innershineLight"
                  : "dark:bg-darkCharcoal bg-eerieBlack shadow-innerHighlight"
              }`}
            >
              <div className="relative z-10">{item.icon}</div>
            </button>

            {/* LEFT TIP */}
            <div
              className={`pointer-events-none absolute top-1/2 z-40 flex -translate-y-1/2 translate-x-4 items-center whitespace-nowrap text-sm font-medium text-white text-[15px] font-sf-pro opacity-0 transition-all duration-300 ease-out  group-hover:opacity-100 group-hover:-translate-x-8.75 scale-y-110 px-8 h-11 min-w-39.75 w-full text-center ${
                index === 1
                  ? "right-[calc(100%-32px)]"
                  : "right-[calc(100%-16px)]"
              }`}
            >
              <TipbgIcon className="absolute inset-0 h-full w-full rotate-180" />
              <p className="relative z-10 w-full">{item.tip}</p>
            </div>
          </div>
        ))}
      </div>

      <CurveBorderIcon className="3xl:max-w-11 max-w-10 w-full dark:stroke-subtleWhite/68 stroke-eerieBlack rotate-180" />
    </div>
  );
};

export default RightActions;
