import React, { useState, FormEventHandler } from "react";
import TextArea from "../artisan/TextArea";
import TextInput from "../artisan/TextInput";
import Heading from "../artisan/Heading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const textStyle =
  "text-white text-[0.75em] font-semibold tracking-[0.45em] lg:text-[0.875em]";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  function areFieldsFilled(
    name: string,
    email: string,
    message: string
  ): boolean {
    return [name, email, message].every((field) => field.trim().length > 0);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!areFieldsFilled(name, email, message)) {
      toast.error("Please fill in all fields!");
      return;
    }

    setLoading(true); // Disable the button

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    // Convert FormData to URLSearchParams
    const formParams = new URLSearchParams();
    formData.forEach((value, key) => {
      formParams.append(key, value.toString());
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formParams.toString(),
    })
      .then(() => {
        myForm.reset();
        setName(""); // Reset the state
        setEmail(""); // Reset the state
        setMessage(""); // Reset the state
        toast.success("Message sent! I'll be in contact with you soon.");
      })
      .catch((error) =>
        toast.error("Failed to send message. Please try again later.")
      )
      .finally(() => setLoading(false)); // Re-enable the button
  };

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
              className="text-latte-700 my-4 text-[2em] md:text-[3.25em] font-extrabold ml-[-5px]"
              level="heading1"
              tag="h1"
            >
              Get in Touch.
            </Heading>
            <div className="flex flex-col items-center lg:items-start">
              <hr className="w-[100%] lg:w-[75%] bg-white mb-5" />
              <span className={`${textStyle} `}>FIND ME ON</span>
              <div className="my-4 ml-[-5px]">
                <a
                  className={`${textStyle} transition-all transform ease-linear border-[1px] px-4 py-2 rounded-lg mr-3 hover:bg-white hover:text-black`}
                  href="https://github.com/s0ngyang"
                  target="_blank"
                >
                  GITHUB
                </a>
                <a
                  className={`${textStyle} transition-all transform ease-linear border-[1px] px-4 py-2 rounded-lg hover:bg-white hover:text-black`}
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
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="border-white border-[1px] md:border-2 rounded-2xl flex flex-col p-6 lg:p-8 items-center bg-neutral-800/70">
            <div className="w-full flex flex-col gap-y-2">
              <p className={textStyle}>NAME</p>
              <TextInput
                label=""
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/20 w-full p-3 text-white focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
              <p className={textStyle}>EMAIL</p>
              <TextInput
                label=""
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 p-3 w-full text-white focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
              <p className={textStyle}>YOUR MESSAGE</p>
              <TextArea
                label=""
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/20 p-3 w-full text-white min-h-[200px] lg:min-h-[320px] focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className={`${textStyle} border-[1px] px-4 py-2 rounded-lg mr-3 ${
                loading || !areFieldsFilled(name, email, message)
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-white hover:text-black transition-all transform ease-linear"
              }`}
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
