import React from "react";
import EuLogo from "../../images/eu.png";
import SpcLogo from "../../images/spc.png";
import UnLogo from "../../images/un.png";

function TrendingList() {
  return (
    <>
      <div className="flex flex-wrap justify-between px-3 pt-3">
        <h3 className="text-sm font-semibold pb-2 text-gray-500 uppercase">
          Trending
        </h3>
        <a href="#" className="text-sm font-semibold text-indigo-300">
          See more
        </a>
      </div>

      <div>
        <ul className="divide-y divide-solid">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
            >
              <div
                className="w-6 h-6 overflow-hidden rounded-md bg-left bg-cover"
                style={{ backgroundImage: `url(${EuLogo})` }}
              ></div>
              <div className="flex flex-wrap ml-4 flex-1">
                <h4 className="text-sm font-semibold">Climate Action</h4>
                <span className="text-sm font-medium">
                  Discover the impacts of climate change..
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
            >
              <div
                className="w-6 h-6 overflow-hidden rounded-md bg-left bg-cover"
                style={{ backgroundImage: `url(${UnLogo})` }}
              ></div>
              <div className="flex flex-wrap ml-4 flex-1">
                <h4 className="text-sm font-semibold">NCDs on the Rise</h4>
                <span className="text-sm font-medium">
                  Unhealthy lifestyles lead to rise in NCDs
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
            >
              <div
                className="w-6 h-6 overflow-hidden rounded-md bg-left bg-cover"
                style={{ backgroundImage: `url(${SpcLogo})` }}
              ></div>
              <div className="flex flex-wrap ml-4 flex-1">
                <h4 className="text-sm font-semibold">e-Learning Platforms</h4>
                <span className="text-sm font-medium">
                  The new e-learning trends on the rise during the pandemic..
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TrendingList;
