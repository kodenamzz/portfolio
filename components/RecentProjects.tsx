import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/ThreeDCard";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A some selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-16 mt-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex item-center justify-center w-[80vw] sm:w-[570px]"
          >
            <CardContainer
              className="inter-var w-full"
              containerClassName="w-full"
            >
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="100"
                  className="w-full mt-4 relative flex items-center justify-center overflow-hidden sm:h-[40vh] h-[30vh] min-h-[250px] mb-10"
                >
                  <div className="bg-[#13162D] rounded-3xl group-hover/card:shadow-3xl w-full h-full">
                    <Image
                      src="/bg.png"
                      height="1000"
                      width="1000"
                      className="h-full w-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                  <Image
                    src={project.img}
                    height="1000"
                    width="1000"
                    className="z-10 absolute bottom-0 w-10/12"
                    alt="cover"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className=" text-sm lg:font-normal lg:text-xl font-light line-clamp-2 mt-2 dark:text-neutral-300 text-neutral-500"
                >
                  {project.des}
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem translateZ={20} className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          height="1000"
                          width="1000"
                          className="p-2"
                        />
                      </div>
                    ))}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl border border-purple text-purple text-xs font-bold flex items-center gap-2"
                  >
                    <span>Checkout</span> <FaLocationArrow />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;