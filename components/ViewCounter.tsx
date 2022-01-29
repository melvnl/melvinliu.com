import useSWR from "swr";

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

export default function ViewCounter({ slug }: any) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  return (
    <span className=" ml-1">{`${
      views > 0 ? views.toLocaleString() : "0"
    } views`}</span>
  );
}
