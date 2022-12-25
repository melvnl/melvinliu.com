import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import dynamic from "next/dynamic";

import Container from "@/components/Container";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});
const featuredWorks = [
  {
    img: "/static/images/projects/featured/buka.png",
    title: "Bukalapak",
    description:
      "Helping public relations team having a tailored professional profile for BUKA Stock Initial Public Offering (IPO).",
    href: "/featured/bukalapak",
  },
  {
    img: "/static/images/projects/featured/comute.png",
    title: "Comute",
    description:
      "Realizing the accessibility of traveling by train for deaf friends using Dijkstra's algorithm.",
    href: "/featured/comute",
  },
  {
    img: "/static/images/projects/featured/makmur.png",
    title: "Makmur",
    description:
      "helping Indonesian people to make financial planning and long-term investments easily, and safely.",
    href: "/featured/makmur",
  },
];

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <div className=" text-primaryBlack dark:text-white mt-20 mb-10 md:mb-20 ">
          <h1 className=" font-mono font-bold text-3xl md:text-6xl mb-5 md:mb-10">
            Hi, I&#39;m Melvin.
            <br />
            Software Engineer <br />
            based in <span className=" text-primaryRed">Indonesia🇮🇩</span>
          </h1>
          <p className="text-base md:text-xl max-w-[750px] text-primaryGray dark:text-white">
            with 3 years of solid experience in web things. Currently, I&#39;m
            focused on building accessible financial planning and long-term
            investment platform at{" "}
            <a
              className=" text-primaryRed hover:cursor-pointer hover:underline"
              href="https://www.makmur.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Makmur.
            </a>{" "}
            Feel free to explore my work.
          </p>
        </div>
        <div className=" text-primaryBlack dark:text-white my-8">
          <p className=" font-bold text-xl md:text-3xl mb-10">Featured Works</p>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredWorks.map((work) => (
              <div
                key={`${work.title}-project`}
                className="wrapper mb-5 rounded-2xl transform transition duration-500 md:hover:scale-110 md:hover:shadow-3xl md:p-5 cursor-pointer"
              >
                <div className="img-wrapper mb-2 md:mb-8">
                  <Image
                    quality={100}
                    src={work.img}
                    width="608"
                    height="620"
                    alt={work.title}
                  />
                </div>
                <div className="description text-primaryBlack text-left dark:text-white text-base max-w-[577px] mb-6">
                  <h1 className=" text-2xl font-semibold text-primaryBlack dark:text-gray-300">
                    {work.title}
                  </h1>
                  <p className=" text-lg mt-2 font-normal">
                    {work.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="">
                    <NextLink href={work.href}>
                      <a className="">
                        <p className=" text-lg font-semibold">See Details</p>
                      </a>
                    </NextLink>
                  </div>
                  <NextLink href={work.href}>
                    <a className="">
                      <BsArrowUpRight className="" size={24} />
                    </a>
                  </NextLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatWidget />
    </Container>
  );
};

export default Home;
