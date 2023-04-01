import NextLink from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { Project } from "@/lib/types";

export default function ProjectCard({
  title,
  slug,
  type,
  link,
  description,
  cover,
  blurUrl,
  banner,
}: Project) {
  return (
    <div className="wrapper mb-5 rounded-2xl transform transition duration-500 hover:scale-110 hover:shadow-3xl p-5 cursor-pointer">
      <div className="img-wrapper mb-2 md:mb-8">
        <Image
          quality={100}
          src={cover}
          width="608"
          height="620"
          alt={title}
          placeholder="blur"
          blurDataURL={blurUrl}
        />
      </div>
      <div className="description text-primaryBlack text-left dark:text-white text-base max-w-[577px] md:h-[140px] mb-6">
        <h1 className=" text-2xl font-semibold text-primaryBlack dark:text-gray-300">
          {title}
        </h1>
        <p className=" text-base lg:text-lg mt-2 font-normal">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <NextLink href={slug}>
            <a>
              <p className=" text-lg font-semibold">See Details</p>
            </a>
          </NextLink>
        </div>
        <NextLink href={slug}>
          <a>
            <BsArrowUpRight className="" size={24} />
          </a>
        </NextLink>
      </div>
    </div>
  );
}
