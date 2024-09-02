import { workExperience } from "@/data";
import React from "react";
import { MovingButton } from "./ui/MovingBorders";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Experience = () => {
  const t = useTranslations("Experiences");
  return (
    <div id="experiences" className="py-20">
      <h1 className="heading">
        {t("My")}{" "}
        <span className="text-purpleDark dark:text-purple">
          {t("WorkExperiences")}
        </span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <MovingButton
            as={card.link ? Link : "div"}
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 dark:text-white border-neutral-200 dark:border-slate-800"
            {...(card.link && { href: card.link, target: "_blank" })}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={1000}
                height={1000}
                className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-16  h-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {t(card.title)}
                </h1>
                <h2 className="uppercase tracking-widest text-xs text-start font-medium dark:text-blue-100 text-black-100">
                  {t(card.place)} ·{" "}
                  <span className="dark:text-blue-200 text-black-200">
                    {t(card.period)}
                  </span>
                </h2>
                {card.desc.map((des, idx) => (
                  <p
                    key={idx}
                    className="text-start text-neutral-500 dark:text-white-100 mt-3 font-semibold"
                  >
                    {t(des)}
                  </p>
                ))}
              </div>
            </div>
          </MovingButton>
        ))}
      </div>
    </div>
  );
};

export default Experience;
