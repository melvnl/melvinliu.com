import Link from "next/link"
import fs from 'fs';
import path from "path"
import ReactMarkdown from 'react-markdown'
import matter from "gray-matter";


export default function Post({
  meta: { title, cover, description, date },
  content,
}: any) {

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('data/blog'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } } : any) {
  const files = fs.readFileSync(
    path.join('data/blog', slug + '.md'),
    'utf-8'
  )

  const { data: meta, content } = matter(files)

  return {
    props: {
      meta,
      content,
    },
  }
}