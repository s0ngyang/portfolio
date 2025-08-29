import Heading from "../artisan/Heading";
import Text from "../artisan/Text";
import Image from "next/image";

type HeroProps = {
  currentText: string;
};

const Hero: React.FC<HeroProps> = ({ currentText }) => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center text-center md:min-h-screen"
      id="hero"
    >
      <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full mb-6">
        <Image
          src="/profile.webp"
          width={300}
          height={300}
          alt="Profile Photo"
          loading="eager"
          priority
        />
      </div>

      <Text className="text-white tracking-widest text-[0.875em] md:text-[1em] font-semibold mb-[-10px]">
        Hi, my name is
      </Text>

      <Heading
        className="text-latte my-4 text-[2em] md:text-[3.5em] font-extrabold overflow-hidden"
        level="heading1"
        tag="h1"
      >
        Song Yang
      </Heading>

      <hr className="bg-white w-52 lg:w-80" />
      <div className=" px-8 py-2 mt-5 min-w-[80px] min-h-[40px] flex justify-center items-center">
        <div className="overflow-hidden border-r-[.15em]">
          <Text
            className="text-white tracking-[0.2em] max-md:text-[0.875em] font-semibold"
            id="typing-container"
          >
            {currentText}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Hero;
