import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const NavBar: React.FC = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!toggleNav) return;
    function handleClickOutside(event: Event) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setToggleNav(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleClickOutside);
    };
  }, [toggleNav]);

  useEffect(() => {
    const handleResize = () => setToggleNav(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-5 bg-black bg-opacity-70 px-6 py-2 rounded-3xl hidden md:block z-50">
        <a href="#hero" className="nav-link">
          Home
        </a>
        <Link href="#experience" className="nav-link">
          Experience
        </Link>
        <Link href="#projects" className="nav-link">
          Projects
        </Link>
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
        <Link
          href="/keesongyang_resume.pdf"
          target="_blank"
          className="nav-link"
        >
          Resume
        </Link>
      </div>

      {/* Mobile Navbar */}
      <button
        className={`block md:hidden fixed top-5 right-5 p-2 rounded-lg z-50 ${
          toggleNav ? "bg-black bg-opacity-30" : ""
        }`}
        style={{ marginTop: "env(safe-area-inset-top)" }}
        onClick={() => setToggleNav(!toggleNav)}
        ref={navRef}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke={toggleNav ? "#ded0b6" : "#FFFFFF"}
            className="hover:fill-latte"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        {toggleNav && (
          <div className="fixed top-16 right-5 flex flex-col border-[1px] border-white bg-black bg-opacity-80 rounded-xl text-left z-50">
            <Link
              href="#"
              className={`nav-link p-2 pt-4 border-b-[0.5px] border-white active:text-khaki-500`}
              onClick={() => setToggleNav(false)}
            >
              Home
            </Link>
            <Link
              href="#experience"
              className={`nav-link p-2 border-b-[0.5px] border-white active:text-khaki-500`}
              onClick={() => setToggleNav(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`nav-link p-2 border-b-[0.5px] border-white active:text-khaki-500`}
              onClick={() => setToggleNav(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`nav-link p-2 border-b-[0.5px] border-white active:text-khaki-500`}
              onClick={() => setToggleNav(false)}
            >
              Contact
            </Link>
            <Link
              href="/KeeSongYang_Resume.pdf"
              target="_blank"
              className={`nav-link p-2 pb-4 active:text-khaki-500`}
              onClick={() => setToggleNav(false)}
            >
              Resume
            </Link>
          </div>
        )}
      </button>
    </>
  );
};

export default NavBar;
