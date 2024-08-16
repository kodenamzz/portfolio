import { GridGlobe } from "./ui/GridGlobe";
import Image from "next/image";
// import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Link from "next/link";
import CopyMyEmail from "./ui/CopyMyEmail";

const About = () => {
  return (
    <div id="about" className="relative my-16">
      {/* <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="div"
      > */}
      <div className="relative z-40 flex justify-center flex-col items-center w-full">
        <h1 className="heading">
          About <span className="text-purpleDark dark:text-purple">Me</span>
        </h1>
        <h2 className="text-center text-xl md:text-2xl font-bold mt-10 ">
          👋 Hey, I&apos;m Abdulkode Pohlor
        </h2>
      </div>
      {/* </motion.div> */}
      <div className="absolute -top-24 w-full z-10 h-full">
        <GridGlobe />
      </div>

      <div className="flex relative z-50 justify-center flex-col items-center w-full mt-6 md:mt-80">
        <div className="flex flex-col items-center">
          <p className="text-sm indent-9 lg:font-normal lg:text-xl font-semibold mt-2 dark:text-neutral-300 text-neutral-900 w-[90vw] md:w-[70vw]">
            I am a passionate Full-stack Developer with about 5 years of
            experience, specializing in web development and adept at building
            innovative and user-friendly applications. Proficient in React.js,
            Next.js, JavaScript, TypeScript, CSS, Material UI, and Tailwind CSS,
            I also have substantial backend experience with Node.js and PHP
            Laravel. Constantly eager to learn and adapt to new technologies, I
            aim to leverage my skills to contribute to dynamic projects and
            deliver high-quality solutions that exceed client expectations.
          </p>

          <div className="flex flex-col md:flex-row gap-6 w-full mt-6">
            <div className="flex-1 md:flex-[2_2_0%] min-h-44 relative overflow-hidden rounded-3xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border dark:border-white/[0.1] border-gray/[0.1]   dark:bg-[#04071D] dark:bg-gradient-to-r dark:from-[#04071D] dark:to-[#0C0E23] bg-neutral-200 bg-gradient-to-r from-neutral-200/80 to-neutral-200/80">
              <div className="hover:translate-x-2 transition duration-200 h-full p-4">
                <h3 className="text-xl text-purpleDark dark:text-purple font-bold text-center mb-2 pl-5">
                  Collegiate Education
                </h3>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  <Image
                    src="/PSU_Logo.png"
                    alt="PSU_Logo"
                    width={1000}
                    height={1000}
                    className="w-16"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-center lg:text-start uppercase text-md font-bold">
                      Prince of Songkla University, Thailand
                    </h1>
                    <h2 className="tracking-widest text-sm text-center lg:text-start font-medium dark:text-blue-100 text-black-100">
                      Bachelor of Business Administration in Information and
                      Computer Management
                    </h2>
                    <p className="text-center lg:text-start text-xs text-neutral-500 dark:text-white-100 mt-2 font-semibold">
                      GPA : 3.32/4.00 (Second Class Honors) ·{" "}
                      <span className="dark:text-blue-200 text-black-200">
                        Aug 2015 - May 2019
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-44 relative overflow-hidden rounded-3xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border dark:border-white/[0.1] border-gray/[0.1]   dark:bg-[#04071D] dark:bg-gradient-to-r dark:from-[#04071D] dark:to-[#0C0E23] bg-neutral-200 bg-gradient-to-r from-neutral-200/80 to-neutral-200/80">
              <div className="flex justify-center h-full">
                <BackgroundGradientAnimation></BackgroundGradientAnimation>
                <div className="mt-5 relative">
                  <div className="hover:translate-x-2 transition duration-200 flex flex-col items-center">
                    <div className="flex items-center md:gap-3 gap-6">
                      <div className="rounded-lg w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150">
                        <Link
                          href="https://github.com/kodenamzz"
                          target="__blank"
                        >
                          <Image
                            src="/git.svg"
                            alt={"social-git"}
                            width={20}
                            height={20}
                            className="w-auto h-auto invert-0"
                          />
                        </Link>
                      </div>
                      <div className="rounded-lg w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150">
                        <Link
                          href="https://www.linkedin.com/in/abdulkode-pohlor"
                          target="__blank"
                        >
                          <Image
                            src="/link.svg"
                            alt="social-linkedin"
                            width={20}
                            height={20}
                            className="w-auto h-auto invert-0"
                          />
                        </Link>
                      </div>
                      <div className="rounded-lg px-2 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150">
                        <Link
                          href="mailto:abdkode.p@gmail.com"
                          target="__blank"
                          className="text-white text-center"
                        >
                          abdkode.p@gmail.com
                        </Link>
                      </div>
                    </div>
                    <p className="text-md font-normal mt-2 text-neutral-300 text-center">
                      Reach out directly by emailing me
                    </p>
                    <CopyMyEmail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
