import Link from "next/link";
import Image from "next/image";
import { Project } from "../lib/types";

export default function ProjectCard({
  title,
  slug,
  description,
  cover,
}: Project) {
  return (
    <Link href={`/projects/${slug}`}>
      <a className="">
        <div className="wrapper hover:cursor-pointer mb-5 ">
          <div className="img-wrapper mb-2 md:mb-8">
            <Image
              quality={100}
              src={cover}
              width="608"
              height="400"
              alt="Hero 1"
            />
          </div>
          <div className="description text-base md:text-xl max-w-[577px]">
            <h2 className=" font-bold mb-2">{title}</h2>
            <p className=" font-bold text-secondaryGray">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
