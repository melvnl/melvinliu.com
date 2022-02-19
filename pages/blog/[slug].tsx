import Link from "next/link";
import fs from "fs";
import path from "path";
import Container from "@/components/Container";
import SharePost from "@/components/SharePost";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { parseISO, format } from "date-fns";
import { useEffect } from "react";
import Comment from "@/components/Comment";
import { CommentFlag } from "@/constants/env";
import { CountViewFlag } from "@/constants/env";

export default function Post({
  meta: { title, slug, read, date },
  content,
}: any) {
  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    if (CountViewFlag) {
      registerView();
    }
  }, [slug]);

  return (
    <>
      <Container>
        <div className=" text-primaryBlack flex flex-col md:flex-row ">
          <div className="mb-8 w-32 md:w-[270px]">
            <Link href={`/blog`}>
              <a className=" hover:text-primaryRed flex items-center border p-1 rounded md:border-0 ">
                <FaLongArrowAltLeft size={18} />
                <span className=" ml-1">All posts</span>
              </a>
            </Link>
          </div>
          <div className="right">
            <span className=" text-base">
              Published on {format(parseISO(date), "MMMM dd, yyyy")}
            </span>
            <h1 className=" mt-4 mb-4 font-semibold text-4xl md:text-5xl max-w-[840px]">
              {title}
            </h1>
            <SharePost
              read={read}
              title={title}
              href={`https://melvinliu.com/blog/${slug}`}
            />
            <div className="prose">
              <ReactMarkdown className=" w-full max-w-[550px] xl:max-w-[700px]">
                {content}
              </ReactMarkdown>
            </div>
            {CommentFlag && <Comment />}
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
