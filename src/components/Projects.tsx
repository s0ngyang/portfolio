import Heading from "../artisan/Heading";
import Text from "../artisan/Text";
import Image from "next/image";
import typedashImage from "../assets/typedash.webp";
import exportifellasImage from "../assets/exportifellas.webp";

const projectObjs = [
  {
    name: "TypeDash V2",
    desc: [
      "Revamping a real-time type racing web app with single and multiplayer modes, adding typing statistics tracking to enhance user engagement and performance insights",
      "Migrating backend from Express.js to Golang for better concurrency support; implementing a Redis-powered leaderboard system for real-time ranking updates",
      "Built with React and WebSockets using Socket.IO to broadcast live typing progress to users in real time",
    ],
    thumb: {
      src: typedashImage,
      width: 1530,
      height: 1500,
    },
    website: "https://typedash.songyang.dev",
    repo: "https://github.com/clickclackers/typedash-v2",
  },
  {
    name: "Exportifellas",
    desc: [
      "Built a plaintext playlist extraction feature using the Spotify API in an open-source fork, deployed for internal use in NUS Raffles Hall, streamlining the song voting process for all future performances",
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
      className="flex flex-col px-4 md:px-12 pt-12 py-12 md:min-h-screen justify-center items-center max-w-screen-2xl"
      id="projects"
    >
      <Heading
        className="text-latte-700 my-4 text-[2em] md:text-[3.5em] text-2xl font-extrabold"
        level="heading1"
        tag="h1"
      >
        Projects
      </Heading>

      <div className="grid grid-cols-1 mt-10 gap-10 w-full">
        {projectObjs.map((proj) => (
          <div
            key={proj.name}
            className="max-w-screen-lg border-white border-2 bg-transparent relative flex flex-col md:flex-row rounded-2xl transition-shadow duration-200"
          >
            <div className="w-full md:w-1/3 relative rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
              <Image
                className="object-cover h-full"
                src={proj.thumb.src}
                width={proj.thumb.width}
                height={proj.thumb.height}
                alt={proj.name}
              />
            </div>

            <div className="w-full md:w-2/3 p-4 flex flex-col justify-center bg-neutral-800/70 rounded-b-2xl">
              <Text className="text-whip font-bold text-lg md:text-xl lg:text-2xl">
                {proj.name}
                {proj.website && (
                  <span className="ml-4 text-sm font-semibold md:text-base lg:text-lg text-blue-700 hover:underline">
                    <a
                      href={proj.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  </span>
                )}
                {proj.repo && (
                  <span className="ml-2 text-sm font-semibold md:text-base lg:text-lg text-blue-700 hover:underline">
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo
                    </a>
                  </span>
                )}
              </Text>
              <ul className="list-disc text-white mt-2 text-sm md:text-base ml-5">
                {proj.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-center mt-10 flex-col">
        <button className="text-white tracking-[0.35em] font-semibold text-[0.875em] md:text-[1em] border-white border-[1px] py-2 px-8 rounded-lg hover:bg-white hover:text-black transition-all transform ease-linear">
          SHOW MORE
        </button>
        <Text className="text-white tracking-[0.15em] text-[0.75em] md:text-[0.875em] text-center mt-3 font-semibold">
          ALTERNATIVELY, CHECK OUT MY{" "}
          <a
            href="https://github.com"
            target="_blank"
            className="text-[#FEBB56] hover:underline"
          >
            GITHUB
          </a>
          .
        </Text>
      </div> */}
    </div>
  );
};

export default Projects;
