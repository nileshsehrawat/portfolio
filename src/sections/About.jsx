import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { AnimatedHeader } from "../components/AnimatedHeader";
import { AnimatedLine } from "../components/AnimatedLine";

export const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance systems
    from prototype to production`;
  const aboutText = `I focus on building fast, intuitive products, from polished React interfaces to reliable backend APIs. I care deeply about maintainable code, clear architecture, and shipping features that solve real user problems.

My recent work includes API integration, authentication workflows, query optimization, and production issue resolution. I am currently strengthening my C# and ASP.NET Core fundamentals to contribute effectively in React + .NET teams.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      ease: "power1.inOut",
      scale: 0.95,
      scrollTrigger: {
        end: "bottom 20%",
        scrub: true,
        start: "bottom 80%",
        trigger: "#about",
      },
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
      },
    });
  });
  return (
    <section
      className="flex min-h-screen flex-col gap-8 rounded-b-4xl bg-dark py-8 text-light sm:py-16 md:mx-4 lg:gap-16"
      id="about"
    >
      <AnimatedHeader
        subTitle={"Code with purpose, built to scale"}
        text={text}
        title={"About"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-4 text-lg text-light/60 tracking-wide sm:px-8 md:text-xl lg:flex-row lg:text-2xl">
        <img
          alt="Nilesh"
          className="w-md rounded-3xl"
          ref={imgRef}
          src="images/me.webp"
        />
        <AnimatedLine className={"w-full"} text={aboutText} />
      </div>
    </section>
  );
};
