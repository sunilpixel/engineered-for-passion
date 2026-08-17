"use client";

import Image from "next/image";
import { leftMenuItems, RightMenuItems } from "./Helper";
import Link from "next/link";

const Drawer = ({ isOpen, onClose, activeId, onSelect }: DrawerProps) => {
  const menuItems = [...leftMenuItems, ...RightMenuItems];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-dvh w-full max-w-105 bg-darkCharcoal transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                className="object-cover dark:brightness-150 brightness-50"
                src="/images/png/logo.png"
                alt="logo"
                width={130}
                height={59}
              />
            </Link>
            <button type="button" onClick={onClose} className="text-white">
              ✕
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="mt-6 flex flex-col gap-4 overflow-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect(item.id);
                  onClose();
                }}
                className={`flex items-center gap-4 rounded-xl p-4 transition ${
                  activeId === item.id
                    ? "bg-deepRed text-white"
                    : "bg-eerieBlack text-white/70"
                }`}
              >
                <div className="max-w-8">{item.icon}</div>

                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Drawer;
