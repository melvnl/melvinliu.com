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
        <p className="mb-4 text-gray-600 ">
          I&#39;ve started writing online since 2020, mostly about software
          engineering and tech careers (you can read them{" "}
          <span className=" underline hover:text-primaryRed">
            <a href="https://dev.to/melvnl" target="_blank" rel="noreferrer">
              here
            </a>
          </span>{" "}
          ). In this personal site, my writing is focused on things that are not
          highly related to engineering, like about self development, and my
          thoughts, some may or may not related to engineering at all.
        </p>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl ">
          All Posts
        </h3>
        <BlogContainer
          cover={posts[0].body.cover}
          title={posts[0].body.title}
          description={posts[0].body.description}
          slug={posts[0].body.slug}
        />
        <div className="flex flex-wrap flex-col  md:flex-row">
          {posts.map((post, index) =>
            index > 0 ? (
              <BlogCard
                cover={post.body.cover}
                title={post.body.title}
                slug={post.body.slug}
                description={post.body.description}
              />
            ) : null
          )}
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
