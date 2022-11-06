import Head from "next/head";
import { useRouter } from "next/router";
import { Nav } from "@/lib/types";
import cn from "classnames";
import NextLink from "next/link";
import { useTheme } from "next-themes";

import Hello from "@/lib/hello";
import { HelloFlag } from "@/constants/env";

import Footer from "./Footer";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileNavbar";

const links = [
  { href: "/", text: "Home" },
  { href: "/work", text: "Work" },
  { href: "/blog", text: "Blog" },
  { href: "/dashboard", text: "Dashboard" },
  { href: "/support", text: "Support" },
];

let saidHello = !HelloFlag;

function NavItem({ href, text }: Nav) {
  const router = useRouter();

  const isActive = () => {
    if (router.asPath.includes(href)) {
      if (router.asPath === "/") return true;
      else if (href.length > 1) return true;
    }

    return false;
  };
  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive()
            ? "font-semibold text-gray-800 dark:text-white "
            : "font-normal text-gray-600 dark:text-gray-300",
          " hidden md:inline-block p-1 md:mr-7 sm:px-3 sm:py-2 sm:pl-0 rounded-sm transition-all"
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

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const [onTop, setOnTop] = useState(true);
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!saidHello) {
    Hello();
    saidHello = true;
  }

  return (
    <div className="w-full px-4 md:px-8 xl:px-24 2xl:px-48">
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
      <div
        className={cn(
          onTop
            ? "bg-transparent"
            : "bg-primaryWhite shadow-sm dark:shadow-gray-300 md:border-b  md:border-0 ",
          "dark:bg-darkBlack sticky top-0 z-50 first:mb-4"
        )}
      >
        <nav className=" flex justify-between items-center w-full relative  py-4 ">
          <div className=" w-full flex justify-between items-center md:w-auto ">
            <div className=" w-full">
              <MobileMenu />
              {links.map(({ href, text }: Nav) => (
                <NavItem key={text} href={href} text={text} />
              ))}
            </div>
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 md:ml-4 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main className=" flex flex-col justify-center mt-2 md:mt-8 pt-2 md:pt-4  ">
        {children}
        <Footer />
      </main>
    </div>
  );
}
