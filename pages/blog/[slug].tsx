import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "../../components/Container";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

export default function Post({ meta: { title, date }, content }: any) {
  return (
    <>
      <Container>
        <div className=" text-primaryBlack flex flex-col md:flex-row ">
          <div className=" w-32 md:w-[270px] mb-2 ">
            <Link href={`/blog`}>
              <a className="flex items-center border p-1 rounded md:border-0 ">
                <Image
                  src="/static/images/arrow.png"
                  width={20}
                  height={20}
                  alt="arrow"
                />
                <span className=" ml-1">All posts</span>
              </a>
            </Link>
          </div>
          <div className="right">
            <h1 className=" font-serif font-semibold text-2xl md:text-4xl max-w-[720px]">
              {title}
            </h1>
            <span>Published on {date}</span>
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
  const files = fs.readdirSync(path.join("data/blog"));

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
  const files = fs.readFileSync(path.join("data/blog", slug + ".md"), "utf-8");

  const { data: meta, content } = matter(files);

  return {
    props: {
      meta,
      content,
    },
  };
}
