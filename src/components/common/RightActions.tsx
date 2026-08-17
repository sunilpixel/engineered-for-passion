import { RightMenuItems } from "./Helper";
import { CurveBorderIcon } from "./Icons";

const RightActions = ({ activeId, onSelect }: RightActionsProps) => {
  return (
    <div className="md:flex hidden items-center">
      <div className="flex flex-col justify-between 3xl:gap-6 gap-4">
        {RightMenuItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`menu-buttons gradient-border ${
              index === 1 ? "ml-4.75" : ""
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

      <CurveBorderIcon className="3xl:max-w-11 max-w-10 w-full dark:stroke-subtleWhite/68 stroke-eerieBlack rotate-180" />
    </div>
  );
};

export default RightActions;
