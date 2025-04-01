import Heading from "../../../artisan/Heading";
import Text from "../../../artisan/Text";
import Image from "next/image";
import displayPhoto from "../../assets/display photo.jpeg";

type HeroProps = {
  currentText: string;
};

const Hero: React.FC<HeroProps> = ({ currentText }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center md:min-h-screen md:-mt-20"
      id="hero"
    >
      <div className="w-[200px] h-[200px] overflow-hidden rounded-full mb-6">
        <Image
          className="object-center"
          src={displayPhoto.src}
          width={200}
          height={200}
          alt="Display photo"
          layout="fixed"
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
            className="text-white tracking-[0.35em] max-md:text-[0.875em] font-semibold"
            id="typing-container"
          >
            {currentText}
          </Text>
        </div>
      </div>

      <Text className="py-4 text-white max-w-screen-lg text-[0.875em] md:text-[1em] font-medium">
        As a daily user of software applications, I value aesthetics and
        responsiveness. <br /> My goal as a developer is to create performant
        and intuitive applications, ensuring a delightful user experience.
      </Text>
    </div>
  );
};

export default Hero;
