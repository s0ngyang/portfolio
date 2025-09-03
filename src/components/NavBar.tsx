import { useState, useRef, useEffect } from "react";

const NavBar = () => {
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
      <div className="fixed top-5 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 px-6 py-3 rounded-2xl hidden md:block z-50 shadow-2xl shadow-slate-900/50">
        <a href="#hero" className="nav-link">
          Home
        </a>
        <a href="#experience" className="nav-link">
          Experience
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <a href="/KeeSongYang_Resume.pdf" target="_blank" className="nav-link">
          Resume
        </a>
      </div>

      {/* Mobile Navbar */}
      <button
        className={`block md:hidden fixed top-5 right-5 p-3 rounded-xl z-50 transition-all duration-300 ${
          toggleNav
            ? "bg-slate-800/90 backdrop-blur-md border border-slate-700/50 shadow-lg"
            : "bg-slate-800/60 backdrop-blur-sm hover:bg-slate-800/80"
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
            stroke={toggleNav ? "#fbbf24" : "#FFFFFF"}
            className="transition-colors duration-300"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        {toggleNav && (
          <div className="fixed top-14 right-0 flex flex-col border border-slate-700/50 bg-slate-800/95 backdrop-blur-md rounded-xl text-left z-50 shadow-2xl shadow-slate-900/50 min-w-[200px]">
            <a
              href="#"
              className={`nav-link p-3 pt-4 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-200`}
              onClick={() => setToggleNav(false)}
            >
              Home
            </a>
            <a
              href="#experience"
              className={`nav-link p-3 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-200`}
              onClick={() => setToggleNav(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`nav-link p-3 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-200`}
              onClick={() => setToggleNav(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`nav-link p-3 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-200`}
              onClick={() => setToggleNav(false)}
            >
              Contact
            </a>
            <a
              href="/KeeSongYang_Resume.pdf"
              target="_blank"
              className={`nav-link p-3 pb-4 hover:bg-slate-700/30 transition-colors duration-200`}
              onClick={() => setToggleNav(false)}
            >
              Resume
            </a>
          </div>
        )}
      </button>
    </>
  );
};

export default NavBar;
