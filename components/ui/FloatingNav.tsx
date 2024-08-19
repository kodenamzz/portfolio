"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useVisibleNav } from "@/context/NavProvider";

import { MdHome, MdPerson, MdWork, MdEmail, MdCode } from "react-icons/md";
import { useTranslations } from "next-intl";
import { GB, TH } from "country-flag-icons/react/3x2";

import { usePathname, useRouter } from "@/navigation";

type NavItem = {
  name: "Home" | "About" | "Projects" | "Experiences" | "Contact";
  link: string;
  icon: JSX.Element;
};

export const navItems: NavItem[] = [
  { name: "Home", link: "#home", icon: <MdHome /> },
  { name: "About", link: "#about", icon: <MdPerson /> },
  { name: "Projects", link: "#projects", icon: <MdCode /> },
  { name: "Experiences", link: "#experiences", icon: <MdWork /> },
  { name: "Contact", link: "#contact", icon: <MdEmail /> },
];

export const FloatingNav = ({
  className,
  locale,
}: {
  className?: string;
  locale: string;
}) => {
  const t = useTranslations("NavItems");

  const router = useRouter();
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();

  const { visibleNav, setVisibleNav } = useVisibleNav();
  const { setTheme, theme } = useTheme();
  const [mode, updateMode] = useState<string | undefined>("");

  console.log("locale", locale);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisibleNav(true);
      } else {
        setVisibleNav(false);
      }
    }
  });

  const rerender = useCallback(() => {
    updateMode(theme);
  }, [theme]);

  // const handleChangeLanguage = useCallback(
  //   (newLocale: string) => {
  //     router.push(pathname, { locale: newLocale });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [pathname]
  // );

  useEffect(() => {
    if (window.scrollY < 0.5) {
      setVisibleNav(true);
    }
  }, []);

  useEffect(() => {
    rerender();
  }, [rerender]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visibleNav ? 0 : -100,
          opacity: visibleNav ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit w-full fixed top-10 inset-x-0 mx-auto border rounded-full dark:bg-black-200/95 bg-gray-100/90 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5  items-center justify-center space-x-4 border-white/[0.2]",
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block">{navItem.icon}</span>
            <span className="block text-sm  max-sm:hidden">
              {t(navItem.name)}
            </span>
          </Link>
        ))}
        <button
          name="theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>{mode === "dark" ? <RiSunFill /> : <RiMoonFill />}</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
        {/* <button
          name="Language"
          title="Change Language"
          onClick={() => handleChangeLanguage(locale === "en" ? "th" : "en")}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>
            {locale === "en" ? <TH className="w-6" /> : <GB className="w-6" />}
          </span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
