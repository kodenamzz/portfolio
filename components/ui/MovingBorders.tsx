"use client";
import React from "react";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

export function MovingButton({
  borderRadius = "1.75rem",
  children,
  as,
  containerClassName,
  borderClassName,
  duration,
  className,
  href,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  href?: string;
  [key: string]: unknown;
}) {
  const sharedProps = {
    className: cn(
      "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2",
      containerClassName
    ),
    style: { borderRadius } as React.CSSProperties,
  };

  const inner = (
    <>
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="10%" ry="10%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-neutral-200/[0.8] dark:bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl dark:text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </>
  );

  if (href != null) {
    return (
      <Link href={href} {...otherProps} {...sharedProps}>
        {inner}
      </Link>
    );
  }

  const Component = as ?? "div";
  return React.createElement(
    Component,
    { ...otherProps, ...sharedProps },
    inner
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  [key: string]: unknown;
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <path
          fill="none"
          d="M 0,0 L 100,0 L 100,100 L 0,100 Z"
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
