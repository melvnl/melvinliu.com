import React, { useState } from "react";
import SuccessMessage from "./SuccesMessage";
import ErrorMessage from "./ErrorMessage";

import { Form, FormState } from "lib/types";
import LoadingSpinner from "./LoadingSpinner";

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
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
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list. (Kindly check your spam / all email tab for confirmation)`,
    });
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
            {form.state === Form.Loading ? <LoadingSpinner /> : "Subscribe 💌"}
          </button>
        </div>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm md:text-base">
          {`I'll only send emails when new content is posted. No spam 😉`}
        </p>
      )}
      {email}
    </div>
  );
}
