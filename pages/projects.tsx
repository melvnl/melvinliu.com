import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Projects – Melvin Liu"
      description="Curated list of my engineering and product design project"
    >
      <div className=" bg-black text-white">
        <div className=" mb-32  ">
          <h1 className=" font-serif font-normal text-2xl md:text-6xl max-w-5xl mb-10 md:mb-20">
            I solve incredibly challenging software and design problems, here
            are just a few examples.
          </h1>

          <div className="flex mb-3 md:mb-5">
            <Image
              quality={100}
              src="/static/images/projects/hero-1.png"
              width="842"
              height="560"
              alt="Hero 1"
            />
            <div className="flex flex-col ml-2 md:ml-5 justify-between">
              <Image
                quality={100}
                className="mb-3 md:mb-5"
                src="/static/images/projects/hero-2.png"
                width="386"
                height="270"
                alt="Hero 1"
              />

              <Image
                quality={100}
                src="/static/images/projects/hero-3.png"
                width="386"
                height="270"
                alt="Hero 1"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-2 md:mr-5 justify-between">
              <Image
                quality={100}
                className="mb-3 md:mb-5"
                src="/static/images/projects/hero-4.png"
                width="386"
                height="270"
                alt="Hero 1"
              />

              <Image
                quality={100}
                src="/static/images/projects/hero-5.png"
                width="386"
                height="270"
                alt="Hero 1"
              />
            </div>
            <Image
              src="/static/images/projects/hero-6.png"
              quality={100}
              width="842"
              height="560"
              alt="Hero 1"
            />
          </div>
        </div>

        <h1 className=" font-semibold text-xl md:text-3xl mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.body.title}
              cover={project.body.cover}
              banner={project.body.banner}
              title={project.body.title}
              link={project.body.title}
              slug={project.body.slug}
              type={project.body.type}
              date={project.body.date}
              description={project.body.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("data/project"));

  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const file = fs.readFileSync(path.join("data/project", filename), "utf-8");

    const { data: body } = matter(file);

    return { slug, body };
  });

  return { props: { projects: projects } };
}
