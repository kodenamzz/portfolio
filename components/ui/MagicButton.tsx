import { cn } from "@/utils/cn";
import React from "react";

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  containerClasses,
  otherClasses = "",
}: {
  title: string;
  icon: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  containerClasses?: string;
  otherClasses?: string;
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex justify-center items-center h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10",
        containerClasses
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-[calc(100%-1px)] w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-100 dark:bg-slate-950 px-7 text-sm font-medium text-black-100 dark:text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
