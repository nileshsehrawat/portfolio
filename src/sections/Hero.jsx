import { AnimatedHeader } from "../components/AnimatedHeader";
import { WovenCenter } from "../components/WovenCenter";

const text = `I help growing brands and startups gain an
unfair advantage through reliable,
results-driven web platforms`;

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black py-8 text-light sm:py-16"
      id="home"
    >
      <WovenCenter />

      <div className="z-10">
        <AnimatedHeader
          lineColor="bg-light"
          subTitle="React Engineer | Upskilling in .NET"
          text={text}
          title="nilesh"
        />
      </div>
    </section>
  );
};

export default Hero;
