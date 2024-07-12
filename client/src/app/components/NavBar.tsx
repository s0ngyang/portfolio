import Link from "next/link";

type NavBarProps = {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<NavBarProps> = ({ toggleNav, setToggleNav }) => {
  const hyperlinkStyle =
    "text-white font-semibold text-[0.75em] hover:text-khaki hover:font-bold mx-4 tracking-[0.25em] transition-all transform ease-linear";

  return (
    <>
      <div className="fixed top-5 bg-[#00000080] px-6 py-2 rounded-3xl hidden sm:block">
        <Link href="#" className={hyperlinkStyle}>
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
          href="https://docs.google.com/document/d/1NUYli_jzKU7Au_4HcSgnhryZH_66YA2PhPUl5BngePc/edit?usp=sharing"
          target="_blank"
          className={hyperlinkStyle}
        >
          Resume
        </Link>
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
            <Link
              href="/"
              className={`${hyperlinkStyle} p-2 pt-4 border-b-[0.5px] border-white`}
            >
              Home
            </Link>
            <Link
              href="experience"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
            >
              Experience
            </Link>
            <Link
              href="projects"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
            >
              Projects
            </Link>
            <Link
              href="contact"
              className={`${hyperlinkStyle} p-2 border-b-[0.5px] border-white`}
            >
              Contact
            </Link>
            <Link
              href="https://www.google.com"
              target="_blank"
              className={`${hyperlinkStyle} p-2 pb-4`}
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
