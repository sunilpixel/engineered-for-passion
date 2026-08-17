const StatCard = ({ item, index, side }: StatCardProps) => {
  const offset =
    index === 1
      ? side === "left"
        ? "sm:mr-2 sm:mr-6 3xl:mr-8"
        : "sm:ml-2 sm:ml-6 3xl:ml-8"
      : "";

  return (
    <div className={offset}>
      <p className="font-sf-pro font-bold xl:text-2xl md:text-xl sm:text-lg text-base leading-auto text-eerieBlack dark:text-white 3xl:text-[30px]">
        {item.value}
      </p>

      <p className="font-sf-pro leading-auto text-eerieBlack dark:text-white/60 text-sm 3xl:text-base">
        {item.label}
      </p>
    </div>
  );
};

export default StatCard;
