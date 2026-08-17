"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const Header = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="common-container flex items-center justify-between gap-4 3xl:py-4.5 py-2 relative z-10  mb-5 border-b dark:border-transparent border-lightGray/50">
      <Link href="/">
        <Image
          className="object-cover dark:brightness-150 brightness-50"
          src="/images/png/logo.png"
          alt="logo"
          width={130}
          height={59}
        />
      </Link>
      <button
        onClick={toggleTheme}
        className="relative flex 3xl:h-11.5 h-9 w-24.5 items-center justify-between rounded-full bg-tuatara/30 px-5"
        aria-label="Toggle theme"
      >
        <div
          className={`absolute h-12 w-12 rounded-full transition-all duration-300 ${
            dark ? "translate-x-full" : "translate-x-0"
          }`}
        />

        <SunIcon
          className={`relative z-10 transition-colors ${
            dark
              ? "stroke-lightGray/50"
              : "dark:stroke-lightGray stroke-yellow-600"
          }`}
        />

        <MoonIcon
          className={`relative z-10 transition-colors ${
            dark
              ? "dark:stroke-lightGray "
              : "dark:stroke-lightGray/50 stroke-lightGray/60"
          }`}
        />
      </button>
    </nav>
  );
};

export default Header;
