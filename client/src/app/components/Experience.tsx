import clsx from "clsx";

import Heading from "../../../artisan/Heading";
import Text from "../../../artisan/Text";

export default function Experience() {
  const companies = [
    {
      id: 0,
      name: "Podsmart AI",
      role: "Software Engineer Intern",
      yearStart: "May 2022",
      yearEnd: "Present",
      desc: (
        <ul className="list-disc p-2">
          <li>Utilise React.js with Shadcn UI to create a new episode page</li>
          <li>
            Use FastAPI, PostgreSQL with SQLAlchemy ORM to revamp how
            users&apos; monthly usage is tracked
          </li>
          <li>
            Engage in Agile development, implement CI/CD, attend daily stand-ups
          </li>
          <li>
            Use Modal GPU for transcription, Anthropic and OpenAI to extract
            custom modules
          </li>
        </ul>
      ),
    },
    {
      id: 1,
      name: "National University of Singapore",
      role: "Teaching Assistant",
      yearStart: "Jan 2023",
      yearEnd: "Jun 2023",
      desc: (
        <ul className="list-disc p-2">
          <li>
            Topics taught: Functional Abstraction, Recursion, Orders of Growth,
            Data Abstraction, OOP, Dynamic Programming
          </li>
          <li>
            Collaborated closely with Prof. Tan Tiow Seng and fellow teaching
            assistants to develop comprehensive examination materials that
            effectively assessed students&apos; understanding of programming
            methodology concepts in the CS1010X course
          </li>
          <li>
            Displayed strong mentoring abilities by building rapport with a
            diverse group of 7 students, providing individualised guidance based
            on their unique learning styles and skill levels
          </li>
        </ul>
      ),
    },
  ];

  const buttonStyle =
    "py-2 rounded-lg text-white border-[1px] text-[0.875em] md:text-[1em] font-semibold hover:bg-white hover:text-black mb-3";

  const selectedButtonStyle =
    "py-2 rounded-lg border-[1px] text-[0.875em] md:text-[1em] font-semibold bg-white text-black mb-3";

  return (
    <div
      className="p-12 pb-20 max-w-screen-2xl md:min-h-screen flex justify-center flex-col"
      id="experience"
    >
      <Text className="text-white tracking-[0.35em] text-[0.875em] md:text-[1em] font-semibold mb-[-10px]">
        EXPERIENCES
      </Text>
      <Heading
        className="text-latte-700 my-4 md:text-[3.5em] font-extrabold"
        level="heading1"
        tag="h1"
      >
        I have worked at...
      </Heading>

      <div className="hidden md:flex flex-wrap">
        {companies.map((comp) => (
          <div
            key={comp.id}
            className="flex relative pt-8 pb-4 sm:items-center w-full sm:w-2/3 mx-auto"
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div
                className={clsx(
                  "bg-latte dark:bg-latte",
                  "h-full w-1 pointer-events-none"
                )}
              />
            </div>
            <div
              className={clsx(
                "bg-khaki-300 dark:bg-khaki-300 border-white border-[3px]",
                "flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center relative z-10"
              )}
            />

            <div className="flex-grow p-4 flex items-start flex-col ml-4 border-2 rounded-xl border-white">
              <span className="flex items-end">
                <Text className="text-whip text-[1em] md:text-[1.25em] font-extrabold">
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
            <Text className="text-white text-[1em] md:text-[1.25em] font-extrabold">
              <span className="text-whip">{comp.role}</span> @ {comp.name}
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
