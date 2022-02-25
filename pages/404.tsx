import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Melvin Liu">
      <div className="text-center mx-auto mb-16">
        <Image
          src="/static/images/404.png"
          width={300}
          height={300}
          alt="Page not found"
        />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 text-primaryBlack dark:text-white ">
          Whoa, you’re traveling too far!
        </h1>
        <p className="text-primaryGray dark:text-gray-300 mb-8">
          This means you type the wrong url. Check the link again, or you can go
          back to the homepage.
        </p>
        <Link href="/">
          <a className="p-2 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-primaryBlack dark:text-white ">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
