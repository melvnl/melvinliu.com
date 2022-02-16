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
      <div className=" text-primaryBlack">
        <div className=" mb-16 md:mb-32 ">
          <h1 className=" font-semibold text-2xl md:text-6xl max-w-5xl mb-10 md:mb-20">
            I solve incredibly challenging software and design problems, here
            are just a few examples.
          </h1>
        </div>

        <h1 className=" font-semibold text-primaryBlack text-xl md:text-3xl mb-8">
          Projects
        </h1>
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
