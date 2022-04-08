import React from "react";
import SendIcon from "../../images/send-icon.png";
import {
  PhotographIcon,
  ExternalLinkIcon,
  PaperClipIcon,
} from "@heroicons/react/solid";

function FeedPost() {
  return (
    <>
      <div className="flex items-center justify-between my-2 mx-2 relative">
        {/* <div
          className="flex items-center justify-center w-12 h-12 ml-2 overflow-hidden rounded-full bg-left bg-cover"
          style={{ backgroundImage: `url(${UserAvatar})` }}
        ></div> */}
        <textarea
          type="text"
          id="large-input"
          placeholder="Add a Contribution"
          className="block h-[100px] w-[100%] text-gray-900 bg-gray-200 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-gray-300 dark:focus:border-gray-300 placeholder:text-sm placeholder:text-gray-400 "
        ></textarea>

        <div className="absolute bottom-0 w-[100%] px-3 pb-2 flex justify-between items-center">
          <div className="w-[15%] text-gray-500 flex justify-between">
            <a href="#">
              <PhotographIcon className="w-5" />
            </a>
            <a href="#">
              <ExternalLinkIcon className="w-5" />
            </a>
            <a href="#">
              <PaperClipIcon className="w-5" />
            </a>
          </div>

          <a href="#" className="">
            <img
              src={SendIcon}
              alt="Submit button"
              className="w-8 h-8 p-1 pr-[7px] pt-[6px] overflow-hidden rounded-full bg-blue-500"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default FeedPost;
