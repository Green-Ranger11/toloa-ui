import React from "react";
import Card from "./Card";
import SamoaFlag from "../images/samoa-flag.png";
import TongaFlag from "../images/tonga-flag.png";

import {
  ChartPieIcon,
  InformationCircleIcon,
  SearchCircleIcon,
  RewindIcon,
} from "@heroicons/react/solid";

function Menu() {
  return (
    <>
      <h3 className="text-sm font-semibold pl-3 pb-2 pt-3 text-gray-500 uppercase">
        Quick Access
      </h3>
      <ul>
        <li>
          <a
            href="/overview"
            className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            <ChartPieIcon className="w-5 text-gray-400" />
            <span className="ml-3 text-sm font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            <InformationCircleIcon className="w-5 text-gray-400" />
            <span className="ml-3 text-sm font-medium">About</span>
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            <SearchCircleIcon className="w-5 text-gray-400" />
            <span className="ml-3 text-sm font-medium">Explore</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            <RewindIcon className="w-5 text-gray-400" />
            <span className="ml-3 text-sm font-medium">Back to Home</span>
          </a>
        </li>
      </ul>

      <hr className="h-[2px] bg-slate-200 rounded-md w-[90%] mx-auto my-4" />
      <h3 className="text-sm font-semibold pl-3 pb-2 text-gray-500 uppercase">
        countries
      </h3>
      <ul>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            <div
              className="flex items-center justify-center w-5 h-5 ml-2 overflow-hidden rounded-md bg-left bg-cover"
              style={{ backgroundImage: `url(${SamoaFlag})` }}
            ></div>
            <span className="ml-3 text-sm font-semibold">Samoa</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200"
          >
            <div
              className="flex items-center justify-center w-5 h-5 ml-2 overflow-hidden rounded-md bg-left bg-cover"
              style={{ backgroundImage: `url(${TongaFlag})` }}
            ></div>
            <span className="ml-3 text-sm font-semibold">Tonga</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
