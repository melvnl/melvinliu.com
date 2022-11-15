import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import useSWR from "swr";

import { SiGithub } from "react-icons/si";
import { SiSpotify } from "react-icons/si";
import { MdArticle } from "react-icons/md";

import GitHubCalendar from "react-github-calendar";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

export default function Dashboard({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useSWR("/api/topTracks", fetcher);

  const filteredBlogPosts = posts
    .filter((post) => post.title.toLowerCase())
    .slice(0, 2);

  return (
    <Container
      title="Dashboard – Melvin Liu"
      description="My personal dashboard to track various metrics across platforms like Spotify, Github, Youtube, and more."
    >
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <div className=" flex flex-col md:flex-row justify-between">
          {/* github activity */}
          <div className=" w-full md:w-1/2">
            <h5 className="text-lg md:text-xl items-center flex font-mono font-bold mb-4 text-primaryBlack dark:text-white">
              <SiGithub size={20} className="mr-2" />
              Github Activity
            </h5>
            <GitHubCalendar username="melvnl" />

            {/* latest blog */}
            <div className=" blog mt-10">
              <h5 className="text-lg md:text-xl items-center flex font-mono font-bold mb-4 text-primaryBlack dark:text-white">
                <MdArticle size={20} className="mr-2" />
                Latest Article
              </h5>
              <div className=" flex flex-col md:flex-row gap-4">
                {filteredBlogPosts.map((post) => (
                  <div key={post.body.title} className="w-full md:w-1/2">
                    <BlogCard
                      key={post.body.title}
                      cover={post.body.cover}
                      title={post.body.title}
                      slug={post.body.slug}
                      date={post.body.date}
                      read={post.body.read}
                      description={post.body.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* spotify top track */}
          <div className=" w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
            <h5 className="text-lg md:text-xl items-center flex font-mono font-bold mb-4 text-primaryBlack dark:text-white">
              <SiSpotify size={20} color={"#1ED760"} className="mr-2" />
              Spotify Top Tracks
            </h5>
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
                    <div className="p-2 mb-4 flex">
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
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data/blog"));

  const posts = files
    .map((filename) => {
      const title = filename.replace(".md", "").replace(/-/g, " ");

      const file = fs.readFileSync(path.join("data/blog", filename), "utf-8");

      const { data: body } = matter(file);

      return { title, body };
    })
    .sort(
      (a, b) => Number(new Date(b.body.date)) - Number(new Date(a.body.date))
    );

  return { props: { posts: posts } };
}
