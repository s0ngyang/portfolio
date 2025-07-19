import Heading from "../artisan/Heading";
import Text from "../artisan/Text";

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
          Collaborated closely with Prof. Tan Tiow Seng to develop examination
          grading scheme for the CS1010X Programming Methodology course, taught
          OOP, Dynamic Programming in Python and Java
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
          Built an intuitive audio player in React, enabling UX through progress
          bar markers for key topics, synchronized playback with transcript
          timestamps, and direct audio jumps to identified entities
        </li>
        <li>
          Devised a usage tracking schema using FastAPI, Supabase with
          PostgreSQL to precisely track and enforce user monthly podcast
          summarisation limits, eliminating a loophole that allowed unlimited
          access to transcribed episodes
        </li>
        <li>
          Resolved a critical authorization flaw by implementing role-based
          access control middleware using JWT, preventing free-tier users from
          accessing premium features
        </li>
        <li>
          Optimised API performance for episode page by adding index to SQL
          query, which sped up page loading by 60%
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    name: "Voltade",
    role: "Software Engineer Intern",
    yearStart: "Jan 2025",
    yearEnd: "Jun 2025",
    desc: (
      <ul className="list-disc p-2">
        <li>
          Led the launch of an AI curriculum planner adopted by 200 users across
          28 preschool branches by running weekly customer meetings, live demos,
          and continuous feedback loops; resolved production issues
        </li>
        <li>
          Developed a video-to-report tool using React with TanStack, FFmpeg to
          scale and extract frames, and OpenAI GPT to identify students,
          reducing teachers’ time spent per report by 75%
        </li>
        <li>
          Automated customer migration across platforms by creating CRON jobs in
          TypeScript to extract data from external sources, implementing
          idempotent logic to ensure consistency across 20000+ records
        </li>
        <li>
          Learnt Vue and Ruby on Rails from scratch within 2 weeks to launch a
          WhatsApp broadcast feature for CRM app, enabling clients to instantly
          launch marketing campaigns to 500+ customers
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    name: "Ola Chat",
    role: "Software Engineer Intern",
    yearStart: "Jul 2025",
    yearEnd: "Present",
    desc: (
      <ul className="list-disc p-2">
        <li>
          Built a mobile-responsive static React page using Vite that
          dynamically loads domain-specific assets across 3 domains,
          streamlining deployment workflows and reducing configuration
          complexity
        </li>
      </ul>
    ),
  },
];

export default function Experience() {
  return (
    <div
      className="pt-20 max-w-screen-2xl flex justify-center flex-col"
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

      <div className="md:flex flex-wrap max-w-screen-lg">
        {experiences
          .sort((a, b) => b.id - a.id)
          .map((comp) => (
            <div
              key={comp.id}
              className="flex relative py-4 sm:items-center w-full mx-auto "
            >
              <div className="hidden md:flex h-full w-6 absolute inset-0 items-center justify-center">
                <div className="bg-latte h-full w-1 pointer-events-none" />
              </div>
              <div className="hidden md:inline-flex bg-khaki-300 border-white border-[3px] flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0  items-center justify-center relative z-10" />

              <div className="flex-grow p-4 flex items-start flex-col md:ml-4 border-[1px] md:border-2 rounded-xl bg-neutral-800/70 border-white">
                <Text className="text-slate-300 text-[1em] md:text-[1.25em] leading-6 font-bold">
                  <span className="text-whip">{comp.role}</span>{" "}
                  <span className="text-white">@</span> {comp.name}
                </Text>
                <Text className="text-white tracking-wider text-sm md:text-base font-semibold">
                  {comp.yearStart} - {comp.yearEnd}
                </Text>
                <Text className="text-white text-sm md:text-base font-medium my-1 ml-1 md:ml-2">
                  {comp.desc}
                </Text>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
