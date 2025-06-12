import clsx from "clsx";

import Heading from "../../../artisan/Heading";
import Text from "../../../artisan/Text";

export default function Experience() {
  const experiences = [
    {
      id: 0,
      name: "National University of Singapore",
      role: "Teaching Assistant",
      yearStart: "Jan 2023",
      yearEnd: "Jun 2023",
      desc: (
        <ul className="list-disc p-2">
          <li>
            Collaborated closely with Prof. Tan Tiow Seng and fellow teaching
            assistants to develop examination grading scheme to effectively
            assess students&#39; understanding of programming methodology
            concepts in the CS1010X course
          </li>
          <li>
            Taught the following topics with strong mastery in Python and Java:
            Functional Abstraction, Recursion, Orders of Growth, Data
            Abstraction, OOP, Dynamic Programming
          </li>
          <li>
            Displayed strong mentoring abilities by providing individualised
            guidance to a group of 7 students, based on unique learning styles
            and skill levels
          </li>
        </ul>
      ),
    },
    {
      id: 1,
      name: "Podsmart AI",
      role: "Software Engineer Intern",
      yearStart: "May 2024",
      yearEnd: "Aug 2024",
      desc: (
        <ul className="list-disc p-2">
          <li>
            Created an episode page with an integrated audio player from
            scratch, utilising Next.js with Shadcn UI
          </li>
          <li>
            Developed a monthly user usage tracking system to accurately track
            monthly subscription limits using FastAPI, Supabase with PostgreSQL
          </li>
          <li>
            Extract user defined custom modules from podcasts using Modal GPU
            for transcription, Anthropic and OpenAI to parse output
          </li>
          <li>
            Identified and promptly resolved authorisation security issues in
            the frontend and backend
          </li>
          <li>
            Optimised API performance for episode page, reducing latency by 60%
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      name: "Voltade",
      role: "Software Engineer Intern",
      yearStart: "Jan 2025",
      yearEnd: "Present",
      desc: (
        <ul className="list-disc p-2">
          <li>
            Launched an AI curriculum planner by leading weekly customer
            meetings and conducting demos. Iterated by gathering user feedback
            and resolving production issues.
          </li>
          <li>
            Developed a video-to-report tool using FFmpeg to scale and extract
            frames, and OpenAI&apos;s GPT to identify students, reducing
            teachers&apos; time spent per report by 75%
          </li>
          <li>
            Developed an admin portal to manage classes, lessons and learning
            objectives using React.js with TanStack. Designed flexible schemas
            in Drizzle ORM to adapt to changing requirements and created REST
            APIs with Hono.js and Supabase with PostgreSQL for effective data
            retrieval
          </li>
          <li>
            Successfully migrated customers across platforms by creating
            scheduled CRON jobs with TypeScript to extract data from external
            sources, ensuring data consistency through idempotency
          </li>
          <li>
            Learnt Vue.js with Ruby on Rails from scratch to launch a WhatsApp
            broadcast feature for CRM app within 2 weeks
          </li>
          <li>
            Created an online VS Code editor by spinning up a Kubernetes pod on
            demand and connecting via VS Code protocol, improving developer
            experience
          </li>
          <li>Used Vue.js with Ruby on Rails to develop CRM platform</li>
          <li>
            Developed an internal platform to display micro frontend apps and
            start a VS Code dev container in Kubernetes pod, improving developer
            experience and iteration speed
          </li>
        </ul>
      ),
    },
  ];

  // const buttonStyle =
  //   "py-2 rounded-lg text-white border-[1px] text-[0.875em] md:text-[1em] font-semibold hover:bg-white hover:text-black mb-3";

  // const selectedButtonStyle =
  //   "py-2 rounded-lg border-[1px] text-[0.875em] md:text-[1em] font-semibold bg-white text-black mb-3";

  return (
    <div
      className="py-20 max-w-screen-2xl flex justify-center flex-col"
      id="experience"
    >
      <Text className="text-white tracking-[0.35em] text-[0.875em] md:text-[1em] font-semibold mb-[-10px] text-center">
        EXPERIENCE
      </Text>
      <Heading
        className="text-latte-700 my-4 text-[2em] md:text-[3.5em] font-extrabold text-center"
        level="heading1"
        tag="h1"
      >
        I have worked at...
      </Heading>

      <div className="hidden md:flex flex-wrap max-w-screen-lg">
        {experiences
          .sort((a, b) => b.id - a.id)
          .map((comp) => (
            <div
              key={comp.id}
              className="flex relative pt-8 pb-4 sm:items-center w-full mx-auto "
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

              <div className="flex-grow p-4 flex items-start flex-col ml-4 border-2 rounded-xl bg-neutral-800/70 border-white">
                <span className="flex items-center gap-1">
                  <Text className="text-whip text-[1em] md:text-[1.25em] font-extrabold">
                    {comp.role}
                  </Text>
                  <Text className="text-white text-sm md:text-base font-bold">
                    @ {comp.name}
                  </Text>
                </span>
                <Text className="text-white tracking-widest text-sm md:text-base font-semibold">
                  {comp.yearStart} - {comp.yearEnd}
                </Text>

                <div>
                  <Text className="text-white text-sm md:text-base font-medium my-1">
                    {comp.desc}
                  </Text>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col md:hidden">
        {experiences
          .sort((a, b) => b.id - a.id)
          .map((comp) => (
            <div
              className="flex flex-col justify-start border-white border-[1px] rounded-lg p-4 mb-4 transition-all ease-in"
              key={comp.id}
            >
              <Text className="text-white text-[1em] md:text-[1.25em] font-extrabold">
                <span className="text-whip">{comp.role}</span> @ {comp.name}
              </Text>
              <Text className="text-white tracking-wider text-[0.875em] md:text-[1em] font-semibold my-2">
                {comp.yearStart} - {comp.yearEnd}
              </Text>
              <Text className="text-white text-[0.75em] md:text-[0.875em] font-medium my-1">
                {comp.desc}
              </Text>
            </div>
          ))}
      </div>
    </div>
  );
}
