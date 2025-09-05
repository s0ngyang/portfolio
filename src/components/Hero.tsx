interface HeroProps {
  currentText: string;
}

const Hero: React.FC<HeroProps> = ({ currentText }) => {
  return (
    <div
      className="flex flex-col w-full items-center justify-center text-center md:min-h-screen"
      id="hero"
    >
      <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full mb-6 pointer-events-none select-none">
        <img
          src="/profile.webp"
          width={300}
          height={300}
          alt="Profile Photo"
          loading="eager"
        />
      </div>

      <p className="text-default tracking-wide text-[0.875em] md:text-[1em] font-semibold">
        Hi, my name is
      </p>

      <h1 className="text-beige my-4 text-[2em] md:text-[3.5em] leading-tight font-extrabold overflow-hidden">
        Song Yang
      </h1>

      <hr className="bg-white w-52 lg:w-80" />
      <div className=" px-8 py-2 mt-4 min-w-[80px] min-h-[40px] flex justify-center items-center">
        <div className="overflow-hidden border-r-[.15em]">
          <p
            className="text-default tracking-wider max-md:text-[0.875em] font-semibold"
            id="typing-container"
          >
            {currentText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
