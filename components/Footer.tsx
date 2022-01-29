import Image from "next/image";
import { useRouter } from "next/router";
import cn from "classnames";

import { FaExternalLinkAlt } from "react-icons/fa";
import useSWR from "swr";
import Spotify from "./Spotify";

const ExternalLink = ({ prefix, href, children, isProjects }: any) => (
  <>
    <span className={isProjects ? "text-white" : "text-primaryBlack"}>
      {prefix}
    </span>
    <a
      className="text-primaryRed "
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
      <FaExternalLinkAlt className=" ml-1 inline " size={10} />
    </a>
  </>
);

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

export default function Footer() {
  const router = useRouter();
  const isProjects = router.pathname.startsWith("/projects");
  const { data } = useSWR(`/api/nowPlaying`, fetcher);

  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full mt-20 mb-8 ">
      <hr className="w-full border-1 border-gray-600 mb-8" />
      <div className="w-full flex flex-col md:flex-row ">
        <div
          className={cn(
            isProjects ? "text-white" : "text-primaryBlack",
            "flex flex-col mb-4 md:mb-0 md:w-1/2"
          )}
        >
          <h1 className=" mb-2 font-semibold">Contact</h1>
          <div className="">phone: +62-819-0881-6826</div>
          <div className="">email: melvinliu2000@gmail.com</div>
        </div>
        <div
          className={cn(
            isProjects ? "text-white" : "text-primaryBlack",
            "flex flex-col mb-4 md:mb-0 md:w-1/4"
          )}
        >
          <h1 className=" mb-2 font-semibold">Social</h1>
          <div className="">
            <ExternalLink
              prefix="Twitter: "
              href="https://twitter.com/mlven23"
              isProjects={isProjects}
            >
              @mlven23
            </ExternalLink>
          </div>
          <div className="">
            <ExternalLink
              prefix="Instagram: "
              href="https://www.instagram.com/mlven23/"
              isProjects={isProjects}
            >
              @mlven23
            </ExternalLink>
          </div>
          <div className="">
            <ExternalLink
              prefix="Linkedin: "
              href="https://www.linkedin.com/in/melvin-liu/"
              isProjects={isProjects}
            >
              Melvin
            </ExternalLink>
          </div>
        </div>
        <div
          className={cn(
            isProjects ? "text-white" : "text-primaryBlack",
            "flex flex-col mb-4 md:mb-0 md:w-1/4"
          )}
        >
          <h1 className=" mb-2 font-semibold">Work</h1>
          <div className="mb-4 md:mb-0 ">
            <ExternalLink
              prefix="Github: "
              href="https://github.com/melvnl"
              isProjects={isProjects}
            >
              melvnl
            </ExternalLink>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4">
          <Spotify />
        </div>
      </div>
    </footer>
  );
}
