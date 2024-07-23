"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "./ui/Switch";
import { Label } from "./ui/Label";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
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
    <div className="flex justify-center relative z-50 mb-20 md:mb-28">
      <div className="flex items-center space-x-3">
        <Label
          htmlFor="theme"
          className="flex gap-2 font-bold lg:text-2xl md:text-xl text-base items-center"
        >
          Light Mode <RiSunFill />
        </Label>
        <Switch
          id="theme"
          checked={isChecked}
          onCheckedChange={handleCheckSwitch}
        />
        <Label
          htmlFor="theme"
          className="flex gap-2 font-bold lg:text-2xl md:text-xl text-base items-center"
        >
          <RiMoonFill />
          Dark Mode
        </Label>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
