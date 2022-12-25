import { useState } from "react";
import FormMessage from "./FormMessage";

const description =
  "But first, you need you to complete this form. Once you've done, I will contact you to discuss more.";

export default function Form() {
  const [message, setMessage] = useState(false);
  const [formStatus, setFormStatus] = useState(0);

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    brief: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendForm = async (e: any) => {
    e.preventDefault();

    await fetch("/api/discord", {
      body: JSON.stringify({
        type: "inquiry",
        content: `someone send you an Inquiry! \n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nBrief: ${data.brief}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then(function (res) {
        setMessage(true);
        setFormStatus(res.status);
        setData({
          name: "",
          email: "",
          subject: "",
          brief: "",
        });
      })
      .catch(function (res) {
        setFormStatus(res.status);
      });
  };
  return (
    <form className=" md:ml-20 w-full max-w-3xl" onSubmit={sendForm}>
      <h1 className=" text-lg font-normal text-primaryGray dark:text-white mb-6">
        {description}
      </h1>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 md:px-3 md:pl-0 mb-6 md:mb-0">
          <label
            className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-white border rounded-sm-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:px-3 md:pl-0">
          <label
            className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-white border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap  mb-6">
        <div className="w-full md:px-3 md:pl-0 mb-6 md:mb-0">
          <label
            className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-white border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="subject"
            type="text"
            name="subject"
            onChange={handleChange}
            value={data.subject}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap  mb-6">
        <div className="w-full md:px-3 md:pl-0">
          <label
            className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
            htmlFor="brief"
          >
            Brief
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="brief"
            onChange={handleChange}
            name="brief"
            value={data.brief}
            required
            rows={12}
          />
        </div>
      </div>
      {message ? <FormMessage status={formStatus} /> : null}
      <button
        type="submit"
        className="bg-primaryGray dark:bg-gray-700 hover:bg-primaryRed dark:hover:bg-primaryRed text-white font-semibold py-3 px-8 rounded-sm mb-8"
      >
        Submit
      </button>
    </form>
  );
}
