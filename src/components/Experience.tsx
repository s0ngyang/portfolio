const formatMonthYear = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date);

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
    role: "Frontend Software Engineer Intern",
    yearStart: new Date(2024, 4, 1),
    yearEnd: new Date(2024, 7, 31),
    website: "https://www.podsmartai.com/",
    desc: ["AI Podcast Summarisation with React and Supabase"],
  },
  {
    id: 2,
    name: "Voltade",
    role: "Full-Stack Software Engineer Intern",
    yearStart: new Date(2025, 0, 1),
    yearEnd: new Date(2025, 5, 30),
    website: "https://www.voltade.com/",
    desc: ["Enterprise Resource Planning with React and Hono.js"],
  },
  {
    id: 3,
    name: "Ola Chat",
    role: "Full-Stack Software Engineer Intern",
    yearStart: new Date(2025, 6, 1),
    yearEnd: new Date(2025, 11, 31),
    website: "https://www.olachat.sg/",
    desc: ["WebView events with React and Golang gRPC"],
  },
];

export default function Experience() {
  return (
    <div className="pt-20 max-w-screen-2xl flex justify-center flex-col" id="experience">
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
            <div key={comp.id} className="flex relative py-4 sm:items-center w-full mx-auto ">
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
