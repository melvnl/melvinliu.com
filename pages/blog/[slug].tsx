import Link from "next/link";
import fs from "fs";
import path from "path";
import { useState } from "react";
import Container from "@/components/Container";
import SharePost from "@/components/SharePost";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { FaLongArrowAltLeft, FaCheck } from "react-icons/fa";
import { BiSolidCopy } from "react-icons/bi";
import { parseISO, format } from "date-fns";
import Comment from "@/components/Comment";
import { CommentFlag } from "@/constants/env";
import Head from "next/head";
import readingTime from "reading-time";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import classNames from "classnames";
import { Tooltip } from "react-tooltip";

const flattenMarkdownChildren = (children: any) => {
  return children
    .map((child: any) => {
      if (typeof child === "object" && child.props && child.props.children) {
        if (Array.isArray(child.props.children)) {
          return flattenMarkdownChildren(child.props.children);
        }
        return child.props.children;
      }
      return child;
    })
    .join("");
};

const CodeBlock = ({ children }: any) => {
  const markdownContent = children
    .map((child: any) => {
      if (typeof child === "object" && child.props && child.props.children) {
        if (Array.isArray(child.props.children)) {
          return flattenMarkdownChildren(child.props.children);
        }
        return child.props.children[0];
      }
      return child;
    })
    .join("");

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre>
        <code>{children}</code>
      </pre>
      <Tooltip
        anchorSelect="#copyCode"
        place="left"
        content={copied ? "Copied" : ""}
      />
      <button
        id="copyCode"
        onClick={handleCopy}
        className={classNames(
          copied
            ? "border-[#03873A]"
            : "border-[#363B42] hover:border-[#8B949F]",
          "absolute top-3 right-3 border bg-[#21262D] rounded-md p-1 w-7 h-7 "
        )}
      >
        {copied ? (
          <FaCheck size={14} color="#03873A" className=" ml-auto mr-auto" />
        ) : (
          <BiSolidCopy size={18} color="#7D8590" />
        )}
      </button>
    </div>
  );
};

export default function Post({
  meta: { title, cover, description, slug, date },
  content,
}: any) {
  return (
    <>
      <Container>
        <Head>
          <title>{`Blog - ${title}`}</title>
          <meta name="robots" content="follow, index" />
          <meta content={description} name="description" />
          <meta
            property="og:url"
            content={`https://melvinliu.com/blog/${slug}`}
          />
          <link rel="canonical" href={`https://melvinliu.com/blog/${slug}`} />
          <link rel="icon" href="/static/images/favicon.svg" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Melvin Liu" />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={cover} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mlven23" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={cover} />
          <meta property="article:published_time" content={date} />
        </Head>
        <div className=" text-primaryBlack dark:text-white flex flex-col md:flex-row ">
          <div className="mb-8 w-32 md:w-[270px]">
            <Link href={`/blog`}>
              <a className=" hover:text-primaryRed flex items-center border p-1 rounded md:border-0 ">
                <FaLongArrowAltLeft size={18} />
                <span className=" ml-1">All posts</span>
              </a>
            </Link>
          </div>
          <div className="right w-full">
            <span className=" text-base">
              Published on {format(parseISO(date), "MMMM dd, yyyy")}
            </span>
            <h1 className=" mt-4 mb-4 font-semibold text-4xl md:text-5xl max-w-[840px]">
              {title}
            </h1>
            <SharePost
              readTime={readingTime(content).text}
              title={title}
              href={`https://melvinliu.com/blog/${slug}`}
            />
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // @ts-ignore
              rehypePlugins={[rehypeHighlight]}
              className="prose dark:prose-invert prose-pre:bg-transparent prose-pre:p-0 w-full max-w-[550px] xl:max-w-[700px]"
              components={{
                pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
              }}
            >
              {content}
            </ReactMarkdown>
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
