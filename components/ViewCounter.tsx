import { useEffect } from "react";
import useSWR from "swr";

import { useRouter } from "next/router";

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

export default function ViewCounter({ slug }: any) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  const router = useRouter();
  const isBlogDetail = router.pathname === "/blog/[slug]";

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    if (isBlogDetail) {
      registerView();
    }
  }, [isBlogDetail, slug]);

  return (
    <span className=" ml-1">{`${
      views > 0 ? views.toLocaleString() : "0"
    } views`}</span>
  );
}
