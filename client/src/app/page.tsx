"use client";
import clsx from "clsx";

import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  const [toggleNav, setToggleNav] = useState(false);

  const text = ["Aspiring Software Engineer", "Computer Science Student"];
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currTextIndex, setCurrTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");

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
    <div
      className={clsx(
        `flex items-center flex-col p-12 h-screen gap-y-8
      sm:min-h-[360px] md:min-h-[720px]`,
        "font-inter"
      )}
    >
      <NavBar toggleNav={toggleNav} setToggleNav={setToggleNav} />

      <Hero currentText={currentText} />

      <Experience />
    </div>
  );
}
