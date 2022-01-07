import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "../components/Container";
import BlogContainer from "../components/BlogContainer";
import BlogCard from "../components/BlogCard";
import { InferGetStaticPropsType } from "next";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Blog – Melvin Liu"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
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

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const file = fs.readFileSync(path.join("data/blog", filename), "utf-8");

    const { data: body } = matter(file);

    return { slug, body };
  });

  return { props: { posts: posts } };
}
