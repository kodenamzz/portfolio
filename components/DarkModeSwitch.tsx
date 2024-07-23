"use client";

import React from "react";
import { Switch } from "./ui/Switch";
import { Label } from "./ui/Label";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-3">
        <Label
          htmlFor="theme"
          className="flex gap-2 font-bold lg:text-2xl md:text-xl text-base items-center"
        >
          Light Mode <RiSunFill />
        </Label>
        <Switch
          id="theme"
          checked={theme === "dark"}
          onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
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
