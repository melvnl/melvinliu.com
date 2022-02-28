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

    await fetch(`/api/recommendations/${entry.id}`, {
      method: "DELETE",
    });

    mutate("/api/recommendations");
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

const Recommendations: NextPage = () => {
  const { data: session } = useSession();
  const { data: entries } = useSWR("/api/recommendations", fetcher);

  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const [data, setData] = useState({
    company: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const leaveEntry = async (e: any) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    console.log({ data });

    const res = await fetch("/api/recommendations", {
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
    mutate("/api/recommendations");
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for giving me your recommendation.`,
    });
    setData({
      company: "",
      message: "",
    });
  };

  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <h5 className="text-lg md:text-xl font-bold text-primaryBlack dark:text-white">
          Give Me Your Recommendation
        </h5>
        <p className="my-1 text-primaryBlack dark:text-white">
          Share a message for my future client & colleague.
        </p>
        {!session && (
          <button
            className=" flex items-center my-4 font-semibold px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white dark:text-white rounded "
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            <FiGithub size={16} className=" mr-2" /> Login with Github
          </button>
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

export default Recommendations;
