import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { Blog } from "@/lib/types";

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
      <a className="group">
        <div className="flex flex-col w-full">
          <div className="overflow-hidden rounded-md">
            <Image
              src={cover}
              width={380}
              height={140}
              alt={title}
              quality={100}
            />
          </div>
          <div className=" py-4">
            <h4 className="w-full mb-2 text-lg font-bold text-primaryBlack dark:text-white md:text-2xl group-hover:text-primaryRed ">
              {title}
            </h4>
            <div className="mb-6">
              <div className="flex text-sm text-primaryGray items-center">
                <span className="">
                  {format(parseISO(date), "MMMM dd, yyyy")}
                </span>
                ·<span className="ml-1 mr-2">{read} read ☕</span>
              </div>
            </div>
            <div className=" text-base mb-2">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
