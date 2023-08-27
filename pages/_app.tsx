import "@/styles/tailwind.css";
import "@/styles/theme.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import PageProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <PageProgress color="#E16259" />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
