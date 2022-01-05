import "../styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isProjects = router.pathname === "/projects";

  return (
    <div className={isProjects ? " bg-black" : "bg-primaryWhite"}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
