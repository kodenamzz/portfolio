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

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          height={1000}
          width={1000}
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take
          <span className="text-purpleDark dark:text-purple">
            {" "}
            digital presence to the next level?
          </span>
        </h1>
        <p className="text-neutral-500 dark:text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:abdkode.p@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<RiArrowRightUpFill />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Abdulkode Pohlor
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((social) => (
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
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
