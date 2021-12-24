import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Nav } from '../lib/types'
import cn from 'classnames';
import NextLink from 'next/link';

import Footer from './Footer'; 

function NavItem({ href, text }: Nav  ) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 '
            : 'font-normal text-gray-600',
          ' p-1 ml-4 sm:px-3 sm:py-2 rounded-sm hover:bg-bgHovered transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props : any) {

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Melvin Liu – Engineer, writer, creator.',
    description: `Software Engineer, JavaScript enthusiast, and course creator.`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="w-full">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://melvinliu.com${router.asPath}`} />
        <link rel="canonical" href={`https://melvinliu.com${router.asPath}`} />
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
      <div className=" border-b-2 border-gray-600 md:border-0 px-2 md:px-8 mb-4">
        <nav className=" overflow-x-scroll md:overflow-x-visible flex justify-between items-center w-full relative border-gray-200 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-primaryWhite">
        <div className=" font-bold block text-2xl whitespace-nowrap">
            Melvin Liu
          </div>
          <div className=" ml-12 md:ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="Blogs" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/mission" text="Mission" />
          </div>
        </nav>
      </div>
      <main
        className="flex flex-col justify-center px-2 md:px-8"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}