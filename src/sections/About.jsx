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

My recent work spans full-stack feature delivery across React, Next.js, Laravel, FastAPI, and .NET stacks. I excel at API integration, query optimization, vector search pipelines for LLM applications, authentication workflows, production debugging, and sprint-based feature shipping. I'm actively strengthening my C# and ASP.NET Core expertise to build high-performance systems in modern tech stacks.`;

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

    if (imgRef.current) {
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
    }
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
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <div className="flex w-full max-w-md flex-col justify-between gap-8 rounded-3xl border border-light/10 bg-white/5 p-8 text-light shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-light/40">
                Profile
              </p>
              <h3 className="text-3xl font-semibold text-light">
                Full-Stack TypeScript Engineer
              </h3>              <p className="text-base leading-relaxed text-light/65">
                I build reliable systems, clean interfaces, and shipping-focused
                products across React, backend APIs, and AI workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-light/80">
              <span className="rounded-full border border-light/10 px-3 py-1">
                React
              </span>
              <span className="rounded-full border border-light/10 px-3 py-1">
                APIs
              </span>
              <span className="rounded-full border border-light/10 px-3 py-1">
                AI / LLM
              </span>
            </div>
          </div>
          <img
            alt="Nilesh"
            className="w-full max-w-md rounded-3xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
            ref={imgRef}
            src="/images/me.jpg"
          />
        </div>
        <AnimatedLine className={"w-full lg:w-1/2"} text={aboutText} />
      </div>
    </section>
  );
};
