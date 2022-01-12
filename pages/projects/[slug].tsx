import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "../../components/Container";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

export default function Project({ meta: { title }, content }: any) {
  return (
    <>
      <Container>
        <div className=" text-primaryBlack flex flex-col md:flex-row ">
          <div className=" w-32 mb-2 ">
            <Link href={`/projects`}>
              <a className="flex items-center border p-1 rounded md:border-0 ">
                <Image
                  src="/static/images/arrow-white.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
                <span className=" text-white ml-1">Back</span>
              </a>
            </Link>
          </div>
          <div className="right">
            <h1 className=" text-white font-semibold text-2xl md:text-4xl max-w-[720px]">
              {title}
            </h1>
            <div className=" prose prose-lg prose-invert prose-a:text-primaryRed ">
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
  const files = fs.readdirSync(path.join("data/project"));

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
    path.join("data/project", slug + ".md"),
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
