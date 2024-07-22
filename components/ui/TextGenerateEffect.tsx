"use client";
import { useEffect, useState } from "react";
import {
  motion,
  stagger,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  primaryWords,
  animateWords,
  className,
}: {
  primaryWords: string;
  animateWords: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [startAnimate, setStartAnimate] = useState(false);

  const textIndex = useMotionValue(0);
  const baseText = useTransform(
    textIndex,
    (latest: number) => animateWords[latest] || ""
  );
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  let wordsArray = primaryWords.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: 1,
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === animateWords.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        } else if (
          updatedThisRound.get() === false &&
          latest > 50 &&
          !startAnimate
        ) {
          setStartAnimate(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPrimaryWords = () => {
    return (
      <>
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-neutral-80 opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          })}
          {animateWords.length > 0 &&
            animateWords[0].split(" ").map((word, idx) => {
              return (
                <motion.span
                  key={word + idx}
                  className={`text-purpleDark dark:text-purple opacity-0 ${
                    startAnimate ? "hidden" : "inline"
                  }`}
                >
                  {word}{" "}
                </motion.span>
              );
            })}
          <motion.span
            className={`text-purpleDark dark:text-purple opacity-0 ${
              startAnimate ? "inline" : "hidden"
            }`}
          >
            {displayText}
          </motion.span>
        </motion.div>
      </>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4 min-h-[100px] max-[500px]:min-h-[140px]">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderPrimaryWords()}
        </div>
      </div>
    </div>
  );
};
