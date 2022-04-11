import React, { useContext } from "react";
import ContributionContext from "../context/ContributionContext";
import { ArchiveIcon, BanIcon } from "@heroicons/react/outline";

function PostTimeline() {
  const { contribution } = useContext(ContributionContext);

  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 w-[80%] mx-auto ">
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center text-white items-center w-6 h-6 bg-green-600 rounded-full ring-8 ring-green-300">
            <BanIcon />
          </span>

          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-600 ">
            Start
            <span className="bg-green-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Final
            </span>
          </h3>
        </li>
        {contribution.map((cont) => (
          <li key={cont.id} className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center text-white items-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-blue-300">
              <ArchiveIcon />
            </span>

            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-600 ">
              {cont.title}
              <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                Latest
              </span>
            </h3>

            <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
              {new Date(cont.createdAt).getFullYear() +
                "-" +
                new Date(cont.createdAt).getMonth() +
                "-" +
                new Date(cont.createdAt).getDate()}
              {/* {cont.createdAt} */}
            </time>

            <p className="mb-4 text-base font-normal text-gray-400">
              {cont.content}
            </p>
          </li>
        ))}
        <li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center text-white items-center w-6 h-6 bg-red-600 rounded-full ring-8 ring-red-300">
            <BanIcon />
          </span>

          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-600 ">
            Present
            <span className="bg-red-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Final
            </span>
          </h3>
        </li>
      </ol>
    </>
  );
}

export default PostTimeline;
