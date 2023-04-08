import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import readingTime from "reading-time";
import { Blog, highlightedTextPropTypes } from "@/lib/types";
import React from "react";

const getHighlightedText = ({ text, highlight }: highlightedTextPropTypes) => {
  const textParts = text.split(new RegExp(`(${highlight})`, "gi"));

  return textParts.map((textPart, index) => (
    <React.Fragment key={index}>
      {textPart.toLowerCase() === highlight.toLowerCase() ? (
        <b className=" bg-primaryRed text-black">{textPart}</b>
      ) : (
        textPart
      )}
    </React.Fragment>
  ));
};

export default function BlogCard({
  title,
  slug,
  date,
  description,
  content,
  cover,
  blurUrl,
  highlight,
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
              placeholder="blur"
              blurDataURL={blurUrl}
            />
          </div>
          <div className=" py-4">
            <h4 className="w-full mb-2 text-lg font-bold text-primaryBlack dark:text-white md:text-2xl group-hover:text-primaryRed ">
              {highlight && getHighlightedText({ text: title, highlight })}
              {!highlight && title}
            </h4>
            <div className="mb-6">
              <div className="flex text-sm text-primaryGray items-center">
                <span className="">
                  {format(parseISO(date), "MMMM dd, yyyy")}
                </span>
                ·<span className="ml-1 mr-2">{readingTime(content).text}</span>
              </div>
            </div>
            <div className=" text-base mb-2">
              {highlight &&
                getHighlightedText({ text: description, highlight })}
              {!highlight && description}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
