import type { NextPage } from "next";
import Image from "next/image";
import Container from "../components/Container";

const Mission: NextPage = () => {
  return (
    <Container title="My Mission – Melvin Liu">
      <div className=" bg-primaryWhite">
        <div className=" text-primaryBlack max-w-[672px] mx-auto ">
          <h1 className=" font-serif font-medium text-2xl md:text-5xl mb-9">
            My mission
          </h1>

          <p className=" text-xl mb-5">
            When I was in High School, I thought my dream was to be a military
            doctor or hotshot lawyer like &quot;Harvey Specter&quot; from
            &quot;Suits&quot;. But everything changed when my asian mom kinda
            suggesting me to pursue computer science.
          </p>

          <p className=" text-xl mb-5">
            And after more than 2 years, I&#39;ve decided that becoming an
            independent software developer slash tech entrepreneur who create
            tools/products that could give value to lot of people, like Evan
            You, the creator of{" "}
            <a
              className=" p-1 hover:bg-green-300"
              href="https://vuejs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Vue.js
            </a>{" "}
            or Linux Trovalds who create Linux and Git, is my life calling.
          </p>

          <div className="prose">
            <blockquote>
              <p>
                One thing I learned is avoid trading time for money and invest
                time in work that generates long term passive income. -{" "}
                <a
                  href="https://twitter.com/youyuxi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Evan You
                </a>
              </p>
            </blockquote>
          </div>

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
