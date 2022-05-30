import type { NextPage } from "next";
import Image from "next/image";
import Container from "@/components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <div className=" text-primaryBlack dark:text-white mb-10 md:mb-20 ">
          <h1 className=" font-sans font-bold text-3xl md:text-6xl mb-5 md: mb-10">
            Hi, <br />
            I&#39;m Melvin.
            <br />
            Software Engineer <br />
            based in <span className=" text-primaryRed">Indonesia.</span>
          </h1>
          <p className=" font-sans text-base md:text-xl max-w-[750px] text-primaryGray dark:text-white">
            with 2 years of solid experience in web things. Currently, I&#39;m
            focused on building accessible financial planning and long-term
            investment platform at{" "}
            <a
              className=" text-primaryRed hover:cursor-pointer hover:underline"
              href="https://www.makmur.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Makmur.
            </a>
          </p>
        </div>
        <div className=" text-primaryBlack dark:text-white flex flex-col md:flex-row my-8">
          <p className=" font-bold text-xl md:text-3xl mr-12">
            Trusted by Indonesia&#39;s <br />
            leading companies
          </p>
          <div className="flex flex-col md:flex-row">
            <div className=" max-w-[100px] md:max-w-full md:mx-4 my-2 md:my-auto">
              <Image
                src="/static/images/tanihub-1.svg"
                width={173}
                height={29}
                alt="TaniHub group"
              />
            </div>
            <div className=" max-w-[100px] md:max-w-full md:mx-4 my-2 md:my-auto">
              <Image
                src="/static/images/bukalapak-1.svg"
                width={148}
                height={29}
                alt="Bukalapak"
              />
            </div>
            <div className=" max-w-[100px] md:max-w-full md:mx-4 my-2 md:my-auto">
              <Image
                src="/static/images/ternak-uang.svg"
                width={148}
                height={29}
                alt="Ternak Uang"
              />
            </div>
            <div className=" max-w-[100px] md:max-w-full md:mx-4 my-2 md:my-auto">
              <Image
                src="/static/images/makmur.svg"
                width={137}
                height={24}
                alt="Makmur"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
