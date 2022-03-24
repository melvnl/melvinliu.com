import { useState } from "react";
import FormMessage from "./FormMessage";

export default function Form() {
  const [message, setMessage] = useState(false);
  const [formStatus, setFormStatus] = useState(0);

  const [data, setData] = useState({
    name: "",
    email: "",
    entity: "",
    timeframe: "2-3 months",
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
        content: `someone send you an Inquiry! \n\nName: ${data.name}\nEmail: ${data.email}\nEntity: ${data.entity}\nTimeframe: ${data.timeframe}\nBrief: ${data.brief}`,
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
          entity: "",
          timeframe: "2-3 months",
          brief: "",
        });
      })
      .catch(function (res) {
        setFormStatus(res.status);
      });
  };
  return (
    <form className=" md:ml-20 w-full max-w-3xl" onSubmit={sendForm}>
      <h1 className=" text-2xl md:text-5xl font-semibold text-primaryBlack dark:text-white mb-6">
        Available for freelance projects
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
            placeholder="Name"
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
            placeholder="Email"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap  mb-6">
        <div className="w-full md:w-1/2 md:px-3 md:pl-0 mb-6 md:mb-0">
          <label
            className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
            htmlFor="entity"
          >
            Company/Brand
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-white border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="entity"
            type="text"
            name="entity"
            onChange={handleChange}
            value={data.entity}
            placeholder="Who you represent, a brand / company"
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:px-3 md:pl-0">
          <label
            className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
            htmlFor="timeframe"
          >
            Time Frame
          </label>
          <select
            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500 appearance-none"
            id="timeframe"
            onChange={handleChange}
            name="timeframe"
            value={data.timeframe}
          >
            <option>2 weeks</option>
            <option>1 month</option>
            <option>2-3 months</option>
            <option>uncertain</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap  mb-6">
        <div className="w-full md:px-3 md:pl-0">
          <label
            className="block capitalize tracking-wide text-gray-700 dark:text-white text-base font-normal mb-2"
            htmlFor="brief"
          >
            Project Brief
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="brief"
            onChange={handleChange}
            name="brief"
            placeholder="Tell me about your project objective"
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
