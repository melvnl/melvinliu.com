import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import useSWR from "swr";

import { SiGithub } from "react-icons/si";
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
          {/* Articles */}
          <div className=" w-full md:w-1/2 mt-8 md:mt-0 md:pr-10">
            <h5 className="text-lg md:text-xl items-center flex font-mono font-bold mb-4 text-primaryBlack dark:text-white">
              <MdArticle size={20} className="mr-2" />
              Latest Article
            </h5>
            <div className=" flex flex-col lg:flex-row gap-4">
              {filteredBlogPosts.map((post) => (
                <div key={post.body.title} className="w-full lg:w-1/2">
                  <BlogCard
                    key={post.body.title}
                    cover={post.body.cover}
                    blurUrl={post.body.blurUrl}
                    title={post.body.title}
                    slug={post.body.slug}
                    date={post.body.date}
                    description={post.body.description}
                    content={post.content}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* github activity */}
          <div className=" w-full md:w-1/2">
            <h5 className="text-lg md:text-xl items-center flex font-mono font-bold mb-4 text-primaryBlack dark:text-white">
              <SiGithub size={20} className="mr-2" />
              Github Activity
            </h5>
            <GitHubCalendar username="melvnl" />
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

      const { data: body, content } = matter(file);

      return { title, body, content };
    })
    .sort(
      (a, b) => Number(new Date(b.body.date)) - Number(new Date(a.body.date))
    );

  return { props: { posts: posts } };
}
