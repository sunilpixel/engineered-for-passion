"use client";
import { useEffect, useState } from "react";
import CenterContent from "../CenterContent";
import Header from "./Header";
import HeroContent from "./HeroContent";
import LeftActions from "./LeftActions";
import RightActions from "./RightActions";
import Drawer from "./Drawer";
import { MenuIcon } from "./Icons";
import Footer from "./Footer";

const ExperienceLayout = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);
  return (
    <div className=" flex flex-col overflow-hidden">
      <Header />
      <HeroContent />
      <div className="flex justify-between items-center gap-4 3xl:max-w-[1752px] max-w-360 px-3 w-full mx-auto grow lg:mt-20 mt-10">
        <LeftActions activeId={activeId} onSelect={setActiveId} />
        <CenterContent activeId={activeId} />
        <RightActions activeId={activeId} onSelect={setActiveId} />
      </div>
      <Footer step={activeId ?? 3} />

      <button
        type="button"
        onClick={() => setIsDrawerOpen(true)}
        className=" md:hidden fixed! bottom-4 right-4 z-99 w-10 h-10 dark:shadow-innershine rounded-full 3xl:size-16 size-12 p-1 flex items-center justify-center overflow-hidden gradient-border dark:bg-darkCharcoal bg-eerieBlack shadow-innerHighlight  "
      >
        <MenuIcon className="w-6 h-6 fill-white text-white" />
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
