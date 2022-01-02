import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";

const Projects: NextPage = () => {
  return (
    <Container>
      <div className=" text-left bg-primaryWhite">
        <div className="mx-auto mb-16">
          <Image
            src="/static/images/doodle.png"
            width={1100}
            height={700}
            alt="Under Development"
          />
          <span className="block text-left text-gray-400 mb-10">
            Illustration by{" "}
            <a className="underline" href="https://tomlittler.medium.com/how-im-learning-to-draw-illustrations-in-the-notion-style-c72b6919b773">
              Tom Littler
            </a>{" "}
          </span>

          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-primaryBlack ">
            This page is under development.
          </h1>
          <p className="text-xl text-primaryGray">
            I decided to took more time brainstorming, and designing this
            projects page, since I want to show my best works in the most
            pleasing way for user.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
