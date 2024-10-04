import { Circle } from "../components/Circle.tsx";
import { CutCornerButton } from "../components/CutSornerButton";
import { Hexagon } from "../components/Hexagon";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider ">
          Introducing Blackforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl max-w-xl mx-auto mt-6 text-zinc-400">
          Blockforge iss pioneering smart contract integrity data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center mt-24"></div>
        <div className="inline-flex mt-24 relative z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1800px]" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline-[6px] outline outline-fuchsia-500/10 -outline-offset-[6px] absolute left-[200px] -top-[900px]">
              <img
                src="/assets/images/cube.png"
                alt="cube 3D image"
                className="size-[140px]"
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-[200px] top-[270px]">
              <img
                src="/assets/images/cuboid.png"
                alt="cuboid 3D image"
                className="size-[140px]"
              />
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[80px]">
              <img
                src="/assets/images/torus.png"
                alt="Torus 3D image"
                className="size-[140px]"
              />
            </Circle>
          </div>
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
        </div>

        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full "></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  );
};
