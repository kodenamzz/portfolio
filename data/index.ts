import { IExperiences, IProject } from "@/types";

export const projects: IProject[] = [
  {
    id: 1,
    title: "OnlineSurveyPlatform-Title",
    des: "OnlineSurveyPlatform-Desc",
    img: "/eanblesv.png",
    isMobile: false,
    iconLists: [
      "reactjs",
      "materialui",
      "redux",
      "laravel",
      "mongodb",
      "nodejs",
      "nestjs",
    ],
    link: "https://enablesurvey.com",
  },
  {
    id: 2,
    title: "SurveyBackOfficeMonitoringSystem-Title",
    des: "SurveyBackOfficeMonitoringSystem-Desc",
    img: "/backoffic-dev.png",
    isMobile: false,
    iconLists: [
      "reactjs",
      "materialui",
      "laravel",
      "mongodb",
      "postgresql",
      "redux",
    ],
    link: "",
  },
  {
    id: 3,
    title: "DevForum-Title",
    des: "DevForum-Desc",
    img: "/dev-forum.png",
    isMobile: false,
    iconLists: [
      "reactjs",
      "nextjs2",
      "tailwindcss",
      "nodejs",
      "nestjs",
      "mongodb",
    ],
    link: "https://github.com/kodenamzz/dev_forum_nextjs",
  },
  {
    id: 4,
    title: "OrderFoodOnlineApplication-Title",
    des: "OrderFoodOnlineApplication-Desc",
    img: "/flutter-app.jpg",
    isMobile: true,
    iconLists: ["flutter", "laravel", "postgresql", "dart", "android"],
    link: "",
    // link: "https://github.com/kodenamzz/ordering_food_online_flutter",
  },
];

export const techStacks = [
  {
    name: "reactjs",
    label: "React",
  },
  {
    name: "nextjs2",
    label: "Next js",
  },
  {
    name: "js",
    label: "JavaScript",
  },
  {
    name: "typescript",
    label: "TypeScript ",
  },
  {
    name: "materialui",
    label: "Material UI",
  },
  {
    name: "tailwindcss",
    label: "Tailwind CSS",
  },
  {
    name: "antd",
    label: "Ant Design",
  },
  {
    name: "git",
    label: "git",
  },
  {
    name: "nodejs",
    label: "Node js",
  },
  {
    name: "mongodb",
    label: "MongoDB",
  },
  {
    name: "postgresql",
    label: "PostgreSQL",
  },
  {
    name: "mysql",
    label: "MySQL",
  },
  {
    name: "laravel",
    label: "Laravel",
  },
  {
    name: "redux",
    label: "Redux",
  },
  {
    name: "html5",
    label: "HTML",
  },
  {
    name: "css3",
    label: "CSS",
  },
  {
    name: "flutter",
    label: "Flutter",
  },
  {
    name: "dart",
    label: "Dart",
  },
  {
    name: "docker",
    label: "Docker",
  },
  {
    name: "nestjs",
    label: "Nest js",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience: IExperiences[] = [
  {
    id: 1,
    title: "TCB-DotNetDeveloper-Title",
    place: "TCB-DotNetDeveloper-Place",
    period: "TCB-DotNetDeveloper-Period",
    desc: ["TCB-DotNetDeveloper-1-Desc"],
    className: "md:col-span-2",
    thumbnail: "/tcrbank.png",
  },
  {
    id: 2,
    title: "EBM-FullStackDeveloper-Title",
    place: "EBM-FullStackDeveloper-Place",
    period: "EBM-FullStackDeveloper-Period",
    desc: ["EBM-FullStackDeveloper-1-Desc", "EBM-FullStackDeveloper-2-Desc"],

    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "MDS-Programmer-Title",
    place: "MDS-Programmer-Place",
    period: "MDS-Programmer-Period",
    desc: ["MDS-Programmer-1-Desc"],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "YICMG-Title",
    place: "YICMG-Place",
    period: "YICMG-Period",
    desc: ["YICMG-1-Desc"],
    className: "md:col-span-2",
    thumbnail: "/yicmg.png",
    link: "https://news.gimyong.com/article/8539",
  },
  {
    id: 5,
    title: "PSU-TA-Title",
    place: "PSU-TA-Place",
    period: "PSU-TA-Period",
    desc: ["PSU-TA-1-Desc"],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];
