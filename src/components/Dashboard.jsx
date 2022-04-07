import react from "react";
import { useState } from "react";
import CardTotal from "./CardTotal";

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
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-20"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="20"
          height="20"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
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
        <div class="flex-col">
          <div class="flex justify-between py-5 mx-3">
            <h2 class="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
              Top level totals</h2>
            <a href="#" class="text-xs text-gray-800 font-semibold uppercase">More</a>
          </div>
          <div className="flex justify-between">
            <CardTotal title={"Topics"} total={"212"} lastUpdate={"Last topic added 7 hours ago"} icon={"topics.svg"} />
            <CardTotal title={"Discussions"} total={"3094"} lastUpdate={"Last discussion updated 1 min ago"} icon={"discussions.svg"}/>
            <CardTotal title={"Contributions"} total={"78"} lastUpdate={"Last contribution added 2 days ago"} icon={"contributions.svg"}/>
          </div>

        </div>

      </div>
    </>
  );
};

export default Sidebar;