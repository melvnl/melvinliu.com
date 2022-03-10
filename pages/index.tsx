import type { NextPage } from "next";
// import Image from "next/image";
import Container from "@/components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <div className=" text-primaryBlack dark:text-white ">
          <h1 className=" font-sans font-bold text-3xl md:text-5xl mb-10 md:mb-20">
            Move Fast, Break Things
          </h1>
          <div className=" font-normal grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className=" text-left">
              <p className=" mb-3">
                Hi, I&#39;m Melvin Liu, a Software Engineer who resides in
                Indonesia.
              </p>
              <p className=" mb-3">
                I currently run my own design and development studio and have
                worked with diverse projects, you can check my work{" "}
                <a
                  className=" fancy-anchor dark:text-gray-300 dark:underline"
                  href="https://melvinliu.com/project"
                >
                  here
                </a>
                .
              </p>
              <p className=" mb-3">
                In the past, I was lucky enough to start my software engineering
                career in a few notable companies in Indonesia, the most notable
                one is{" "}
                <a
                  className=" fancy-anchor dark:text-gray-300 dark:underline"
                  href="https://about.bukalapak.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Bukalapak
                </a>{" "}
                - Indonesia first unicorn startup goes IPO (Initial Public
                Offering), once started as a marketplace platform and grew into
                an All-Commerce platform, empowering both users and communities
                as one company: Buka.
              </p>

              <p></p>
            </div>
            <div className=" border-l-0 md:border-l pl-0 md:pl-4 border-gray-200 text-left">
              <p className=" mb-3">
                My main expertise is web development, especially in front-end
                engineering with either Vue.js/ React.js, but currently, I
                started to learn database (PostgreSQL). and a backend language
                as well (Golang)
              </p>
              <p className="mb-3">
                Feel free to look at my side project that I make public on{" "}
                <a
                  className=" fancy-anchor dark:text-gray-300 dark:underline"
                  href="https://github.com/melvnl"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
              </p>
            </div>
            <div className=" border-l-0 md:border-l pl-0 md:pl-4  border-gray-200 text-left">
              <p className=" mb-3">
                If you have read this far, let&#39;s be friends! Connect with me
                on{" "}
                <span>
                  <a
                    className=" fancy-anchor dark:text-gray-300 dark:underline"
                    href="https://www.instagram.com/mlven23/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Instagram
                  </a>
                  ,{" "}
                  <a
                    className=" fancy-anchor dark:text-gray-300 dark:underline"
                    href="https://www.linkedin.com/in/melvin-liu/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Linkedin
                  </a>
                  , or{" "}
                  <a
                    className=" fancy-anchor dark:text-gray-300 dark:underline"
                    href="https://twitter.com/mlven23"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Twitter
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
