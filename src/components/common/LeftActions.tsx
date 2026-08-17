import { leftMenuItems } from "./Helper";
import { CurveBorderIcon, TipbgIcon } from "./Icons";

type LeftActionsProps = {
  activeId: number | null;
  onSelect: (id: number) => void;
};

const LeftActions = ({ activeId, onSelect }: LeftActionsProps) => {
  return (
    <div className="md:flex hidden items-center shrink-0">
      <CurveBorderIcon className="3xl:max-w-11 max-w-10 w-full dark:stroke-subtleWhite/68 stroke-eerieBlack" />

      <div className="flex flex-col justify-between 3xl:gap-6 gap-4">
        {leftMenuItems.map((item, index) => (
          <div key={item.id} className="group relative flex items-center">
            <button
              type="button"
              onClick={() => onSelect(item.id)}
              className={`menu-buttons gradient-border relative z-20 ${
                index === 1 ? "-ml-4.75" : ""
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
                      className={`pointer-events-none absolute top-1/2 z-40 flex -translate-y-1/2 translate-x-4 items-center whitespace-nowrap text-sm font-medium text-white text-[15px] font-sf-pro opacity-0 transition-all duration-300 ease-out  group-hover:opacity-100 group-hover:translate-x-8.75 scale-y-110 px-8 h-11 min-w-39.75 w-full text-center ${
                index === 1
                  ? "left-[calc(100%-32px)]"
                  : "left-[calc(100%-16px)]"
              }`}
                       >
                         <TipbgIcon className="absolute inset-0 h-full w-full" />
           
                         <p className="relative z-10 w-full">{item.tip}</p>
                       </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftActions;
