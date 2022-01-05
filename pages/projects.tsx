import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";

const Projects: NextPage = () => {
  return (
    <Container>
      <div className=" bg-black text-white">
        <div className=" mb-32  ">
          <h1 className=" font-serif font-normal text-2xl md:text-6xl max-w-5xl mb-10 md:mb-20">
            Melvin is a pragmatic <br /> software engineer. Currently creating
            fair economy for Indonesia.
          </h1>

          <div className="flex mb-3 md:mb-5">
            <Image
              quality={100}
              src="/static/images/projects/hero-1.png"
              width="842"
              height="560"
              alt="Hero 1"
            />
            <div className="flex flex-col ml-2 md:ml-5 justify-between">
              <Image
                quality={100}
                className="mb-3 md:mb-5"
                src="/static/images/projects/hero-2.png"
                width="386"
                height="270"
                alt="Hero 1"
              />

              <Image
                quality={100}
                src="/static/images/projects/hero-3.png"
                width="386"
                height="270"
                alt="Hero 1"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-2 md:mr-5 justify-between">
              <Image
                quality={100}
                className="mb-3 md:mb-5"
                src="/static/images/projects/hero-4.png"
                width="386"
                height="270"
                alt="Hero 1"
              />

              <Image
                quality={100}
                src="/static/images/projects/hero-5.png"
                width="386"
                height="270"
                alt="Hero 1"
              />
            </div>
            <Image
              src="/static/images/projects/hero-6.png"
              quality={100}
              width="842"
              height="560"
              alt="Hero 1"
            />
          </div>
        </div>

        <h1 className=" font-semibold text-xl md:text-3xl mb-8">Projects</h1>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="wrapper hover:cursor-pointer mb-5">
            <div className="img-wrapper mb-2 md:mb-8">
              <Image
                quality={100}
                src="/static/images/projects/boymaxwell/1.png"
                width="608"
                height="400"
                alt="Hero 1"
              />
            </div>
            <div className="description text-base md:text-xl max-w-[577px]">
              <h2 className=" font-bold mb-2">Bukalapak</h2>
              <p className=" font-bold text-secondaryGray">
                Bukalapak is Indonesia first unicorn company that goes initial
                public offering in Aug 2021
              </p>
            </div>
          </div>
          <div className="wrapper hover:cursor-not-allowed mb-5">
            <div className="img-wrapper mb-2 md:mb-8">
              <Image
                quality={100}
                src="/static/images/projects/boymaxwell/2.png"
                width="608"
                height="400"
                alt="Hero 1"
              />
            </div>
            <div className="description text-base md:text-xl max-w-[577px]">
              <h2 className=" font-bold mb-2">Boyxmaxwell</h2>
              <p className=" font-bold text-secondaryGray">
                Boyxmaxwell is an international trade company based in Aceh,
                Indonesia. Exports various natural resources like coffee, palm
                oil, coconut, cocoa, etc{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
