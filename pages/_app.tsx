import "@/styles/tailwind.css";
import "@/styles/theme.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-primaryWhite dark:bg-darkBlack">
      <SessionProvider session={pageProps.session}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
