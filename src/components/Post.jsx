import React from "react";
import { AtSymbolIcon, CalendarIcon } from "@heroicons/react/solid";

function Post(props) {

  return (
    <>
      <div>
        <div className="mx-auto py-3 px-3">
          {/* Header - Name of Post - User - Date */}
          <div className="max-w-[80%] flex justify-start items-center">
            <h4 className="font-semibold text-indigo-700 mx-2">{props.title}</h4>
            <span className="flex text-gray-400 text-sm">
              <AtSymbolIcon className="w-4" />
              {props.author}
              <CalendarIcon className="w-4 ml-3 mr-1" />{props.date}
            </span>
          </div>

          {/* Body */}
          <div className="max-w-[100%] my-4 mx-2">
            <p className="text-sm font-normal text-slate-600">
              {props.description}
            </p>
          </div>

          {/* Footer */}
          <div className="max-w-[100%] my-1 mx-2 text-sm text-sky-600">
            <a href="/timeline">See more(2)</a>
          </div>
        </div>
        <hr className="h-[2px] bg-slate-200 rounded-md w-[95%] mx-auto mt-1 mb-2" />
      </div>
    </>
  );
}

export default Post;
