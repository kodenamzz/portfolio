import en from "./../messages/en.json";

// Define the type manually
type Message = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Message {}
}

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

type ProjectTitle = keyof FilterKeysByPrefix<
  IntlMessages["Projects"],
  "-Title"
>;
type ProjectDesc = keyof FilterKeysByPrefix<IntlMessages["Projects"], "-Desc">;

export interface IProject {
  id: number;
  title: ProjectTitle;
  des: ProjectDesc;
  img: string;
  iconLists: string[];
  link: string;
  isMobile: boolean;
}
