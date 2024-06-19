"use client";

import { Menubar } from "primereact/menubar";
import { Card } from "primereact/card";
import Experience from "./components/Experience";

const Home = () => {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Experience", icon: "pi pi-fw pi-user" },
    { label: "Projects", icon: "pi pi-fw pi-briefcase" },
    { label: "Contact", icon: "pi pi-fw pi-envelope" },
  ];

  return (
    <main className="min-h-screen items-center justify-between p-4 bg-latte text-black">
      <div className="max-w-screen-xl m-auto">
        <Menubar model={items} className="bg-transparent" />
        <Card className="flex my-4 px-2 bg-dun-700">
          I&apos;m Song Yang, a Year 3 Computer Science student and an aspiring
          Software Engineer! <br /> As a daily user of software applications, I
          value aesthetics and responsiveness. My goal as a developer is to
          create modern applications that are both efficient and visually
          pleasing, ensuring a delightful user experience.
        </Card>

        <h2>Experience</h2>
        <Experience />
      </div>
    </main>
  );
};

export default Home;
