"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { MagicButton } from "./MagicButton";
import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";

const CopyMyEmail = () => {
  const [copied, setCopied] = useState(false);
  const handelCopyEmail = () => {
    navigator.clipboard.writeText("abdkode.p@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <>
      <div className={`absolute -bottom-5 right-0`}>
        <Lottie
          animationData={animationData}
          loop={copied}
          autoPlay={copied}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
      <MagicButton
        title={copied ? "Email copied" : "Copy my email"}
        icon={<IoCopyOutline />}
        position="left"
        otherClasses="dark:!bg-[#161a31]"
        containerClasses="!mt-2"
        handleClick={handelCopyEmail}
      />
    </>
  );
};

export default CopyMyEmail;
