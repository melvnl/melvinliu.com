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
          <div className="flex flex-col lg:flex-row">
            <Image className=" rounded-lg" src={cover} width={750} height={315} alt={title} />
            <div className=" lg:ml-10 lg:max-w-xl">
            <h4 className="w-full mb-4 text-lg font-semibold hover:text-primaryRed text-gray-900 md:text-5xl ">
              {title}
            </h4>
            <p className="text-gray-600">{description}</p>
            </div>
          </div>
         
        </div>
      </a>
    </Link>
  );
}