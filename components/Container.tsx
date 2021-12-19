import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import cn from 'classnames';
import NextLink from 'next/link';

import Footer from './Footer';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 '
            : 'font-normal text-gray-600',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-sm hover:bg-bgHovered transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Melvin Liu – Engineer, writer, creator.',
    description: `Software Engineer, JavaScript enthusiast, and course creator.`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-primaryWhite w-full max-w-[1260px] ">
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
      <div className="flex flex-col justify-center px-2 md:px-8">
        <nav className="flex items-center  justify-between w-full relative border-gray-200 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-primaryWhite bg-opacity-60 ">
        <div className=" font-bold ">
            Melvin Liu
          </div>
          <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
          </div>
        </nav>
      </div>
      <main
        className="flex flex-col justify-center px-2 md:px-8 bg-primaryWhite dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}