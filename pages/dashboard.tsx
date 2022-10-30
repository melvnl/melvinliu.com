import type { NextPage } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import useSWR from "swr";
import { SiSpotify } from "react-icons/si";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

const Dashboard: NextPage = () => {
  const { data } = useSWR("/api/topTracks", fetcher);

  return (
    <Container
      title="Dashboard – Melvin Liu"
      description="My personal dashboard to track various metrics across platforms like Spotify, Github, Youtube, and more."
    >
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <h5 className="text-lg md:text-xl items-center flex font-mono font-bold mb-4 text-primaryBlack dark:text-white">
          <SiSpotify size={20} color={"#1ED760"} className="mr-2" />
          Spotify Top Tracks
        </h5>
        <p className="mb-8 text-gray-800 font-normal dark:text-white">
          Here&apos;s my daily jam updated daily via Spotify API.
        </p>
        {!data && (
          <div className=" flex flex-row">
            <Skeleton width={100} height={100} borderRadius={0} />
            <div className=" ml-4">
              <Skeleton width={150} height={24} borderRadius={0} />
              <Skeleton width={200} height={24} borderRadius={0} />
            </div>
          </div>
        )}
        {data &&
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
          )}
      </div>
    </Container>
  );
};

export default Dashboard;
