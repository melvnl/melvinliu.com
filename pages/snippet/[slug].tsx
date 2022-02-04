import Link from "next/link";
import fs from "fs";
import path from "path";
import Container from "@/components/Container";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Snippet({ meta: { title, slug }, content }: any) {
  return (
    <>
      <Container>
        <div className=" text-primaryBlack flex flex-col md:flex-row ">
          <div className="mb-8 w-32 md:w-[270px]">
            <Link href={`/snippet`}>
              <a className=" hover:text-primaryRed flex items-center border p-1 rounded md:border-0 ">
                <FaLongArrowAltLeft size={18} />
                <span className=" ml-1">All posts</span>
              </a>
            </Link>
          </div>
          <div className="right">
            <div className="prose">
              <ReactMarkdown className=" w-full max-w-[550px] xl:max-w-[700px]">
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data/snippet"));

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
  const files = fs.readFileSync(
    path.join("data/snippet", slug + ".md"),
    "utf-8"
  );

  const { data: meta, content } = matter(files);

  return {
    props: {
      meta,
      content,
    },
  };
}
