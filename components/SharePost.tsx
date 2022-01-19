import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function ShareLink({ href, children }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className=" p-2 text-primaryGray rounded-sm hover:bg-gray-200"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function SharePost({ title, read, href }: any) {
  const shareTwitter = `http://twitter.com/share?text=${title}&url=${href}`;
  const shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${href}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${href}&t=${title}`;

  return (
    <div className=" mb-10">
      <div className="flex items-center">
        <div className="img-wrapper pr-4">
          <Image
            src="/static/images/profile.png"
            width="50"
            height="50"
            alt="Melvin Liu"
          />
        </div>
        <div className="text-sm description">
          <p>By Melvin Liu</p>
          <span className=" text-primaryGray">
            Engineering, Design, Entrepreneurship
          </span>
        </div>
      </div>
      <div className=" ">
        <p className=" mt-10 mb-5 text-base">{read} read</p>
        <h1 className="uppercase text-sm text-primaryGray mb-2">
          share this post
        </h1>
        <div className=" flex items-center">
          <ShareLink href={shareTwitter}>
            <FaTwitter className="hover:text-blue-500" size={22} />
          </ShareLink>
          <ShareLink href={shareLinkedin}>
            <FaLinkedinIn className="hover:text-blue-700" size={22} />
          </ShareLink>
          <ShareLink href={shareFacebook}>
            <FaFacebook className="hover:text-blue-700" size={22} />
          </ShareLink>
        </div>
        <hr className=" mt-8 max-w-[40px]" />
      </div>
    </div>
  );
}
