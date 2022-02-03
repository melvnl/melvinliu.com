import Link from "next/link";
import { Snippet } from "@/lib/types";

export default function SnippetCard({ title, slug, description }: Snippet) {
  return (
    <Link href={`/snippet/${slug}`}>
      <a className=" p-4 border boder-gray-200 rounded-md group">
        <div className="flex flex-col w-full">
          <h4 className="w-full mb-2 text-lg font-bold text-primaryBlack md:text-2xl group-hover:text-primaryRed ">
            {title}
          </h4>
          <div className=" mt-4 mb-2">
            <p>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
