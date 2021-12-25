import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";

const Mission: NextPage = () => {
  return (
    <Container title="My Mission – Melvin Liu">
      <div className=" bg-primaryWhite">
        <div className=" text-primaryBlack max-w-[672px] mx-auto ">
          <h1 className=" font-medium text-2xl md:text-5xl mb-9">My mission</h1>

          <p className=" text-sm md:text-xl mb-5">
            I always thought my dream was to be a military doctor or hotshot
            lawyer like &quot;Harvey Specter&quot; from &quot;Suits&quot;. But everything changed
            since I enroll in Computer Science Major. It was a really great
            decision. Being a developer who can build something out of nothing
            is great fun, especially I can directly give worldwide impact, just
            by sitting in front of my computer.
          </p>

          <p className=" text-sm md:text-xl mb-5">
            My current focus as an engineer is now in Typescript and Go. I&#39;ve
            tried several programming language before (C, C#, C++ , Python,
            Java, PHP, etc), But decided to go with Typescript, and Go as my
            current primary arsenal.
          </p>

          <p className=" text-sm md:text-xl mb-5">
            As for the future, I will invest my time learning{" "}
            <a
              href="https://openai.com/"
              target="_blank"
              className=" underline hover:text-primaryRed" rel="noreferrer"
            >
              OpenAI
            </a>{" "}
            and Web3 Technology. I firmly believe that AI and decentralized
            online ecosystem is the future{" "}
            <span className=" text-primaryGray">
              (also metaverse, but I think not in the near future 😥)
            </span>
            .
          </p>
          <div className=" mt-10 md:mt-20">
            <Image
              src="/static/images/signature.png"
              width="140"
              height="35"
              alt="Melvin's Signature"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
