import Image from "next/image";
import { MagicButton } from "./ui/MagicButton";
import { FaMailBulk, FaMailchimp } from "react-icons/fa";
import {
  RiArrowLeftDownFill,
  RiArrowRightUpFill,
  RiMailAddLine,
  RiMailCheckLine,
} from "react-icons/ri";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Looking to elevate
          <span className="text-purpleDark dark:text-purple">
            {" "}
            your digital presence?
          </span>
        </h1>
        <p className="text-neutral-500 dark:text-white-200 md:mt-10 my-5 text-center">
          Contact me today to explore how I can help you reach your objectives
          and make an impact.
        </p>
        <a href="#contact">
          <MagicButton
            title="Let's get in touch"
            icon={<RiArrowRightUpFill />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 relative z-[9999]">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Abdulkode Pohlor
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
