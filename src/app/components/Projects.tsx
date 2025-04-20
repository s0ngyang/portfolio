import Heading from "../../../artisan/Heading";
import Text from "../../../artisan/Text";
import Image from "next/image";
import typedashImage from "../../assets/typedash.jpeg";

const Projects = () => {
  const handleViewProject = (projectUrl: string | undefined) => {
    window.open(projectUrl, "_blank");
  };

  const projectObjs = [
    {
      name: "TypeDash",
      desc: [
        "A type racing website with multiplayer features and customisable loadouts and statistics",
        "Utilised Express.js and Prisma ORM to implement REST APIs, Passport.js for authentication middleware",
        "Leverage Socket.IO for real-time updates; display race results and live leaderboard changes to users",
        "Wrote unit tests using Jest to ensure bug free iterations",
      ],
      thumb: typedashImage,
      website: "https://main--cosmic-fox-2ad203.netlify.app/singleplayer",
      repo: "https://github.com/raynertjx/typedash",
    },
  ];

  return (
    <div
      className="flex flex-col px-4 md:px-12 pt-12 py-12 md:min-h-screen justify-center items-center max-w-screen-lg"
      id="projects"
    >
      <Heading
        className="text-latte-700 my-4 text-[2em] md:text-[3.5em] text-2xl font-extrabold"
        level="heading1"
        tag="h1"
      >
        Projects
      </Heading>

      <div className="grid grid-cols-1 mt-10 gap-5 w-full">
        {projectObjs.map((proj) => (
          <div
            key={proj.name}
            className="max-w-screen-lg border-white border-2 bg-transparent relative flex flex-col md:flex-row rounded-2xl transition-shadow duration-200"
          >
            <div className="w-full md:w-1/3 relative rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
              <Image
                className="object-cover h-full"
                src={proj.thumb.src}
                width={1530}
                height={1500}
                alt="TypeDash thumbnail"
              />
            </div>

            <div className="w-full md:w-2/3 p-4 flex flex-col justify-center bg-neutral-800/70">
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
