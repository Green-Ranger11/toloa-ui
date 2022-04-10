import React from "react";
import { LightBulbIcon } from "@heroicons/react/outline";

function Contribution() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center px-3 pt-3 pb-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">
          Add a Contribution
        </h3>
        <LightBulbIcon className="text-gray-500 w-6" />
      </div>
      <form>
        <div className="mb-4 mx-3">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            for="username"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm border-gray-400"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4 mx-3">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            for="username"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm border-gray-400"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4 mx-3">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            for="username"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm border-gray-400"
            type="text"
            placeholder="Enter title"
          />
        </div>

        <button
          type="submit"
          className="text-[#fff] w-[100%] py-2 rounded-md bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Contribution;
