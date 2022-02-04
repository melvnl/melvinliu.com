import React, { useState } from "react";
import SuccessMessage from "./SuccesMessage";
import ErrorMessage from "./ErrorMessage";

export default function Subscribe() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");

  const subscribe = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      // passing Component inside useState hook is an idiot
      // setMessage(<ErrorMessage>{error}</ErrorMessage>);
      return;
    }

    // passing Component inside useState hook is an idiot

    // setMessage(
    //   <SuccessMessage>
    //     {`Hooray! You're now on the list. (Kindly check your spam / all email tab for confirmation)`}
    //   </SuccessMessage>
    // );
  };

  return (
    <div className="w-full border border-gray-200 p-4 rounded-md">
      <h1 className=" text-primaryRed font-semibold text-lg md:text-2xl">
        Subscribe to the newsletter
      </h1>

      <p className=" text-primaryBlack text-sm md:text-base">
        Level up your knowledge about web development, tech, and hot topics in
        startup business environtment by joining my newsletter 🚀
      </p>
      <form className=" my-2 text-primaryBlack" onSubmit={subscribe}>
        <div className="flex flex-col md:flex-row mb-2">
          <input
            id="email-input"
            name="email"
            className=" focus:outline-none focus:border-primaryRed focus:ring-1 focus:ring-primaryRed border border-gray-200  w-full p-2 rounded-md"
            placeholder="you@awesome.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
          />
          <button
            className=" w-full p-2 my-2 md:w-1/6 md:ml-2 md:my-0 font-semibold text-white text-sm md:text-base bg-primaryRed rounded-md"
            type="submit"
          >
            {"Subscribe 💌"}
          </button>
        </div>
        <div className=" text-sm md:text-base">
          {message
            ? message
            : `I'll only send emails when new content is posted. No spam 😉`}
        </div>
      </form>
    </div>
  );
}
