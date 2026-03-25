import { Canvas } from "@react-three/fiber";
import { AnimatedBoxes } from "../components/AnimatedBoxes";
import { AnimatedHeader } from "../components/AnimatedHeader";

const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

export const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-end py-8 sm:py-16"
      id="home"
    >
      <div className="absolute inset-0 size-full">
        <Canvas
          camera={{
            fov: 34,
            position: [0, 1, 20],
          }}
        >
          <ambientLight intensity={0.42} />
          <directionalLight intensity={5.2} position={[7, 10, 8]} />
          <directionalLight intensity={2.8} position={[-7, -4, 4]} />
          <pointLight intensity={8} position={[0, 3, 8]} />
          <pointLight intensity={2.2} position={[0, -2, -6]} />
          <AnimatedBoxes />
        </Canvas>
      </div>
      <div className="z-10">
        <AnimatedHeader
          lineColor="bg-dark"
          subTitle="404 no bugs found"
          text={text}
          title="nilesh"
        />
      </div>
    </section>
  );
};
