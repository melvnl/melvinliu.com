export default function Sidebar() {
  return (
    <div className=" md:pt-[120px] lg:pt-[72px] max-w-xs">
    <h1>Hourly rate starts from $30</h1>
    <div className="flex flex-col w-full ">  
      <div id="design" className=" my-5">
        <p>Design</p>
        <ul className="list-disc">
          <div className=" ml-6">
            <li>User Interface</li>
            <li>User Experience</li>
            <li>Brand Identity</li>
            <li>Design System</li>
          </div>
        </ul>
      </div>
      <div id="frontend" className="my-5">
        <p>Frontend Development</p>
        <ul className="list-disc">
          <div className=" ml-6">
            <li>React, Next.js</li>
            <li>Vue, Nuxt.js</li>
          </div>
        </ul>
      </div>
      <div id="backend" className="my-5">
          
        <p>Backend</p>
        <ul className="list-disc">
          <div className=" ml-6">
            <li>Node</li>
            <li>Go</li>
            <li>Firebase/Hasura</li>
            <li>Headless CMS</li>
          </div>
        </ul>
      </div>
    </div>
    </div>
    
  );
}
