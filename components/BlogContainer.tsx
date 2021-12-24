import Link from 'next/link';
import Image from 'next/image'
import { Blog } from '../lib/types'

export default function BlogContainer({
  title,
  slug,
  description,
  cover
}: Blog) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col md:flex-row">
            <Image className=" rounded-lg" src={cover} width={750} height={315} alt={title} />
            <div className=" max-w-xl ml-10">
            <h4 className="w-full mb-4 text-lg font-semibold text-gray-900 md:text-5xl ">
              {title}
            </h4>
            <p className=" text-gray-600">{description}</p>
            </div>
          </div>
         
        </div>
      </a>
    </Link>
  );
}