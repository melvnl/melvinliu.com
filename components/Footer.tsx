import { FaExternalLinkAlt } from "react-icons/fa";
import { SpotifyFlag } from "@/constants/env";
import { format } from "date-fns";
import Spotify from "./Spotify";

const ExternalLink = ({ prefix, href, children }: any) => (
  <>
    <span className="text-primaryBlack dark:text-white">{prefix}</span>
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

const BusyMessage = () => (
  <div className=" flex items-center">
    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
    <p className=" ml-1">Busy - Work</p>
  </div>
);

const AvailableMessage = () => (
  <div className=" flex items-center">
    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    <p className=" ml-1">Available</p>
  </div>
);

export default function Footer() {
  const currTime = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    })
  );
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full mt-20 mb-8 ">
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <div className="w-full flex flex-col md:flex-row ">
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4 text-primaryBlack dark:text-white">
          <h1 className=" mb-2 font-semibold">My Local Time</h1>
          <div className=" mb-2">{format(currTime, "p")}</div>
          {currTime.getHours() >= 13 && currTime.getHours() <= 21 && (
            <BusyMessage />
          )}
          {(currTime.getHours() < 13 || currTime.getHours() > 21) && (
            <AvailableMessage />
          )}
        </div>
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4 text-primaryBlack dark:text-white">
          <h1 className=" mb-2 font-semibold">Social</h1>
          <div className="">
            <ExternalLink prefix="Twitter: " href="https://twitter.com/mlven23">
              @mlven23
            </ExternalLink>
          </div>
          <div className="">
            <ExternalLink
              prefix="Linkedin: "
              href="https://www.linkedin.com/in/melvin-liu/"
            >
              Melvin
            </ExternalLink>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4 text-primaryBlack dark:text-white">
          <h1 className=" mb-2 font-semibold">Work</h1>
          <div className="mb-4 md:mb-0 ">
            <ExternalLink prefix="Github: " href="https://github.com/melvnl">
              melvnl
            </ExternalLink>
          </div>
        </div>
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4 text-primaryBlack dark:text-white">
          {SpotifyFlag && <Spotify />}
        </div>
      </div>
    </footer>
  );
}
