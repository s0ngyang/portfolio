import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const hyperlinkStyle =
  "text-white font-bold text-[0.85em] hover:text-khaki hover:font-bold mx-4 tracking-[0.2em] transition-all transform ease-linear";

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
      <div className="fixed top-5 bg-[#00000095] px-6 py-2 rounded-3xl hidden md:block z-50">
        <Link href="#hero" className={hyperlinkStyle}>
          Home
        </Link>
        <Link href="#experience" className={hyperlinkStyle}>
          Experience
        </Link>
        <Link href="#projects" className={hyperlinkStyle}>
          Projects
        </Link>
        <Link href="#contact" className={hyperlinkStyle}>
          Contact
        </Link>
        <Link
          href="/keesongyang_resume.pdf"
          target="_blank"
          className={hyperlinkStyle}
        >
          Resume
        </Link>
      </div>

      <div
        className="fixed top-5 left-0 px-6 py-2 rounded-3xl block md:hidden z-50"
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
          <div className="flex flex-col bg-[#000000C0] border-[1px] border-white rounded-xl -ml-1 mt-1">
            <Link
              href="#"
              className={`${hyperlinkStyle} p-2 pt-4 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Home
            </Link>
            <Link
              href="#experience"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
              onClick={() => setToggleNav(false)}
            >
              Contact
            </Link>
            <Link
              href="/KeeSongYang_Resume.pdf"
              target="_blank"
              className={`${hyperlinkStyle} p-2 pb-4`}
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
