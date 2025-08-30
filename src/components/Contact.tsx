import { useState } from "react";
import TextArea from "../artisan/TextArea";
import TextInput from "../artisan/TextInput";
import Heading from "../artisan/Heading";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

const textStyle =
  "text-white text-[0.75em] font-semibold tracking-[0.45em] lg:text-[0.875em]";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { register: contactForm, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isLoading) return;
    setIsLoading(true);

    const formParams = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formParams.append(key, value.toString());
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formParams.toString(),
    })
      .then(() => {
        toast.success("Message sent! I'll be in contact with you soon.");
      })
      .catch(() =>
        toast.error("Failed to send message. Please try again later.")
      )
      .finally(() => setIsLoading(false));
  };

  const isSubmitDisabled = isLoading;

  return (
    <div
      className="flex w-full pt-12 max-w-screen-2xl justify-center items-center md:min-h-screen"
      id="contact"
    >
      <div className="grow grid lg:grid-cols-2 gap-4">
        <div className="flex-1 justify-between align-between">
          <div className="flex flex-col text-center lg:text-left">
            <span className={textStyle}>THINK I’LL BE A GREAT </span>
            <span className={textStyle}>ADDITION TO YOUR TEAM? </span>
            <Heading
              className="text-latte-700 my-4 text-[2em] md:text-[3.25em] font-extrabold"
              level="heading1"
              tag="h1"
            >
              Get in Touch.
            </Heading>
            <div className="flex flex-col items-center lg:items-start">
              <hr className="w-full lg:w-3/4 bg-white mb-5" />
              <span className={textStyle}>FIND ME ON</span>
              <div className="my-4 gap-4 flex">
                <a
                  className={`${textStyle} transition-all transform ease-linear border-[1px] px-4 py-2 rounded-lg bg-black bg-opacity-70 hover:bg-white hover:text-black active:bg-white active:text-black`}
                  href="https://github.com/s0ngyang"
                  target="_blank"
                >
                  GITHUB
                </a>
                <a
                  className={`${textStyle} transition-all transform ease-linear border-[1px] px-4 py-2 rounded-lg bg-black bg-opacity-70 hover:bg-white hover:text-black active:bg-white active:text-black`}
                  href="https://www.linkedin.com/in/keesongyang"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="border-white border-[1px] md:border-2 rounded-2xl flex flex-col p-6 lg:p-8 items-center bg-neutral-800/70">
            <div className="w-full flex flex-col gap-y-2">
              <p className={textStyle}>NAME</p>
              <TextInput
                label=""
                type="text"
                {...contactForm("name", { required: true })}
                className="bg-white/20 w-full p-3 text-white focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
              <p className={textStyle}>EMAIL</p>
              <TextInput
                label=""
                type="email"
                {...contactForm("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="bg-white/20 p-3 w-full text-white focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
              <p className={textStyle}>YOUR MESSAGE</p>
              <TextArea
                label=""
                {...contactForm("message", { required: true })}
                className="bg-white/20 p-3 w-full text-white min-h-[200px] lg:min-h-[320px] focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`${textStyle} border-[1px] px-4 py-2 rounded-lg ${
                isSubmitDisabled
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-white hover:text-black transition-all transform ease-linear"
              }`}
            >
              {isLoading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
