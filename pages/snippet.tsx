import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "@/components/Container";
import SnippetCard from "@/components/SnippetCard";
import { InferGetStaticPropsType } from "next";

export default function Snippet({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Code Snippets – Melvin Liu"
      description="Thoughts on the software industry, programming, and career in tech"
    >
      <div className="flex flex-col items-start justify-center mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl ">
          Code Snippets
        </h1>
        <span className=" text-base text-primaryGray max-w-2xl">
          {`This is my own personal code library, where I store code snippet regarding various tech stack and tools, e.g: React, Next, Strapi, API , etc. You can use it freely!`}
        </span>
        <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <SnippetCard
              key={post.body.title}
              title={post.body.title}
              slug={post.body.slug}
              description={post.body.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data/snippet"));

  const posts = files.map((filename) => {
    const title = filename.replace(".md", "").replace(/-/g, " ");

    const file = fs.readFileSync(path.join("data/snippet", filename), "utf-8");

    const { data: body } = matter(file);

    return { title, body };
  });

  return { props: { posts: posts } };
}
