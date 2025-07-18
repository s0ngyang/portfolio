import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const NavBar: React.FC = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!toggleNav) return;
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setToggleNav(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [toggleNav]);

  return (
    <>
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

      <div
        className="fixed top-5 right-0 px-6 py-2 rounded-3xl block md:hidden z-50"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
        ref={navRef}
      >
        <button onClick={() => setToggleNav(!toggleNav)}>
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
        </button>
        {toggleNav ? (
          <div className="fixed top-15 right-3 flex flex-col bg-black bg-opacity-80 border-[1px] border-white rounded-xl -ml-1 mt-1">
            <Link
              href="#"
              className={`nav-link p-2 pt-4 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Home
            </Link>
            <Link
              href="#experience"
              className={`nav-link p-2 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`nav-link p-2 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`nav-link p-2 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Contact
            </Link>
            <Link
              href="/KeeSongYang_Resume.pdf"
              target="_blank"
              className={`nav-link p-2 pb-4`}
              onClick={() => setToggleNav(false)}
            >
              Resume
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavBar;
