import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { Blog } from "@/lib/types";

import { FiEye, FiClock } from "react-icons/fi";

import ViewCounter from "./ViewCounter";

export default function BlogCard({
  title,
  slug,
  date,
  read,
  description,
  cover,
}: Blog) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="group   overflow-hidden border border-borderGray rounded-md">
        <div className="flex flex-col w-full">
          <Image
            src={cover}
            width={380}
            height={140}
            alt={title}
            quality={100}
          />
          <div className=" border-t border-borderGray p-4">
            <h4 className="w-full mb-2 text-lg font-bold text-primaryBlack md:text-2xl group-hover:text-primaryRed ">
              {title}
            </h4>
            <div className="mb-2">
              <div className="flex items-center">
                <FiClock size={17} />
                <span className="ml-1 mr-2">{read} read</span>
                <FiEye size={17} />
                <ViewCounter slug={slug} />
              </div>
            </div>
            <div className=" mt-4 mb-2">
              <span className=" font-semibold">
                {format(parseISO(date), "MMMM dd, yyyy")}
              </span>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
