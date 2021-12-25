export default function Form() {
  return (
    <form className=" md:ml-20 w-full max-w-3xl">
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
          >
            <option>2 weeks</option>
            <option>1 month</option>
            <option selected>2-3 months</option>
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
            placeholder="Tell me about your project objective"
            rows={12}
          />
        </div>
      </div>
    </form>
  );
}
