import { useState } from "react";
import { send } from 'emailjs-com';

export default function Form() {

  const [data, setData] = useState({
    name: '',
    email: '',
    entity: '',
    timeframe: '2-3 months',
    brief: '',
  });

  const handleChange = (e: any) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const sendForm = (e: any) => {
    e.preventDefault();

    send(
      'service_al8ka5s',
      'template_ia7ilds',
      data,
      'user_0cgFEmhsf9Lrhx9lJjCNg'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

  };
  return (
    <form className=" md:ml-20 w-full max-w-3xl" onSubmit={sendForm}>
      <h1 className=" text-2xl md:text-5xl font-semibold text-primaryBlack mb-6">
        Available for freelance projects
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block capitalize tracking-wide text-gray-700 text-base font-normal mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-sm-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block capitalize tracking-wide text-gray-700 text-base font-normal mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block capitalize tracking-wide text-gray-700 text-base font-normal mb-2"
            htmlFor="entity"
          >
            Company/Brand
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="entity"
            type="text"
            name="entity"
            onChange={handleChange}
            value={data.entity}
            placeholder="Who you represent, a brand / company"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block capitalize tracking-wide text-gray-700 text-base font-normal mb-2"
            htmlFor="timeframe"
          >
            Time Frame
          </label>
          <select
            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block capitalize tracking-wide text-gray-700 text-base font-normal mb-2"
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
            rows={12}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primaryGray hover:bg-primaryRed text-white font-semibold py-3 px-8 rounded-sm mb-8"
      >
        Button
      </button>
    </form>
  );
}
