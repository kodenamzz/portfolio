import Image from "next/image";
import { MagicButton } from "./ui/MagicButton";
import { RiArrowRightUpFill } from "react-icons/ri";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          {t("Heading1")}
          <span className="text-purpleDark dark:text-purple">
            {" "}
            {t("Heading2")}
          </span>
        </h1>
        <p className="text-neutral-500 dark:text-white-200 md:mt-10 my-5 text-center">
          {t("ContactMeMessage")}
        </p>
        <a href="#contact">
          <MagicButton
            title={t("LetsGetInTouch")}
            icon={<RiArrowRightUpFill />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 relative z-[9999]">
        <p className="md:text-base text-sm md:font-normal font-light">
          {t("Copyright") + " "}
          {new Date().getFullYear()}
          {" " + t("CopyrightName")}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-neutral-200 dark:bg-black-200 rounded-lg border border-black-300">
            <Link href="https://github.com/kodenamzz" target="__blank">
              <Image
                src="/git.svg"
                alt={"social-git"}
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
            </Link>
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-neutral-200 dark:bg-black-200 rounded-lg border border-black-300">
            <Link
              href="https://www.linkedin.com/in/abdulkode-pohlor"
              target="__blank"
            >
              <Image
                src="/link.svg"
                alt={"social-linkedin"}
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
            </Link>
          </div>
          {/* {socialMedia.map((social) => (
            <div
              key={social.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-neutral-200 dark:bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={social.img}
                alt={"social" + social.id}
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
            </div>
          ))} */}
        </div>
      </div>
      <div className="w-full absolute left-0 bottom-0 min-h-96 z-0">
        <Image
          height={1000}
          width={1000}
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-50"
        />
      </div>
    </footer>
  );
};

export default Footer;
