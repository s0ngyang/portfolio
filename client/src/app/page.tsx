import { Menubar } from "primereact/menubar";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

export default function Home() {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Experience", icon: "pi pi-fw pi-user" },
    { label: "Projects", icon: "pi pi-fw pi-briefcase" },
    { label: "Contact", icon: "pi pi-fw pi-envelope" },
  ];

  return (
    <main className="min-h-screen items-center justify-between p-24 bg-almond text-eggplant2 dark:bg-eggplant2 dark:text-almond">
      <Menubar model={items} className="bg-almond" />
      <Card className="flex mt-4 bg-almond">
        <p>
          I&apos;m Song Yang, a Year 3 Computer Science student and an aspiring
          Software Engineer! <br /> As a daily user of software applications, I
          value aesthetics and responsiveness. My goal as a developer is to
          create modern applications that are both efficient and visually
          pleasing, ensuring a delightful user experience.
        </p>
      </Card>
    </main>
  );
}
