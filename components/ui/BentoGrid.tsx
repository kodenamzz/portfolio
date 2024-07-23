"use client";

import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border dark:border-white/[0.1] border-gray/[0.1]   dark:bg-[#04071D] dark:bg-gradient-to-r dark:from-[#04071D] dark:to-[#0C0E23] bg-neutral-200 bg-gradient-to-r from-neutral-200/80 to-neutral-200/80",
        className
      )}
      // style={{
      //   backgroundColor: "rgb(4,7,29)",
      //   background:
      //     "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      // }}
    >
      {children}
    </div>
  );
};
