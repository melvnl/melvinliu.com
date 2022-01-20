import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { Blog } from "../lib/types";

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
          <Image src={cover} width={350} height={140} alt={title} />
          <div className=" border-t border-borderGray p-4">
            <h4 className="w-full mb-2 text-lg font-bold text-primaryBlack md:text-2xl group-hover:text-primaryRed ">
              {title}
            </h4>
            <div className="mb-2">
              <div className="flex">
                <Image
                  src="/static/images/clock.svg"
                  width={17}
                  height={17}
                  alt="Clock Icon"
                />
                <span className="ml-1">{read} read</span>
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
