import Heading from "../../../artisan/Heading";
import Text from "../../../artisan/Text";

type HeroProps = {
  currentText: string;
};

const Hero: React.FC<HeroProps> = ({ currentText }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center py-52 sm:min-h-screen"
      id="hero"
    >
      <Text className="text-white tracking-[0.35em] text-[0.875em] md:text-[1em] font-semibold mb-[-10px]">
        Hi, my name is
      </Text>

      <Heading
        className="text-latte my-4 md:text-[3.5em] font-extrabold overflow-hidden"
        level="heading1"
        tag="h1"
      >
        Song Yang
      </Heading>

      <hr className="bg-white w-52 lg:w-80" />
      <div className=" px-8 py-2 mt-5 min-w-[80px] min-h-[40px] flex justify-center items-center">
        <div className="overflow-hidden border-r-[.15em]">
          <Text
            className="text-white tracking-[0.35em] text-[0.75em] md:text-[0.875em] font-semibold"
            id="typing-container"
          >
            {currentText}
          </Text>
        </div>
      </div>

      <p className="py-4 text-white max-w-screen-xl text-[0.875em] md:text-[1em]">
        As a daily user of software applications, I value aesthetics and
        responsiveness. <br /> My goal as a developer is to create efficient and
        visually pleasing applications, ensuring a delightful user experience.
      </p>
    </div>
  );
};

export default Hero;
