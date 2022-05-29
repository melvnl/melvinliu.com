import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import ScrollToButton from "@/components/ScrollToButton";
import { FaArrowDown } from "react-icons/fa";

export default function Works({
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Work – Melvin Liu"
      description="Curated list of my engineering and product design work"
    >
      <div className=" text-primaryBlack dark:text-white">
        <div className=" mb-16 md:mb-32 ">
          <h1 className=" font-semibold text-2xl md:text-6xl max-w-5xl mb-10 md:mb-20">
            I solve incredibly challenging software and design problems, here
            are just a few examples.
          </h1>
          <ScrollToButton toId="work" duration={500} className=" bg-black">
            <FaArrowDown
              className="animate-bounce  hover:text-primaryRed cursor-pointer"
              size={32}
            />
          </ScrollToButton>
        </div>

        <h1 className=" font-semibold text-xl md:text-3xl mb-8">Works</h1>
        <div id="work" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {works
            .sort((a, b) => a.body.id - b.body.id)
            .map((work) => (
              <ProjectCard
                key={work.body.title}
                cover={work.body.cover}
                banner={work.body.banner}
                title={work.body.title}
                link={work.body.title}
                slug={work.body.slug}
                type={work.body.type}
                date={work.body.date}
                description={work.body.description}
              />
            ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data/work"));

  const works = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const file = fs.readFileSync(path.join("data/work", filename), "utf-8");

    const { data: body } = matter(file);

    return { slug, body };
  });

  return { props: { works: works } };
}
