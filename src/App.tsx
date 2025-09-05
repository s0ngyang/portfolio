import Experience from "/src/components/Experience";
import Hero from "/src/components/Hero";
import NavBar from "/src/components/NavBar";
import Projects from "/src/components/Projects";
import Contact from "/src/components/Contact";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer />
      <div className="flex items-center flex-col px-8 md:px-12 mt-20 mb-10 md:my-0 gap-y-8 min-h-screen">
        <NavBar />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
