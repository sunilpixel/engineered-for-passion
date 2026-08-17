import { leftMenuItems } from "./Helper";
import { CurveBorderIcon } from "./Icons";

const LeftActions = ({ activeId, onSelect }: LeftActionsProps) => {
  return (
    <div className="md:flex hidden items-center">
      <CurveBorderIcon className="3xl:max-w-11 max-w-10 w-full dark:stroke-subtleWhite/68 stroke-eerieBlack" />

      <div className="flex flex-col justify-between 3xl:gap-6 gap-4">
        {leftMenuItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`menu-buttons gradient-border ${
              index === 1 ? "-ml-4.75" : ""
            } ${
              activeId === item.id
                ? "dark:bg-deepRed/65 bg-deepRed dark:shadow-innershine shadow-innershineLight"
                : "dark:bg-darkCharcoal bg-eerieBlack shadow-innerHighlight "
            }`}
          >
            <div className="relative z-10">{item.icon}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftActions;
