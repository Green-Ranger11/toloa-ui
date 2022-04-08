import React from "react";
import EuLogo from "../../images/eu.png";
import { AtSymbolIcon, CalendarIcon } from "@heroicons/react/solid";

function Post() {
  const data = {
    id: 1,
    topic: "Health and NCDs",
    description:
      "Explore the rise of Non-communicable diseases in the Pacific and what we can do to solve this issue..",
  };

  return (
    <>
      <div>
        <div className="mx-auto py-3 px-3">
          {/* Header - Name of Post - User - Date */}
          <div className="max-w-[60%] flex justify-between items-center">
            <div
              className="w-6 h-6 overflow-hidden rounded-md bg-left bg-cover mr-1"
              style={{ backgroundImage: `url(${EuLogo})` }}
            ></div>
            <h4 className="font-semibold text-indigo-700">Health and NCDs</h4>
            <span className="flex text-gray-400 text-sm">
              <AtSymbolIcon className="w-4" />
              Alan Manaia
              <CalendarIcon className="w-4 ml-3 mr-1" />8 Apr
            </span>
          </div>

          {/* Body */}
          <div className="max-w-[100%] my-4 mx-2">
            <p className="text-sm font-normal text-slate-600">
              Explore the rise of Non-communicable diseases in the Pacific and
              what we can do to solve this issues...
            </p>
          </div>

          {/* Footer */}
          <div className="max-w-[100%] my-1 mx-2 text-sm text-sky-600">
            <span>See more(2)</span>
          </div>
        </div>
        <hr className="h-[2px] bg-slate-200 rounded-md w-[95%] mx-auto mt-1 mb-2" />
      </div>
    </>
  );
}

export default Post;
