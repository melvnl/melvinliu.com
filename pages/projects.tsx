import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";
const Projects: NextPage = () => {
  return (
    <Container>
      <div className=" bg-black text-white">
        <div className=" mb-32  ">
          <h1 className=" font-serif font-semibold text-2xl md:text-5xl max-w-5xl mb-9">
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
        <div id="boymaxwell" className="w-full">
          <div className=" font-serif text-left mb-9 text-xl md:text-4xl">
            <h4 className=" mb-2 font-bold text-white">Boymawell</h4>
            <h4 className=" mb-2 font-bold text-secondaryGray">
              UI/UX and Web Development
            </h4>
            <h4 className=" mb-2 font-bold text-secondaryGray">
              2021 - Present
            </h4>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="wrapper">
              <div className="img-wrapper mb-2 md:mb-8">
                <Image
                  quality={100}
                  src="/static/images/projects/boymaxwell/1.png"
                  width="608"
                  height="300"
                  alt="Hero 1"
                />
              </div>
              <div className="description text-xl">
                <h2 className=" font-bold mb-2">
                  Boymaxwell branding and design
                </h2>
                <p className=" font-bold text-secondaryGray">
                  How we want people perceive Indonesia’s natural resources
                </p>
              </div>
            </div>
            <div className="wrapper">
              <div className="img-wrapper mb-2 md:mb-8">
                <Image
                  quality={100}
                  src="/static/images/projects/boymaxwell/1.png"
                  width="608"
                  height="300"
                  alt="Hero 1"
                />
              </div>
              <div className="description text-xl">
                <h2 className=" font-bold mb-2">
                  Develop the website with performance in mind
                </h2>
                <p className=" font-bold text-secondaryGray">
                  How I engineer Boymaxwell site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
