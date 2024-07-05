"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import Lottie from "lottie-react";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  id,
  img,
  spareImg,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handelCopyEmail = () => {
    navigator.clipboard.writeText("abdkode.p@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };
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
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // background animation
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-normal dark:font-extralight text-neutral-700 dark:text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div
            className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ${
              id === 6 && "text-white"
            }`}
          >
            {title}
          </div>

          {/* github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/*My Tech Stack */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript"].map((stack) => (
                  <span
                    key={stack}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-neutral-300/40 dark:bg-[#10132E]"
                  >
                    {stack}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-neutral-300/40 dark:bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-neutral-300/40 dark:bg-[#10132E]"></span>
                {["Laravel", "NodeJs", "MongoDB"].map((stack) => (
                  <span
                    key={stack}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-neutral-300/40 dark:bg-[#10132E]"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoPlay={copied}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="dark:!bg-[#161a31]"
                handleClick={handelCopyEmail}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
