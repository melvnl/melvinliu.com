import Head from "next/head";
import { useRouter } from "next/router";
import { Nav } from "../lib/types";
import cn from "classnames";
import NextLink from "next/link";

import Footer from "./Footer";

function NavItem({ href, text }: Nav) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 "
            : "font-normal text-gray-600",
          " p-1 md:ml-4 sm:px-3 sm:py-2 rounded-sm hover:bg-bgHovered transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Melvin Liu – Software Engineer, Web",
    description: `Indonesia based software engineer, and product designer`,
    image: "https://melvinliu.com/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="w-full xl:px-16">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://melvinliu.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://melvinliu.com${router.asPath}`} />
        <link rel="icon" href="/static/images/favicon.svg" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Melvin Liu" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mlven23" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="bg-primaryWhite sticky top-0 z-50 border-b  border-primaryRed md:border-0 px-2 md:px-8 mb-4">
        <nav className=" flex justify-between items-center w-full relative border-gray-200 mx-auto py-4 md:py-8 text-gray-900 ">
          <div className=" hidden font-bold md:block text-2xl whitespace-nowrap">
            melvinliu.com
          </div>
          <div className=" w-full flex justify-between md:w-auto">
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="Blogs" />
            <NavItem href="/inquiry" text="Inquiry" />
          </div>
        </nav>
      </div>
      <main className="flex flex-col justify-center px-2 md:px-8 mt-8 ">
        {children}
        <Footer />
      </main>
    </div>
  );
}
