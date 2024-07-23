export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/me-working.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Online Survey Platform",
    des: "Led the development of a comprehensive online survey platform with diverse question types, dynamic logic triggers, and visual result displays, enhancing user experience and data analysis for improved decision-making.",
    img: "/p1.svg",
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
    title: "Survey Back-Office Monitoring System",
    des: "Developed a robust back-office monitoring system for surveys, covering user activity tracking, package order management, and survey statistics, enhancing administrative oversight and efficient platform management.",
    img: "/p2.svg",
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
    title: "Dev Forum (In Developing)",
    des: "Creating a developer forum focused on Q&A, enabling users to ask questions, share knowledge, and solve problems collaboratively within the tech community.",
    img: "/p3.svg",
    iconLists: ["reactjs", "nextjs2", "tailwindcss", "mongodb"],
    link: "https://github.com/kodenamzz/dev_forum_nextjs",
  },
  {
    id: 4,
    title: "Order Food Online Application",
    des: "Developed a mobile application for ordering food online using Flutter, allowing users to place orders conveniently from anywhere with a seamless and intuitive interface.",
    img: "/p4.svg",
    iconLists: ["flutter", "laravel", "postgresql", "dart", "android"],
    link: "",
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

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
