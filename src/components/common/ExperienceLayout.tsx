"use client";
import { useState } from "react";
import CenterContent from "../CenterContent";
import Header from "./Header";
import HeroContent from "./HeroContent";
import LeftActions from "./LeftActions";
import RightActions from "./RightActions";
import Drawer from "./Drawer";

const ExperienceLayout = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className=" flex flex-col overflow-hidden">
      <Header />
      <HeroContent />
      <div className="flex justify-between items-center gap-4 3xl:max-w-[1752px] max-w-[1440px] px-3 w-full mx-auto grow lg:mt-20 mt-10">
        <LeftActions activeId={activeId} onSelect={setActiveId} />
        <CenterContent activeId={activeId} />
        <RightActions activeId={activeId} onSelect={setActiveId} />
      </div>
      <div className="h-[252px] text-white">ewds</div>
      {/* <Footer /> */}

      <button
        type="button"
        onClick={() => setIsDrawerOpen(true)}
        className="text-white md:hidden block"
      >
        menu
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeId={activeId}
        onSelect={setActiveId}
      />
    </div>
  );
};

export default ExperienceLayout;
