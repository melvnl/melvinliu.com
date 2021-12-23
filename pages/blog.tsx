import fs from "fs";
import path from "path"
import matter from "gray-matter";
import Container from "../components/Container";
import BlogContainer from "../components/BlogContainer";
import { InferGetStaticPropsType } from "next";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {

    console.log(posts)
  return (
    <Container
      title="Blog – Melvin Liu"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
        </p>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          All Posts
        </h3>
        {posts.map((post) => (
          <BlogContainer key={post.body.title} {...post.body} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {

    const files = fs.readdirSync(path.join('data/blog'));

    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')

        const file = fs.readFileSync(path.join('data/blog', filename), 'utf-8')

        const {data:body} = matter(file)

        return {slug, body}
    })




  return { props: { posts: posts } };
}
