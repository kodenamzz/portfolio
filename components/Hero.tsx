import { FaLocationArrow } from "react-icons/fa";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80zvh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-neutral-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.04] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10 flex-col md:flex-row gap-16">
        <div className="flex-grow flex flex-col items-center md:items-start justify-center w-full">
          <h2 className="uppercase tracking-widest text-xs text-start font-medium dark:text-blue-100 text-black-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <h2 className="uppercase tracking-widest text-xs text-start font-medium dark:text-blue-100 text-black-100 max-w-80">
            {t("title")}
          </h2>

          <TextGenerateEffect
            className="text-center md:text-start text-[32px] md:text-3xl lg:text-4xl"
            primaryWords="Bringing Visions to Life with"
            animateWords={[
              "Smooth User Experiences",
              "Seamless Interactions",
              "Intuitive Interfaces",
              "Fluid Designs",
            ]}
          />

          <p className="text-center md:text-start md:tracking-wider mb-4 text-sm md:text-md lg:text-xl">
            Hi, I&apos;m Abdulkode, a Full-Stack Developer based in Thailand.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position={"left"}
            />
          </a>
        </div>
        <div className="md:w-[40vw] min-w-[400px] flex justify-center items-center p-10">
          <Image
            src="/dev.png"
            alt="developer"
            priority
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
