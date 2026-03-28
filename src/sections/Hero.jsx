import { AnimatedHeader } from "../components/AnimatedHeader"
import { WovenCenter } from "../components/WovenCenter"

const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black py-8 text-light sm:py-16" id="home">
      <WovenCenter />

      <div className="z-10">
        <AnimatedHeader
          lineColor="bg-light"
          subTitle="404 no bugs found"
          text={text}
          title="nilesh"
        />
      </div>
    </section>
  )
}

export default Hero
