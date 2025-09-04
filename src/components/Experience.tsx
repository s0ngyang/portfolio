const experiences = [
  {
    id: 0,
    name: "National University of Singapore",
    role: "Teaching Assistant",
    yearStart: "Jan 2023",
    yearEnd: "Jun 2023",
    desc: (
      <ul className="list-disc p-2">
        <li>CS1010X Programming Methodology – Python</li>
      </ul>
    ),
  },
  {
    id: 1,
    name: "Podsmart AI",
    role: "Software Engineer Intern",
    yearStart: "May 2024",
    yearEnd: "Aug 2024",
    website: "https://www.podsmartai.com/",
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
    website: "https://www.voltade.com/",
    desc: (
      <ul className="list-disc p-2">
        <li>
          Spearheaded end-to-end design of AI curriculum planner adopted across
          28 preschool branches, showcasing attention to detail by iteratively
          refining features through weekly stakeholder reviews, live demos, and
          continuous feedback loops
        </li>
        <li>
          Automated data migration across platforms by building an ETL-style
          pipeline using Graphile Worker cron jobs to extract data from external
          sources, transform WhatsApp message data and load into PostgreSQL,
          ensuring idempotency across 20000+ records
        </li>
        <li>
          Resolved a Supabase Auth production bug affecting Outlook users by
          analysing server logs and identifying email prefetching behaviour that
          caused magic links to expire
        </li>
        <li>
          Developed a video-to-report tool using React with TanStack, FFmpeg to
          scale and extract frames, and OpenAI GPT tool calls to identify
          students, reducing teachers’ time spent per report by 75%
        </li>
        <li>
          Learnt Vue and Ruby on Rails from scratch within 2 weeks to launch a
          broadcast feature with metrics tracking leveraging WhatsApp Cloud API
          to send messages to 500+ customers per campaign
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
    website: "https://www.olachat.sg/",
    desc: (
      <ul className="list-disc p-2">
        <li>
          Engineered React mini-games with WebView, ensuring UI consistency
          through meticulous design reviews and performance optimizations,
          including lazy loading and TanStack Query caching, resulting in higher
          user engagement
        </li>
        <li>
          Migrated CI/CD to a modular two-step flow by creating reusable GitHub
          workflows for artifact builds and Aliyun Flow for deployments, cutting
          server load and improving maintainability and separation of concerns
        </li>
        <li>
          Optimized deployment process by analyzing complexity vs. downtime
          tradeoffs; selected a remove-and-replace method over symlink-based
          deployment, ensuring maintainability while keeping downtime
          insignificant ({"<0.2s"})
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
      <p className="text-white text-center text-[0.875em] md:text-[1em] font-semibold leading-tight tracking-[0.35em]">
        EXPERIENCE
      </p>
      <h1 className="text-beige my-4 text-[2em] md:text-[3.5em] font-extrabold text-center leading-tight">
        I have worked at...
      </h1>

      <div className="md:flex flex-wrap max-w-screen-lg">
        {experiences
          .sort((a, b) => b.id - a.id)
          .map((comp) => (
            <div
              key={comp.id}
              className="flex relative py-4 sm:items-center w-full mx-auto "
            >
              <div className="hidden md:flex h-full w-6 absolute inset-0 items-center justify-center">
                <div className="bg-slate-600/50 h-full w-1 pointer-events-none" />
              </div>
              <div className="hidden md:inline-flex bg-gradient-to-r from-yellow-400 to-amber-500 border-2 border-slate-300 flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 items-center justify-center relative z-10 shadow-lg" />

              <div className="flex-grow p-4 flex items-start flex-col md:ml-4 border border-slate-600/50 rounded-xl bg-slate-800/60 backdrop-blur-sm shadow-lg hover:bg-slate-800/80 transition-all duration-300 hover:shadow-xl">
                <p className="text-[1em] md:text-[1.25em] leading-6 font-semibold">
                  <span className="text-starry">{`${comp.role} `}</span>
                  <span className="text-default">{`@ `}</span>
                  <a
                    href={comp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-day ${
                      comp.website ? "hover:underline" : ""
                    }`}
                  >
                    {comp.name}
                  </a>
                </p>
                <p className="text-white text-sm md:text-base font-semibold">
                  {comp.yearStart} - {comp.yearEnd}
                </p>
                <p className="text-default text-sm md:text-base font-normal my-1 ml-1 md:ml-2">
                  {comp.desc}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
