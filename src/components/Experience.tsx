const formatMonthYear = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(
    date
  );

const experiences = [
  {
    id: 0,
    name: "National University of Singapore",
    role: "Teaching Assistant",
    yearStart: new Date(2023, 0, 1),
    yearEnd: new Date(2023, 5, 30),
    desc: ["CS1010X Programming Methodology – Python"],
  },
  {
    id: 1,
    name: "Podsmart AI",
    role: "Software Engineer Intern",
    yearStart: new Date(2024, 4, 1),
    yearEnd: new Date(2024, 7, 31),
    website: "https://www.podsmartai.com/",
    desc: [
      "Built an intuitive audio player in React, enabling UX through progress bar markers for key topics, synchronized playback with transcript timestamps, and direct audio jumps to identified entities",
      "Devised a usage tracking schema using FastAPI, Supabase with PostgreSQL to precisely track and enforce user monthly podcast summarisation limits, eliminating a loophole that allowed unlimited access to transcribed episodes",
      "Resolved a critical authorization flaw by implementing role-based access control middleware using JWT, preventing free-tier users from accessing premium features",
      "Optimised API performance for episode page by adding index to SQL query, which sped up page loading by 60%",
    ],
  },
  {
    id: 2,
    name: "Voltade",
    role: "Software Engineer Intern",
    yearStart: new Date(2025, 0, 1),
    yearEnd: new Date(2025, 5, 30),
    website: "https://www.voltade.com/",
    desc: [
      "Spearheaded end-to-end design of AI curriculum planner adopted across 28 preschool branches; iteratively refined features via weekly stakeholder reviews, live demos, and continuous feedback loops",
      "Automated data migration across platforms by building an ETL-style pipeline using Graphile Worker cron jobs to extract from external sources, transform WhatsApp message data, and load into PostgreSQL with idempotency across 20,000+ records",
      "Resolved a Supabase Auth production bug affecting Outlook users by analyzing server logs and identifying email prefetching behavior that caused magic links to expire",
      "Developed a video-to-report tool using React with TanStack and FFmpeg to scale/extract frames, plus OpenAI GPT tool calls to identify students, reducing teachers’ time per report by 75%",
      "Learnt Vue and Ruby on Rails within 2 weeks to launch a broadcast feature with metrics tracking leveraging WhatsApp Cloud API to send messages to 500+ customers per campaign",
    ],
  },
  {
    id: 3,
    name: "Ola Chat",
    role: "Software Engineer Intern",
    yearStart: new Date(2025, 6, 1),
    yearEnd: null,
    website: "https://www.olachat.sg/",
    desc: [
      "Engineered React mini-games with WebView; ensured UI consistency via design reviews and performance optimizations including lazy loading and TanStack Query caching, resulting in higher user engagement",
      "Migrated CI/CD to a modular two-step flow by creating reusable GitHub workflows for artifact builds and Aliyun Flow for deployments, cutting server load and improving maintainability",
      "Optimized deployment process by evaluating complexity vs. downtime tradeoffs; selected a remove-and-replace method over symlink-based deployment, keeping downtime insignificant (<0.2s)",
    ],
  },
];

export default function Experience() {
  return (
    <div
      className="pt-20 max-w-screen-2xl flex justify-center flex-col"
      id="experience"
    >
      <p className="text-default text-center text-[0.875em] md:text-[1em] font-semibold leading-tight tracking-[0.35em]">
        EXPERIENCE
      </p>
      <h1 className="text-beige my-4 text-[2em] md:text-[3.5em] font-extrabold text-center leading-tight">
        I have worked at...
      </h1>

      <div className="md:flex flex-wrap max-w-screen-lg">
        {experiences
          .sort((a, b) => b.yearStart.getTime() - a.yearStart.getTime())
          .map((comp) => (
            <div
              key={comp.id}
              className="flex relative py-4 sm:items-center w-full mx-auto "
            >
              <div className="hidden md:flex h-full w-6 absolute inset-0 items-center justify-center">
                <div className="bg-slate-700 h-full w-1 pointer-events-none" />
              </div>
              <div className="hidden md:inline-flex bg-gradient-to-r from-yellow-400 to-amber-500 border-2 border-slate-300 flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 items-center justify-center relative z-10 shadow-lg" />

              <div className="flex-grow p-4 flex items-start flex-col md:ml-4 border border-slate-600/50 rounded-xl bg-slate-800/60 backdrop-blur-sm shadow-lg hover:bg-slate-800/80 transition-all duration-300 hover:shadow-xl">
                <p className="text-[1em] md:text-[1.25em] leading-6 font-semibold">
                  <span className="text-starry">{`${comp.role} `}</span>
                  <span className="text-default">{`@ `}</span>
                  {comp.website ? (
                    <a
                      href={comp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-day hover:underline"
                    >
                      {comp.name}
                    </a>
                  ) : (
                    <span className="text-day">{comp.name}</span>
                  )}
                </p>
                <p className="text-default text-sm md:text-base font-semibold">
                  {formatMonthYear(comp.yearStart)} -{" "}
                  {comp.yearEnd ? formatMonthYear(comp.yearEnd) : "Present"}
                </p>
                <ul className="text-default text-sm md:text-base font-normal my-1 ml-1 md:ml-2 list-disc p-2">
                  {comp.desc.map((text, idx) => (
                    // idx can be used as the key because this array is static
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
