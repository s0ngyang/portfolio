import typedashImage from "/src/assets/typedash.webp";
import exportifellasImage from "/src/assets/exportifellas.webp";

const projectObjs = [
  {
    name: "TypeDash V2",
    desc: [
      "A real-time type-racing game using React with TanStack, Golang with Gin & WebSockets, leveraging Redis for real time updates and leaderboard rankings",
      "Containerized application with Docker and deployed using Docker Compose orchestration, integrating Caddy reverse proxy for automatic HTTPS, PostgreSQL with health checks, and Docker secrets for credential management",
    ],
    thumb: {
      src: typedashImage,
      width: 3024,
      height: 1709,
    },
    website: "https://typedash.songyang.dev",
    repo: "https://github.com/clickclackers/typedash-v2",
  },
  {
    name: "Exportifellas",
    desc: [
      "Ideated a plaintext playlist extraction feature using the Spotify API in an open-source fork, deployed for internal use in NUS Raffles Hall to streamline song voting process",
    ],
    thumb: {
      src: exportifellasImage,
      width: 3024,
      height: 1714,
    },
    website: "https://s0ngyang.github.io/exportifellas",
    repo: "https://github.com/s0ngyang/exportifellas",
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col pt-12 py-12 md:min-h-screen justify-center items-center max-w-screen-2xl"
      id="projects"
    >
      <h1 className="text-beige my-4 text-[2em] md:text-[3.5em] text-2xl font-extrabold">
        Projects
      </h1>

      <div className="grid grid-cols-1 mt-10 gap-10 w-full">
        {projectObjs.map((proj) => (
          <div
            key={proj.name}
            className="max-w-screen-lg border border-slate-600/50 relative flex flex-col md:flex-row rounded-2xl transition-all duration-300 hover:shadow-xl shadow-lg"
          >
            <div className="w-full md:w-1/3 min-h-64 relative rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={proj.thumb.src}
                width={proj.thumb.width}
                height={proj.thumb.height}
                alt={proj.name}
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-2/3 p-4 flex flex-col justify-center bg-slate-800/60 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                <span className="text-starry">{proj.name}</span>
                {proj.website && (
                  <span className="ml-4 text-sm font-semibold md:text-base lg:text-lg text-day hover:underline">
                    <a href={proj.website} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </span>
                )}
                {proj.repo && (
                  <span className="ml-2 text-sm font-semibold md:text-base lg:text-lg text-day hover:underline">
                    <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                      Repo
                    </a>
                  </span>
                )}
              </p>
              <ul className="list-disc text-default mt-2 text-sm md:text-base ml-5">
                {proj.desc.map((text, idx) => (
                  <li key={idx}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
