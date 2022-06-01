import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Menlo.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link href="/static/images/favicon.svg" rel="shortcut icon" />
        <link rel="apple-touch-icon" href="/static/images/favicon.svg" />
        <link
          href="/static/images/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/images/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#E16259"
          href="/static/images/safari-pinned-tab.svg"
          rel="mask-icon"
        />
      </Head>
      <body className="font-sans bg-primaryWhite dark:bg-darkBlack">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
