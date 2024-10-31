import { motion, useScroll, useTransform } from "framer-motion";
import { Circle } from "../components/Circle.tsx";
import { CutCornerButton } from "../components/CutSornerButton";
import { Hexagon } from "../components/Hexagon";
import { useRef } from "react";

export const HeroSection = () => {
  const iconsahedronRef = useRef(null);
  const cubRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress } = useScroll({
    target: iconsahedronRef,
    offset: ["start end", "end start"],
  });
  const icosaheadronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [40, -100]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -360]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        {/* Text Section */}
        <div className="relative z-10 text-center">
          <p className="uppercase font-extrabold text-zinc-500 tracking-wider">
            Introducing Blackforge
          </p>
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-3xl mt-4 max-w-3xl mx-auto">
            The Future of Blockchain is Here.
          </h1>
          <p className="text-xl md:text-2xl max-w-xl mx-auto mt-6 text-zinc-400">
            Blockforge is pioneering smart contract integrity data solutions.
          </p>
          <div className="flex justify-center mt-10">
            <CutCornerButton className="">Get Started</CutCornerButton>
          </div>
        </div>

        {/* Animation Section */}
        <div className="flex justify-center mt-24 relative z-0">
          <div className="inline-flex mt-24 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" size={1100} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon
                className="size-[1800px]"
                size={1800}
                reverse
                duration={60}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline-[6px] outline outline-fuchsia-500/10 -outline-offset-[6px] absolute left-[200px] -top-[900px]"
                ref={cubRef}
              >
                <Circle className="absolute " animate>
                  <motion.img
                    src="/assets/images/cube.png"
                    alt="cube 3D image"
                    className="size-[140px]"
                    style={{ rotate: cubeRotate }}
                    ref={cubRef}
                  />
                </Circle>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]" animate>
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="cuboid 3D image"
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{ rotate: cuboidRotate }}
                />
              </Circle>
            </div>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              ref={torusRef}
            >
              <Circle className="absolute -left-[600px] -top-[80px]" animate>
                <motion.img
                  src="/assets/images/torus.png"
                  alt="Torus 3D image"
                  className="size-[140px]"
                  style={{ rotate: torusRotate }}
                />
              </Circle>
            </div>
            <motion.div
              className="inline-flex"
              style={{ rotate: icosaheadronRotate }}
              ref={iconsahedronRef}
            >
              <img
                src="/assets/images/icosahedron.png"
                alt=""
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="Iconsahedron 3D Image"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
            <motion.div
              animate={{ translateY: 12, opacity: 0.2 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-1 bg-fuchsia-500 rounded-full "
            />
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
