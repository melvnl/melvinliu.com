import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite">
        <div className=" text-primaryBlack ">
          <h1 className="font-semibold text-2xl md:text-5xl mb-9">Melvin Liu, Software Engineer by Nature.</h1>
          <div className="max-w-[672px]">
          <p className=" text-sm md:text-xl mb-2">
            Halo, I’m currently a Software Engineer in an unicorn tech company
            in Indonesia called <a className=" underline font-bold hover:text-primaryRed" href="https://about.bukalapak.com/en/" target="_blank" rel="noreferrer">BUKALAPAK</a>, the first startup that listed in
            Indonesia’s stock market, to bring a fair economy for all through
            online commerce.{" "}
          </p>
          <p className=" text-sm md:text-xl mb-2">
            Previously, I joined <a className=" underline font-bold hover:text-primaryRed" href="https://tanifund.com/" target="_blank" rel="noreferrer" >Tanifund</a> as an Engineer, with the focus on
            connecting farmers with market while ensuring their access to
            financial (through P2P lending system) and technical supports along
            with Tanihub.{" "}
          </p>
          <p className=" text-sm md:text-xl mb-2">
            Along with that, since 2020, I’ve enabled more than 20+ Micro,Small,
            and Medium Entreprises gain digital advantage through reliable, and
            well designed website / app.
          </p>
          </div>
        </div>
        <div className="flex flex-row mt-12">
          <Image src="/static/images/home/img-1.png" alt="Melvin Liu, Image 1" width={610} height={480} />
          <div className="right-side ml-2 md:ml-7 grid gap-5">
          <Image src="/static/images/home/img-2.png" alt="Melvin Liu, Image 2" width={426} height={230} />
          <Image src="/static/images/home/img-3.png" alt="Melvin Liu, Image 3" width={426} height={230}/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
