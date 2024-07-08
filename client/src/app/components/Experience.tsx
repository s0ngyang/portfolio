// const timelineItems = [
//   {
//     title: "Software Engineering Intern",
//     company: "Podsmart AI",
//     date: "May 2024 - Present",
//     icon: "pi pi-briefcase",
//   },
// ];

// const Experience = () => {
//   const customizedContent = (item: any) => {
//     return (
//       <Card className="my-4" title={item.title} subTitle={item.company}>
//         <ul className="list-disc px-4">
//           <li>
//             Assisted with full-stack software development of AI products for the
//             company
//           </li>
//           <li>Utilised React.js with Shadcn UI to create new webpages</li>
//           <li>
//             Used OpenAPI, PostgreSQL with SQLAlchemy ORM and Firebase for the
//             backend
//           </li>
//           <li>
//             Engaged in Agile development, implemented CI/CD and attended daily
//             stand-ups
//           </li>
//         </ul>
//       </Card>
//     );
//   };

import clsx from "clsx";

import Heading from "../../../artisan/Heading";
import Text from "../../../artisan/Text";

export default function Experience() {
  const companies = [
    {
      id: 0,
      name: "ABC Company",
      role: "Frontend Engineer",
      yearStart: 2022,
      yearEnd: "now",
      desc: "Developed and maintained the company website, implementing new features and improving user experience. Collaborated with the design team to create a responsive and visually appealing user interface. Managed and resolved technical issues and bugs reported by users. Conducted regular code reviews to ensure code quality and adherence to best practices.",
    },
    {
      id: 1,
      name: "123 Studio",
      role: "Web Developer",
      yearStart: 2020,
      yearEnd: 2022,
      desc: "Worked on multiple client projects, collaborating with designers and back-end developers to develop custom websites. Implemented responsive design and optimized performance for better user experience. Conducted user testing and incorporated feedback to improve usability. Assisted in deploying websites to production servers and provided ongoing support and maintenance.",
    },
    {
      id: 2,
      name: "XYZ Agency",
      role: "Software Engineer (Web)",
      yearStart: 2017,
      yearEnd: 2020,
      desc: "Developed and maintained websites for various clients, ranging from small businesses to large corporations. Collaborated with clients to gather requirements and translate them into functional websites. Implemented cross-browser compatibility and responsive design. Optimized websites for search engines and improved website performance.",
    },
  ];

  const buttonStyle =
    "py-2 rounded-lg text-white border-[1px] text-[0.875em] md:text-[1em] font-semibold hover:bg-white hover:text-black mb-3";

  const selectedButtonStyle =
    "py-2 rounded-lg border-[1px] text-[0.875em] md:text-[1em] font-semibold bg-white text-black mb-3";

  return (
    <div
      className="sm:min-h-[360px] md:min-h-[520px] p-12 pb-20 max-w-screen-2xl"
      id="experience"
    >
      <Text className="text-white tracking-[0.35em] text-[0.875em] md:text-[1em] font-semibold mb-[-10px]">
        EXPERIENCES
      </Text>
      <Heading
        className="text-[#FEBB56] my-4 md:text-[3.5em] font-extrabold"
        color="#FEBB56"
        level="heading1"
        tag="h1"
      >
        I have worked at...
      </Heading>

      <div className="hidden md:flex flex-wrap ">
        {companies.map((comp) => (
          <div
            key={comp.id}
            className="flex relative pt-8 pb-4 sm:items-center w-full sm:w-2/3 mx-auto"
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div
                className={clsx(
                  "bg-[#FEBB56] dark:bg-[#FEBB5675]",
                  "h-full w-1 pointer-events-none"
                )}
              />
            </div>
            <div
              className={clsx(
                "bg-[#FEBB56] border-white border-[3px] dark:bg-[#FEBB56]",
                "flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center relative z-10"
              )}
            />

            <div className="flex-grow p-4 flex items-start flex-col ml-4 border-2 rounded-xl border-white">
              <span className="flex items-end">
                <Text
                  className="text-[#FEBB56] text-[1em] md:text-[1.25em] font-extrabold"
                  color="#FEBB56"
                >
                  {comp.role} &nbsp;
                </Text>
                <Text className="text-white text-[0.875em] md:text-[1em] font-bold">
                  @ {comp.name}
                </Text>
              </span>
              <Text className="text-white tracking-widest text-[0.75em] md:text-[0.875em] font-semibold">
                {" "}
                {comp.yearStart} - {comp.yearEnd}
              </Text>

              <div>
                <Text className="text-white text-[0.75em] md:text-[0.875em] font-medium my-1 text-justify">
                  {comp.desc}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:hidden">
        {companies.map((comp) => (
          <div
            className="flex flex-col justify-start border-white border-[1px] rounded-lg p-4 mb-4 transition-all ease-in"
            key={comp.id}
          >
            <Text
              className="text-[#FEBB56] text-[1em] md:text-[1.25em] font-extrabold"
              color="#FEBB56"
            >
              {comp.role} @ {comp.name}
            </Text>
            <Text className="text-white tracking-[0.35em] text-[0.875em] md:text-[1em] font-semibold my-2">
              {comp.yearStart} - {comp.yearEnd}
            </Text>
            <Text className="text-white text-[0.75em] md:text-[0.875em] font-medium my-1 text-justify">
              {comp.desc}{" "}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
