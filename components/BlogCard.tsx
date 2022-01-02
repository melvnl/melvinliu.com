import Link from "next/link";
import Image from "next/image";
import { Blog } from "../lib/types";

export default function BlogCard({ title, slug, cover }: Blog) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="mr-auto w-[30%]">
        <div className="w-full mb-8">
          <div className="flex flex-col">
            <Image
              className=" rounded-lg"
              src={cover}
              width={250}
              height={250}
              alt={title}
            />
            <h4 className="w-full mb-2 text-lg font-semibold text-gray-900 md:text-3xl ">
              {title}
            </h4>
          </div>
        </div>
      </a>
    </Link>
  );
}
