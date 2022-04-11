import React, { useContext } from "react";
import ContributionContext from "../context/ContributionContext";
import { ArchiveIcon } from "@heroicons/react/outline";

function PostTimeline() {
  const { contribution } = useContext(ContributionContext);
  console.log(contribution);

  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 w-[80%] mx-auto">
        {contribution.map((cont) => (
          <li className="mb-10 ml-6">
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
              {cont.createdAt}
            </time>

            <p className="mb-4 text-base font-normal text-gray-400">
              {cont.content}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default PostTimeline;
