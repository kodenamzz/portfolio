import { workExperience } from "@/data";
import React from "react";
import { MovingButton } from "./ui/MovingBorders";
import Image from "next/image";
import { useTranslations } from "next-intl";

type FilterKeysByPrefix<T, Prefix extends string> = {
  [K in keyof T as K extends `${infer _Prefix}${Prefix}` ? K : never]: T[K];
};

type ExperiencesTitle = keyof FilterKeysByPrefix<
  IntlMessages["Experiences"],
  "-Title"
>;
type ExperiencesPlace = keyof FilterKeysByPrefix<
  IntlMessages["Experiences"],
  "-Place"
>;
type ExperiencesPeriod = keyof FilterKeysByPrefix<
  IntlMessages["Experiences"],
  "-Period"
>;
type ExperiencesDesc = keyof FilterKeysByPrefix<
  IntlMessages["Experiences"],
  "-Desc"
>;

export interface IExperiences {
  id: number;
  title: ExperiencesTitle;
  place: ExperiencesPlace;
  period: ExperiencesPeriod;
  desc: ExperiencesDesc[];
  className: string;
  thumbnail: string;
}

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
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={1000}
                height={1000}
                className="lg:w-32 md:w-20 w-16"
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
