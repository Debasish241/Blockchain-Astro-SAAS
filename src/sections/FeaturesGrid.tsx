import { CutCornerButton } from "../components/CutSornerButton";
import { TextButton } from "../components/TextButton";
const listItems = [
  "Experience unparalleled security and scalibility",
  "Fully benefit from scalable network effects",
  "Unlock the potential off decentralized networks",
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div>
          <h2 className="font-heading font-black text-4xl">
            Empowering the future of blockchain
          </h2>
          <p className="text-xl text-zinc-400 mt-8">
            Blockchain provides robust and secure infrastructure to support the
            nexxt generation of decentralized application
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
        <div>
          <h2>Blockforge leads the way.</h2>
          <p>
            Blockforge is dedicated to supporting the evolution of web3
            applications by delivering the necessary infrastructure and security
            for web3.
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
};
