"use client";
import React from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/utils/cn";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/utils/send-email";
import { toast } from "sonner";
import Image from "next/image";

export const formDataSchema = z.object({
  name: z.string().min(5).max(150),
  email: z.string().email(),
  message: z.string().min(20),
});
export type FormData = z.infer<typeof formDataSchema>;

const ContactForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await sendEmail(data);
      reset();
      toast.success(
        "Thank you! Your message has been successfully sent. I will contact you very soon!"
      );
    } catch (error) {
      console.log("error", error);
      toast.error(
        "Sorry, something went wrong while sending your message. Please contact me directly at abdkode.p@gmail.com"
      );
    }
  };
  return (
    <div id="contact" className="py-20 relative z-10">
      <h1 className="heading">
        Contact <span className="text-purpleDark dark:text-purple">Me</span>
      </h1>
      <div className="flex mt-12 w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-neutral-200/[0.8] dark:bg-slate-900/[0.8] ">
        <div className="flex-1 justify-center items-center hidden xl:flex">
          <Image
            src="/touch-my-hand.png"
            alt="touch-my-hand"
            width={1000}
            height={1000}
            className="w-[400px] h-auto"
          />
        </div>
        <div className="flex-1">
          <p className="text-neutral-600 text-md font-bold mt-2 dark:text-neutral-300 text-center xl:text-start">
            Looking for a talented developer? Let&apos;s connect and make great
            things happen.
          </p>

          <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                type="text"
                {...register("name", { required: true })}
              />
              {formState.errors.name && (
                <span className="text-red-500 text-xs">
                  {formState.errors.name.message}
                </span>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="johndoe@example.com"
                type="text"
                {...register("email", { required: true })}
              />
              {formState.errors.email && (
                <span className="text-red-500 text-xs">
                  {formState.errors.email.message}
                </span>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                type="text"
                multiline
                placeholder="Enter your message"
                {...register("message", { required: true })}
              />
              {formState.errors.message && (
                <span className="text-red-500 text-xs">
                  {formState.errors.message.message}
                </span>
              )}
            </LabelInputContainer>

            <button
              disabled={formState.isSubmitting}
              className="bg-gradient-to-br relative group/btn bg-purpleDark disabled:bg-purpleDark/60 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              {formState.isSubmitting
                ? "Sending Message... "
                : "Send Message →"}
              <BottomGradient />
            </button>
          </form>
          <div className="mt-4">
            <p className="text-neutral-600 text-md font-normal mt-2 dark:text-neutral-300 text-center xl:text-start">
              Or reach out directly by emailing me at{" "}
              <span className="text-purpleDark dark:text-purple">
                abdkode.p@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
