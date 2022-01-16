import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "../components/Container";
import BlogCard from "../components/BlogCard";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Blog – Melvin Liu"
      description="Thoughts on the software industry, programming, and career in tech"
    >
      <div className="flex flex-col items-start justify-center mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl ">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 text-lg font-semibold ">
          Thoughts, career hacks, software-engineering, and front-end
          development.
        </p>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl ">
          All Posts
        </h3>
        <div className="relative w-full md:max-w-[1090px] mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-primaryGray rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((post) => (
            <BlogCard
              key={post.body.title}
              cover={post.body.cover}
              title={post.body.title}
              slug={post.body.slug}
              date={post.body.date}
              read={post.body.read}
              description={post.body.description}
            />
          ))}
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
