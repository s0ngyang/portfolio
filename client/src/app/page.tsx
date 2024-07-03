"use client";
import clsx from "clsx";

import Heading from "../../artisan/Heading";
import Text from "../../artisan/Text";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [toggleNav, setToggleNav] = useState(false);

  const text = ["Aspiring Software Engineer", "Computer Science Student"];
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currTextIndex, setCurrTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const hyperlinkStyle =
    "text-white font-semibold text-[0.75em] hover:text-khaki hover:font-bold mx-4 tracking-[0.25em] transition-all transform ease-linear";
  const background =
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    setTimeout(() => {
      if (currTextIndex === 0 && isDeleting) {
        if (currWordIndex === text.length - 1) {
          setCurrWordIndex(currWordIndex - 1);
        } else {
          setCurrWordIndex(currWordIndex + 1);
        }
        setIsDeleting(false);
      } else if (isDeleting) {
        setCurrentText(currentText.substring(0, currentText.length - 1));
        setCurrTextIndex(currTextIndex - 1);
      } else if (currentText.length === text[currWordIndex].length) {
        setTimeout(() => {
          setIsDeleting(true);
          setCurrentText(currentText.substring(0, currentText.length - 1));
          setCurrTextIndex(currTextIndex - 1);
        }, 1000);
      } else {
        setCurrentText(currentText + text[currWordIndex][currTextIndex]);
        setCurrTextIndex(currTextIndex + 1);
      }
    }, 69);
  }, [currTextIndex, currWordIndex]);

  return (
    <main
      className={clsx(
        `flex items-center justify-center flex-col p-12 w-100 h-screen gap-y-8 
        sm:min-h-[360px] md:min-h-[720px]`,
        "font-inter"
      )}
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="hero"
    >
      <div className="absolute top-5 bg-[#00000080] px-6 py-2 rounded-3xl hidden sm:block">
        <a href="#hero" className={hyperlinkStyle}>
          Home
        </a>
        <a href="#experience" className={hyperlinkStyle}>
          Experience
        </a>
        <a href="projects" className={hyperlinkStyle}>
          Projects
        </a>
        <a href="contact" className={hyperlinkStyle}>
          Contact
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className={hyperlinkStyle}
        >
          Resume
        </a>
      </div>

      <div className="absolute top-3 left-1 px-6 py-2 rounded-3xl block sm:hidden">
        <button onClick={() => setToggleNav(!toggleNav)}>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke={toggleNav ? "#FEBB56" : "#FFFFFF"}
              className="hover:fill-[#FEBB56]"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {toggleNav ? (
          <div className="flex flex-col bg-[#00000080] border-[1px] border-white rounded-xl">
            <a
              href="#hero"
              className={`${hyperlinkStyle} p-2 pt-4 border-b-[0.5px] border-white`}
            >
              Home
            </a>
            <a
              href="#experience"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
            >
              Contact
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              className={`${hyperlinkStyle} p-2 pb-4`}
            >
              Resume
            </a>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center text-center py-52">
        <Text className="text-white tracking-[0.35em] text-[0.875em] md:text-[1em] font-semibold mb-[-10px]">
          Hi, my name is
        </Text>

        <Heading
          className="text-whip my-4 md:text-[3.5em] font-extrabold overflow-hidden"
          // color="#FEBB56"
          level="heading1"
          tag="h1"
        >
          Song Yang
        </Heading>

        <hr className="bg-white w-52 lg:w-80" />
        <div className=" px-8 py-2 mt-5 min-w-[80px] min-h-[40px] flex justify-center items-center">
          <div className="overflow-hidden border-r-[.15em]">
            <Text
              className="text-white tracking-[0.35em] text-[0.75em] md:text-[0.875em] font-semibold"
              id="typing-container"
            >
              {currentText}
            </Text>
          </div>
        </div>

        <p className="py-4 text-white max-w-screen-xl text-[0.875em] md:text-[1em]">
          As a daily user of software applications, I value aesthetics and
          responsiveness. <br /> My goal as a developer is to create efficient
          and visually pleasing applications, ensuring a delightful user
          experience.
        </p>
      </div>
    </main>
  );
}
