import type { NextPage } from "next";
import Container from "@/components/Container";
import prisma from "../lib/prisma";
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR, { useSWRConfig } from "swr";
import { format } from "date-fns";
import { useState } from "react";
import { Form, FormState } from "@/lib/types";
import LoadingSpinner from "@/components/LoadingSpinner";

import { FiGithub } from "react-icons/fi";

async function fetcher(...args: any) {
  const res = await fetch(args);

  return res.json();
}

function RecommendationEntry({ entry, user }: any) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e: any) => {
    e.preventDefault();

    await fetch(`/api/support/${entry.id}`, {
      method: "DELETE",
    });

    mutate("/api/support");
  };

  return (
    <div className="flex flex-col ">
      <hr className=" my-4 w-full " />
      <div className="flex text-primaryBlack dark:text-white">
        <p className=" text-base font-semibold ">{entry.name}</p>
        <span className=" mx-2">-</span>
        <p className="text-base">{entry.company}</p>
        {user && entry.name === user.name && (
          <>
            <button
              className="text-sm ml-auto text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
      <p className="text-sm text-gray-400 dark:text-gray-300">
        {format(new Date(entry.date), "d MMM yyyy 'at' h:mm bb")}
      </p>
      <div className=" text-primaryBlack dark:text-white mt-4 ">
        {entry.message}
      </div>
    </div>
  );
}

const Support: NextPage = () => {
  const { data: session } = useSession();
  const { data: entries } = useSWR("/api/support", fetcher);

  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const [data, setData] = useState({
    company: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const notification = async () => {
    await fetch("/api/discord", {
      body: JSON.stringify({
        content: `someone give you a recommendation! Check it out melv: https://melvinliu.com/support \n\nCompany: ${data.company}\nMessage: ${data.message}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const leaveEntry = async (e: any) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch("/api/support", {
      body: JSON.stringify({
        company: data.company,
        message: data.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }
    mutate("/api/support");
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for giving me your support.`,
    });
    notification();
    setData({
      company: "",
      message: "",
    });
  };

  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <h5 className="text-lg md:text-xl font-bold text-primaryBlack dark:text-white">
          Give Me Your Support
        </h5>
        <p className="my-1 text-primaryBlack dark:text-white">
          Share a message for my future client & colleague.
        </p>
        {!session && (
          <div className=" mt-8 md:mt-0 flex flex-col md:flex-row">
            <button
              className=" flex items-center justify-center my-2 md:my-4 font-semibold px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white dark:text-white rounded "
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              <FiGithub size={16} className=" mr-2" /> Login with Github
            </button>
            <button
              className=" flex items-center justify-center   my-2 md:my-4 md:ml-2 font-semibold px-4 py-2 bg-gray-100 dark:bg-gray-700 text-primaryBlack dark:text-white rounded "
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              <div className=" h-4 w-4 mr-2">
                <svg
                  viewBox="0 0 533.5 544.3"
                  focusable="false"
                  role="presentation"
                  aria-hidden="true"
                  className="css-yxiis9"
                >
                  <g>
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    ></path>
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    ></path>
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    ></path>
                  </g>
                </svg>
              </div>{" "}
              Login with Google
            </button>
          </div>
        )}
        {session?.user && (
          <>
            <div className=" my-10 flex flex-col justify-between md:w-1/2 lg:items-center lg:flex-row">
              <div className=" flex">
                <div
                  style={{ backgroundImage: `url('${session?.user.image}')` }}
                  className=" rounded-full h-12 w-12 bg-cover bg-white bg-no-repeat mr-3"
                />
                <div className="flex flex-col">
                  <p className="text-primaryBlack dark:text-white">
                    Sign In as{" "}
                    <span className=" font-bold ">{session?.user.name} </span>
                  </p>
                  <p className="font-bold text-primaryBlack dark:text-white">
                    {session?.user.email}
                  </p>
                </div>
              </div>
              <button
                className="font-bold h-8 mt-4 lg:mt-0 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
            <form className="my-4" onSubmit={leaveEntry}>
              <div className=" w-full md:w-1/2">
                <label
                  className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  aria-label="Type Your company..."
                  placeholder="Type Your company..."
                  required
                  maxLength={50}
                  className="appearance-none block w-full bg-gray-200 text-gray-700  border rounded-sm-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleChange}
                  value={data.company}
                />
              </div>
              <div className=" w-full md:w-1/2">
                <label
                  className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  aria-label="Type Your Message..."
                  placeholder="Type Your Message (500 max characters)..."
                  required
                  rows={8}
                  maxLength={500}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-sm-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleChange}
                  value={data.message}
                />
              </div>

              <button
                className="flex items-center justify-center px-4 pt-1 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
                type="submit"
              >
                {form.state === Form.Loading ? <LoadingSpinner /> : "Submit"}
              </button>
            </form>
          </>
        )}

        <h6 className=" mt-10 mb-8 text-md md:text-lg font-bold text-primaryBlack dark:text-white">
          What People Say about me!
        </h6>
        <div className=" w-full md:w-1/2">
          {entries?.map((entry: any) => (
            <RecommendationEntry
              key={entry.id}
              entry={entry}
              user={session?.user}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Support;
