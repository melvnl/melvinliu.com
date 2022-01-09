import type { NextPage } from "next";
// import Image from "next/image";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite">
        <div className=" text-primaryBlack ">
          <h1 className=" font-sans font-bold text-3xl md:text-5xl mb-10 md:mb-20">
            Move Fast, Break Things
          </h1>
          <div className=" text-primaryBlack font-normal grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className=" text-left">
              <p className=" mb-3">
                Hi, I&#39;m Melvin Liu, a Software Engineer who currently reside
                in Indonesia. I&#39;ve been designing and building web
                application since 2019, it all started from a simple landing
                page for a local raw food shipment company, to a large scale
                e-commerce that serve million of users.
              </p>
              <p className=" mb-3">
                In the past, I was lucky enough to start my software engineering
                career in few notable company in Indonesia, the most notable one
                is{" "}
                <a
                  className=" underline text-primaryRed"
                  href="https://tanifund.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Bukalapak
                </a>{" "}
                - Indonesia first unicorn startup goes IPO (Initial Public
                Offering), once started out as marketplace platform and grew
                into an All-Commerce platform, empowering both users and
                communities as one company: Buka.
              </p>

              <p></p>
            </div>
            <div className=" border-l-0 md:border-l pl-0 md:pl-4 border-gray-600 text-left">
              <p className=" mb-3">
                My main expertise is web development, especially in front-end
                engineering with Vue.js/ Nuxt.js, Vuex, Tailwind, SASS/SCSS. I
                don&#39;t limit myself to certain technology, hence I can do
                React.js/Next.js and backend engineering as well either Node.js
                or Go
              </p>
              <p className="mb-3">
                Feel free to look at my side project that I make public on{" "}
                <a
                  className=" underline text-primaryRed"
                  href="https://github.com/melvnl"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
              </p>
            </div>
            <div className=" border-l-0 md:border-l pl-0 md:pl-4  border-gray-600 text-left">
              <p className=" mb-3">
                If you have read this far, let&#39;s be friends! Connect with me
                on{" "}
                <span>
                  <a
                    className=" underline text-primaryRed"
                    href="https://github.com/melvnl"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Instagram
                  </a>
                  ,{" "}
                  <a
                    className=" underline text-primaryRed"
                    href="https://www.linkedin.com/in/melvin-liu/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Linkedin
                  </a>
                  , or{" "}
                  <a
                    className=" underline text-primaryRed"
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
