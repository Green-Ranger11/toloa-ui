import react from "react";
import { useState } from "react";
import CardTotal from "./CardTotal";
import LineGraph from "./LineGraph";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-2xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowSidebar(!showSidebar)} className="fixed h-6 w-6 z-30 flex items-center cursor-pointer right-10 top-20" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>

      )}

      <div
        className={`top-0 right-0 w-[45vw] opacity-95 bg-[#000011] px-10 text-white fixed h-full z-40  ease-in-out duration-500 
        border-l shadow-2xl shadow-blue-900/50 ${showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
      >
        <h3 className="mt-20 ml-3 text-2xl font-semibold text-white">
          Dashboard
        </h3>
        <div className="flex-col">
          <div className="flex justify-between py-5 mx-3">
            <h2 className="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
              Top level totals</h2>
            <a href="#" className="text-xs text-gray-800 font-semibold uppercase">More</a>
          </div>
          <div className="flex justify-between">
            <CardTotal title={"Topics"} total={"212"} lastUpdate={"Last topic added 7 hours ago"} icon={"topics.svg"} />
            <CardTotal title={"Discussions"} total={"3094"} lastUpdate={"Last discussion updated 1 min ago"} icon={"discussions.svg"} />
            <CardTotal title={"Contributions"} total={"78"} lastUpdate={"Last contribution added 2 days ago"} icon={"contributions.svg"} />
          </div>
          <div className="flex justify-center bg-slate-200 p-3 mt-8 rounded-md border border-gray-50 mx-3">
            <LineGraph />

          </div>

        </div>

      </div>
    </>
  );
};

export default Sidebar;