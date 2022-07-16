import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";

export default function ProjectCard({
  title,
  slug,
  type,
  link,
  description,
  cover,
  banner,
}: Project) {
  return (
    <Link href={`/work/${slug}`}>
      <a className="">
        <div className="wrapper mb-5 ">
          <div className="img-wrapper mb-2 md:mb-8">
            <Image
              quality={100}
              src={cover}
              width="608"
              height="400"
              alt="Hero 1"
            />
            <h1 className="text-base font-medium text-primaryGray dark:text-gray-300">
              {type}
            </h1>
          </div>
          <div className="description text-primaryBlack text-left dark:text-white text-base max-w-[577px]">
            <h2 className=" font-bold mb-2">{title}</h2>
            <p className=" font-medium">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
