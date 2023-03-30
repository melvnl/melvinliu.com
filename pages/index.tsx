import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import Container from "@/components/Container";

const featuredWorks = [
  {
    img: "/static/images/projects/featured/buka.png",
    imgBlur:
      "data:image/jpeg;base64,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",
    title: "Bukalapak",
    description:
      "Helping public relations team having a tailored professional profile for BUKA Stock Initial Public Offering (IPO).",
    href: "/work/bukalapak",
  },
  {
    img: "/static/images/projects/featured/comute.png",
    imgBlur:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAmKADAAQAAAABAAAAmwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAmwCYAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMACQkJCQkJEAkJEBYQEBAWHhYWFhYeJh4eHh4eJi4mJiYmJiYuLi4uLi4uLjc3Nzc3N0BAQEBASEhISEhISEhISP/bAEMBCwwMEhESHxERH0szKjNLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS//dAAQACv/aAAwDAQACEQMRAD8A6Y1G1KTUbGkWRPVKSrTmqchoApS1nS1flNZ0poAzpazZK0JTWdIaQyo1MpzGowaBky1YWqymp1NMhlgVIKhBqQGmSOpppc0wmgQ01EaeTUZNMQ00UhNJmgD/0N3dUbNUZeo2ekWDtVSRqe71UkegCCRqzpTVqRqz5WoAqSms6Q1blas+RqBldjTM0jNUe6kBaU1OpqmrVOrUyGW1NSZqsGp4amImzTSaZuphamSOJqImkLVGWoFccTRmoS1G6gVz/9Gz5lRtJVTzajMtIosNJVV3qNpKrPJQASPVCV6fJJVGR6BkUr1nyNU0j1QkegBjtUe6oXkqLzKBNmgrVOrVmLJVhZKZDZoB6kD1RElPElMm5b30wvVfzKYZKdiXInL1EXqBpKiLmnYhyLJek31V3Um6gm7P/9LH86mGaszz6aZ6RRfaWq7y1Taeq7TUAWXlqnJLULzVTkmoAfJJWdLLimSz+lU2YscmgVxzOWpmTSUUxEivip1kqpS5oJcbmgJDTvMNZ4cineYadyHBl/zKaXql5hpPMNO4vZlsvTC9VtxpuTSuUoFnzKTzBVekouPkR//T80+1D1phuh61z25vWkyfWkVc3mux61Xa8X1rJpKBXLz3eelVmldqiopiCiiigAooooAKKKKACiiigAooooAKKKKACiiigD//1PDqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//V8OopaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9byf7IvpTDaD0rc8qmmKkXc59rT0qu0DLXRtFVZ4qAOfKkU2tSWAVQdCpouDj2IqKKKZAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//1+P2U0pVzbTCtIooMlV3StJlqs60DMqRKzJ4+9bki1nTLSZSMVhTKsSLgmoDTRM1YSiiimQFFFFABRTgKXFFylEZRUmKTFK4coyilxRTJsJRRRQB/9Dn8UwipKaaRRXYVWcVbaqr0DKUgrPlFaMlZ8tIaMeYfNVVquTfeqo1CKnsMoooqjEKcKbThQNDhTqQU6pNkhKKWkpDG00inmmmmQ0NxRS0VRFj/9k=",
    title: "Comute",
    description:
      "Realizing the accessibility of traveling by train for deaf friends using Dijkstra's algorithm.",
    href: "/work/comute",
  },
  {
    img: "/static/images/projects/featured/makmur.png",
    imgBlur:
      "data:image/jpeg;base64,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",
    title: "Makmur",
    description:
      "helping Indonesian people to make financial planning and long-term investments easily, and safely.",
    href: "/work/makmur",
  },
];

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <div className=" text-primaryBlack dark:text-white mt-20 mb-10 md:mb-20 ">
          <h1 className=" font-mono font-bold text-3xl md:text-6xl mb-5 md:mb-10">
            Hi, I&#39;m Melvin.
            <br />
            Software Engineer <br />
            based in <span className=" text-primaryRed">Indonesia🇮🇩</span>
          </h1>
          <p className="text-base md:text-xl max-w-[750px] text-primaryGray dark:text-white">
            with 3 years of solid experience in web things. Currently, I&#39;m
            focused on building accessible financial planning and long-term
            investment platform at{" "}
            <a
              className=" text-primaryRed hover:cursor-pointer hover:underline"
              href="https://www.makmur.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Makmur.
            </a>{" "}
            Feel free to explore my work.
          </p>
        </div>
        <div className=" text-primaryBlack dark:text-white my-8">
          <p className=" font-bold text-xl md:text-3xl mb-10">Featured Works</p>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredWorks.map((work) => (
              <div
                key={`${work.title}-project`}
                className="wrapper mb-5 rounded-2xl transform transition duration-500 hover:scale-110 hover:shadow-3xl p-5 cursor-pointer"
              >
                <div className="img-wrapper mb-2 md:mb-8">
                  <Image
                    quality={100}
                    src={work.img}
                    width="608"
                    height="620"
                    alt={work.title}
                    placeholder="blur"
                    blurDataURL={work.imgBlur}
                  />
                </div>
                <div className="description text-primaryBlack text-left dark:text-white text-base max-w-[577px] mb-6">
                  <h1 className=" text-2xl font-semibold text-primaryBlack dark:text-gray-300">
                    {work.title}
                  </h1>
                  <p className=" text-lg mt-2 font-normal">
                    {work.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="">
                    <NextLink href={work.href}>
                      <a>
                        <p className=" text-lg font-semibold">See Details</p>
                      </a>
                    </NextLink>
                  </div>
                  <NextLink href={work.href}>
                    <a>
                      <BsArrowUpRight className="" size={24} />
                    </a>
                  </NextLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
