import TextArea from "../../../artisan/TextArea";
import TextInput from "../../../artisan/TextInput";
import Heading from "../../../artisan/Heading";

export default function ContactSection() {
  const textStyle =
    "text-white text-[0.75em] font-semibold tracking-[0.45em] md:text-[0.875em]";

  return (
    <div className="flex justify-center items-center min-h-screen" id="contact">
      <div className="p-12 grid md:grid-cols-2 gap-4">
        <div className="flex-1 justify-between align-between">
          <div className="flex flex-col text-center md:text-left">
            <span className={textStyle}>THINK I’LL BE A GREAT </span>
            <span className={textStyle}>ADDITION TO YOUR TEAM? </span>
            <Heading
              className="text-latte-700 my-4 text-[2em] md:text-[3.25em] font-extrabold ml-[-5px]"
              level="heading1"
              tag="h1"
            >
              Get in Touch.
            </Heading>
            <div className="flex flex-col items-center md:items-start">
              <hr className="w-[100%] md:w-[75%] bg-white mb-5" />
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
                  href="https://www.linkedin.com/in/song-yang-kee-b02b67211/"
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
        >
          <div className="border-white border-2 rounded-2xl flex flex-col p-8 items-center">
            <div className="w-[100%]">
              <span className={textStyle}>NAME</span>
              <TextInput
                required
                label="name"
                type="text"
                name="name"
                className="bg-white/20 w-[100%] p-3 m-[-5px] text-white focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
            </div>
            <div className="mt-4 w-[100%]">
              <span className={textStyle}>EMAIL</span>
              <TextInput
                required
                label="email"
                type="email"
                name="email"
                className="bg-white/20 p-3 w-[100%] m-[-5px] text-white focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
            </div>
            <div className="mt-4 w-[100%]">
              <span className={textStyle}>YOUR MESSAGE</span>
              <TextArea
                required
                label="message"
                // type="text"
                name="message"
                className="bg-white/20 p-3 w-[100%] m-[-5px] text-white min-h-[200px] md:min-h-[320px] focus:ring-2 focus:ring-latte-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className={`${textStyle} border-[1px] px-4 py-2 rounded-lg mr-3 hover:bg-white hover:text-black transition-all transform ease-linear`}
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
