"use client";

import { useEffect, useState } from "react";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { ToastContainer } from "react-toastify";

const text = ["Software Engineer", "Final Year Computer Science Student"];

export default function Home() {
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
        }, 800);
      } else {
        setCurrentText(currentText + text[currWordIndex][currTextIndex]);
        setCurrTextIndex(currTextIndex + 1);
      }
    }, 35);
  }, [currTextIndex, currWordIndex]);

  return (
    <>
      <ToastContainer />
      <div className="flex items-center flex-col px-8 md:px-12 mt-20 mb-10 md:my-0 gap-y-8 sm:min-h-[360px] md:min-h-[720px] max-w-screen-2xl font-inter ">
        <NavBar />
        <Hero currentText={currentText} />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
