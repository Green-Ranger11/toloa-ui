import react from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ArchiveIcon, BanIcon, AnnotationIcon } from "@heroicons/react/outline";

import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";

function DiscussionPost() {
  return (
      
      <div className="w-full p-2 mx-auto rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-blue-50 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="flex flex-col">

                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-600 ">
                    TITLE
                    <span className="bg-blue-300 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                      Discussion
                    </span>
                  </h3>

                  <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
                    {new Date().getFullYear() +
                      "-" +
                      new Date().getMonth() +
                      "-" +
                      new Date().getDate()}
                  </time>

                  <p className="mb-4 text-base font-normal text-gray-400">
                    aslfjhoajs ajskdhaksjhd akjsdh kajdglkrjdg perop peiifj akdf
                    lksdjf lksdjfl kj
                  </p>
                </div>

                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <CommentSection />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
  );
}

export default DiscussionPost;
