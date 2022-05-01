import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "@/components/Container";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

import { FaLink } from "react-icons/fa";

export default function Project({
  meta: { title, heading, link, description, banner },
  content,
}: any) {
  return (
    <>
      <Container>
        <div className=" min-h-screen text-primaryBlack dark:text-white flex flex-col md:flex-row ">
          <div className=" w-full">
            <div className="heading mb-4">
              <span className=" text-sm  md:text-lg text-primaryGray dark:text-gray-300">
                {heading}
              </span>
            </div>
            <Image
              src={banner}
              width={1174}
              height={600}
              alt={title}
              quality={100}
            />
            <h1 className=" font-semibold text-2xl md:text-4xl mt-8">
              {title}
            </h1>
            <div className=" my-2 text-base md:text-lg">
              <p className="mb-2">{description}</p>
              <a className=" flex items-center" href={link}>
                <FaLink size={16} className=" text-primaryRed" />
                <span className=" text-primaryRed ml-2 hover:underline">
                  Open Live Site
                </span>
              </a>
            </div>
            <hr className="mt-4" />
            <div className=" prose md:prose-lg prose-a:text-primaryRed dark:prose-invert ">
              <ReactMarkdown className=" w-full">{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data/work"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const files = fs.readFileSync(path.join("data/work", slug + ".md"), "utf-8");

  const { data: meta, content } = matter(files);

  return {
    props: {
      meta,
      content,
    },
  };
}
