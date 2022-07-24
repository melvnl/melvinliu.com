import type { NextPage } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import LoadingSpinner from "@/components/LoadingSpinner";

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

const Dashboard: NextPage = () => {
  const { data } = useSWR("/api/topTracks", fetcher);

  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <h5 className="text-lg md:text-xl items-center flex font-mono font-bold mb-4 text-primaryBlack dark:text-white">
          <SiSpotify size={20} color={"#1ED760"} className="mr-2" />
          Spotify Top Tracks
        </h5>
        <p className="mb-8 text-gray-800 font-normal dark:text-white">
          Here&apos;s my daily jam updated daily via Spotify API.
        </p>
        {}
        {!data ? (
          <LoadingSpinner />
        ) : (
          data.map(
            (
              item: {
                title: string;
                songUrl: string;
                album: string;
                artist: string;
              },
              index: number
            ) => (
              <a
                key={item.title}
                href={item.songUrl}
                target="_blank"
                className=" cursor-pointer"
                rel="noreferrer"
              >
                <div className="p-2 mb-4 flex border-b-[1px] border-gray-200">
                  <span className=" font-mono text-md font-bold text-primaryGray w-8">
                    {index + 1}
                  </span>
                  <Image
                    src={item.album}
                    width={96}
                    height={96}
                    alt={item.title}
                  />
                  <div className=" ml-3">
                    <h1 className=" text-base md:text-lg font-mono font-bold text-primaryBlack dark:text-white">
                      {item.artist}
                    </h1>
                    <p className=" text-sm md:text-base font-normal text-gray-800 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </a>
            )
          )
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
