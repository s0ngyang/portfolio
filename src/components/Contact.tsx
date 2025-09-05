import { useState } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

const textStyle =
  "text-default text-[0.75em] font-semibold tracking-[0.2em] lg:text-[0.875em]";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { register: contactForm, handleSubmit, reset } = useForm<Inputs>();

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
        reset();
      })
      .catch(() =>
        toast.error("Failed to send message. Please try again later.")
      )
      .finally(() => setIsLoading(false));
  };

  const isSubmitDisabled = isLoading;

  return (
    <div
      className="flex w-full pt-12 lg:px-8 max-w-screen-2xl justify-center items-center md:min-h-screen"
      id="contact"
    >
      <div className="grow grid lg:grid-cols-2 gap-4">
        <div className="flex-1 justify-between align-between">
          <div className="flex flex-col text-center lg:text-left">
            <span className={textStyle}>THINK I’LL BE A GREAT </span>
            <span className={textStyle}>ADDITION TO YOUR TEAM? </span>
            <h1 className="text-beige my-4 text-[2em] md:text-[3.25em] font-extrabold">
              Get in Touch.
            </h1>
            <div className="flex flex-col items-center lg:items-start">
              <hr className="w-full lg:w-3/4 bg-white mb-5" />
              <span className={textStyle}>FIND ME ON</span>
              <div className="my-4 gap-4 flex">
                <a
                  className={`${textStyle} transition-all duration-300 transform hover:scale-105 border border-slate-600/50 px-4 py-2 rounded-lg bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 hover:border-slate-500/70 active:bg-slate-600/80`}
                  href="https://github.com/s0ngyang"
                  target="_blank"
                >
                  GITHUB
                </a>
                <a
                  className={`${textStyle} transition-all duration-300 transform hover:scale-105 border border-slate-600/50 px-4 py-2 rounded-lg bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 hover:border-slate-500/70 active:bg-slate-600/80`}
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
          <div className="border border-slate-600/50 rounded-2xl flex flex-col p-6 lg:p-8 items-center bg-slate-800/60 backdrop-blur-sm shadow-lg">
            <div className="w-full flex flex-col gap-y-2">
              <p className={textStyle}>NAME</p>
              <input
                type="text"
                {...contactForm("name", { required: true })}
                className="bg-slate-700/50 w-full p-3 text-default focus:ring-2 focus:ring-amber-400 focus:outline-none border border-slate-600/50 rounded-lg transition-all duration-200 hover:border-slate-500/70"
              />
              <p className={textStyle}>EMAIL</p>
              <input
                type="email"
                {...contactForm("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="bg-slate-700/50 w-full p-3 text-default focus:ring-2 focus:ring-amber-400 focus:outline-none border border-slate-600/50 rounded-lg transition-all duration-200 hover:border-slate-500/70"
              />
              <p className={textStyle}>YOUR MESSAGE</p>
              <textarea
                {...contactForm("message", { required: true })}
                className="bg-slate-700/50 p-3 w-full text-default min-h-[200px] lg:min-h-[320px] focus:ring-2 focus:ring-amber-400 focus:outline-none border border-slate-600/50 rounded-lg transition-all duration-200 hover:border-slate-500/70"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className={`${textStyle} border border-slate-600/50 px-6 py-3 rounded-lg transition-all duration-300 ${
                isSubmitDisabled
                  ? "opacity-50 cursor-not-allowed bg-slate-700/50"
                  : "bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 hover:border-slate-500/70 hover:scale-105 active:bg-slate-600/80"
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
