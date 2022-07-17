import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container title="Page Not Found">
      <div className="text-center mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 text-primaryBlack dark:text-white ">
          404 Not Found
        </h1>
        <p className="text-primaryGray dark:text-gray-300 mb-1">
          Sepertinya anda tersesat. Nikmati dulu komik dari
        </p>{" "}
        <a
          href="https://www.instagram.com/komikkamvret/"
          className=" block underline font-bold mx-auto text-center rounded-md text-primaryBlack dark:text-white "
        >
          komikkamvret
        </a>
        <div className=" mx-auto mb-8 mt-4">
          <Image
            src="/static/images/komikkamvret.jpg"
            width={540}
            height={540}
            alt="123"
            quality={100}
          />
        </div>
        <Link href="/">
          <a className="p-2 sm:p-4 w-64 font-bold mx-auto bg-primaryRed text-center rounded-md text-white dark:text-primaryBlack">
            Kembali ke Halaman Utama
          </a>
        </Link>
      </div>
    </Container>
  );
}
