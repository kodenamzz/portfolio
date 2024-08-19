"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "./ui/Switch";
import { Label } from "./ui/Label";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const DarkModeSwitch = () => {
  const t = useTranslations("DarkModeSwitch");
  const { setTheme, theme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckSwitch = (value: boolean) => {
    // setIsChecked(value); // fix not checked at first time
    setTheme(value ? "dark" : "light");
  };

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  return (
    <div className="flex justify-center flex-col items-center relative z-50 mb-20 md:mb-28 w-full">
      <p className="text-sm text-center lg:text-start font-medium dark:text-blue-100 text-black-100 mb-4">
        {t("PowerOfDarkMode")}
      </p>
      <div className="flex items-center space-x-3">
        <Label
          htmlFor="theme"
          className="flex gap-2 font-bold lg:text-2xl md:text-xl text-base items-center"
        >
          {t("LightMode")} <RiSunFill />
        </Label>
        <Switch
          name="theme"
          aria-label="theme-switch"
          id="theme"
          checked={isChecked}
          onCheckedChange={handleCheckSwitch}
        />
        <Label
          htmlFor="theme"
          className="flex gap-2 font-bold lg:text-2xl md:text-xl text-base items-center"
        >
          <RiMoonFill />
          {t("DarkMode")}
        </Label>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
