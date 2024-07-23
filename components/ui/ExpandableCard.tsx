"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FaLocationArrow } from "react-icons/fa";
import StackIcon from "tech-stack-icons";
import { useVisibleNav } from "@/context/NavProvider";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  isMobile: boolean;
}

interface Props {
  renderProject: (project: Project) => React.JSX.Element;
  projects: Project[];
}

const ExpandableCard = ({ renderProject, projects }: Props) => {
  const { setVisibleNav } = useVisibleNav();
  const [active, setActive] = useState<Project | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleExpandCard = (project: Project) => {
    setActive(project);
    setVisibleNav(false);
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[99999]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=" p-6 w-[80vw] sm:w-[570px]  h-3/4 md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-2xl overflow-x-auto custom-scrollbar"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="w-full relative flex items-center justify-center overflow-hidden sm:h-[40vh] h-[30vh] min-h-[250px] mb-10"
              >
                <div className="bg-neutral-300 dark:bg-[#13162D] rounded-2xl group-hover/card:shadow-3xl w-full h-full">
                  <Image
                    src="/bg.png"
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover"
                    alt="thumbnail"
                  />
                </div>
                <Image
                  src={active.img}
                  height="1000"
                  width="1000"
                  className={`z-10 absolute -bottom-5 ${
                    active.isMobile ? "w-1/2" : "w-10/12"
                  } h-[110%] object-cover object-left-top rotate-[5deg]`}
                  alt="cover"
                />
              </motion.div>

              <div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-neutral-600 dark:text-white"
                  >
                    {active.title}
                  </motion.h3>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.des}
                  </motion.div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    {active.iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-neutral-200/50 dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <StackIcon className="w-5 h-5" name={icon} />
                      </div>
                    ))}
                  </div>
                  {active.link && (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.link}
                      target="_blank"
                      className="px-4 py-2 rounded-xl border border-purpleDark dark:border-purple text-purpleDark dark:text-purple text-xs font-bold flex items-center gap-2"
                    >
                      <span className="max-sm:hidden">Checkout</span>{" "}
                      <FaLocationArrow />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {projects.map((project, index) => (
        <motion.div
          layoutId={`card-${project.title}-${id}`}
          key={project.title}
          onClick={() => handleExpandCard(project)}
          className="cursor-pointer"
        >
          {renderProject(project)}
        </motion.div>
      ))}
    </>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default ExpandableCard;
