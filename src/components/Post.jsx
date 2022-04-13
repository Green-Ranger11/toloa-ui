import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AtSymbolIcon,
  CalendarIcon,
  BookmarkIcon,
  EyeIcon,
} from "@heroicons/react/solid";
import ContributionContext from "../context/ContributionContext";

function Post(props) {
  const { setTopicID } = useContext(ContributionContext);

  const handleClick = () => {
    setTopicID(props.id);
  };

  return (
    <>
      <div>
        <div className="mx-auto py-2 px-3">
          {/* Header - Name of Post - User - Date */}
          <div className="max-w-[100%] sm:max-w-[80%] flex justify-start md:items-center items-start flex-col md:flex-row">
            <h4 className="font-semibold text-indigo-700 mx-2">
              {props.title}
            </h4>
            <span className="flex text-gray-400 text-sm mx-2">
              <AtSymbolIcon className="w-4" />
              {props.author}
              <CalendarIcon className="w-4 ml-3 mr-1" />
              {props.date}
            </span>
          </div>

          {/* Body */}
          <div className="max-w-[100%] my-4 mx-2">
            <p className="text-sm font-normal text-slate-600">
              {props.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between max-w-[100%] w-[60%] sm:w-[65%] md:w-[25%] my-1 mx-2 text-sm text-sky-600">
            <Link
              to={`/timeline/${props.id}`}
              onClick={handleClick}
              className="flex"
            >
              <EyeIcon className="w-4 mr-1" />
              View More
            </Link>
            <div className="flex">
              <BookmarkIcon className="w-4" />
              <a href="#" className="">
                Save
              </a>
            </div>
          </div>
        </div>
        <hr className="h-[2px] bg-slate-200 rounded-md w-[95%] mx-auto mt-1 mb-2" />
      </div>
    </>
  );
}

export default Post;
