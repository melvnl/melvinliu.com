import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite">
        <div className=" text-primaryBlack ">
          <h1 className="font-semibold text-2xl md:text-5xl mb-9">
            Melvin Liu, Software Engineer by Nature.
          </h1>
          <div className="max-w-[672px]">
            <p className=" font-semibold text-base md:text-xl mb-4">
              Halo, I’m currently a Software Engineer in an unicorn tech company
              in Indonesia called{" "}
              <a
                className=" underline font-bold hover:text-primaryRed"
                href="https://about.bukalapak.com/en/"
                target="_blank"
                rel="noreferrer"
              >
                BUKALAPAK
              </a>
              , the first startup that listed in Indonesia’s stock market, to
              bring a fair economy for all through online commerce.{" "}
            </p>
            <p className=" font-semibold text-base md:text-xl mb-4">
              Previously, I joined{" "}
              <a
                className=" underline font-bold hover:text-primaryRed"
                href="https://tanifund.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tanifund
              </a>{" "}
              as an Engineer, with the focus on connecting farmers with market
              while ensuring their access to financial (through P2P lending
              system) and technical supports along with Tanihub.{" "}
            </p>
            <p className=" font-semibold text-base md:text-xl mb-4">
              Along with that, since 2020, I’ve enabled more than 20+
              Micro,Small, and Medium Entreprises gain digital advantage through
              reliable, and well designed website / app.
            </p>
          </div>
        </div>
        <div className=" flex mt-12 overflow-x-scroll">
          <div className=" flex-shrink-0">
            <Image
              src="/static/images/home/img-1.png"
              className=" flex-shrink-0"
              alt="Melvin Liu, Image 1"
              width={480}
              height={480}
              quality={100}
            />
          </div>
          <div className=" flex-shrink-0 ml-5">
            <Image
              src="/static/images/home/img-2.png"
              className=" flex-shrink-0 ml-5"
              alt="Melvin Liu, Image 2"
              width={853}
              height={480}
              quality={100}
            />
          </div>
          <div className=" flex-shrink-0 ml-5">
            <Image
              src="/static/images/home/img-3.png"
              className=" flex-shrink-0 ml-5"
              alt="Melvin Liu, Image 3"
              width={480}
              height={480}
              quality={100}
            />
          </div>
          
        </div>
      </div>
    </Container>
  );
};

export default Home;
