import { CutCornerButton } from "../components/CutSornerButton";
import { TextButton } from "../components/TextButton";
const listItems = [
  "Experience unparalleled security and scalibility",
  "Fully benefit from scalable network effects",
  "Unlock the potential off decentralized networks",
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Blockchain provides robust and secure infrastructure to support
                the nexxt generation of decentralized application
              </p>

              <ul className="flex flex-col gap-8 mt-12 ">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/10">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full "></div>
                    </div>
                    <span className="text-xl font-bold ">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12 ">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <img
                  src="/assets/images/torus-knot.png"
                  alt="Torus knot 3d image"
                  className="size-96 max-w-none"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D image"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="md:grid-cols-3 grid-cols-1 grid gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <img
                  src="/assets/images/cone.png"
                  alt="cone 3d shape"
                  className="size-96 max-w-none rotate-12 "
                />
                <img
                  className="absolute top-3/4 -z-10 right-0"
                  src="/assets/images/hemisphere.png"
                  alt="hemisphere 3D images"
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way.
              </h2>
              <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6 lg:text-2xl">
                <p className="">
                  Blockforge is dedicated to supporting the evolution of web3
                  applications by delivering the necessary infrastructure and
                  security for web3.
                </p>
                <p>
                  Blockchain champions Web3 for everyone. As a decentralized
                  blockchain scaling platform, Blockchain enables developers to
                  create scalable, user-friendly dApps with low transaction
                  costs, all while ensuring robust security.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
