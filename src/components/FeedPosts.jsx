import React, { useState, useEffect } from "react";
import Post from "./Post";
import { AdjustmentsIcon } from "@heroicons/react/outline";

function FeedPosts({ topics }) {
  const [searchKey, setSearchKey] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(topics);
  }, [topics]);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value === "") {
      setFilteredList(topics);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredTopics = topics.filter((x) =>
      x.title.toLowerCase().includes(searchKey.toLowerCase())
    );

    setFilteredList(filteredTopics);
  };

  return (
    <>
      <div className="flex items-center justify-between pl-2 py-4">
        <div className="flex flex-col">
          <h3 className="text-1xl flex-1 font-bold text-gray-500 uppercase flex">
            <AdjustmentsIcon className="text-gray-500 w-6 mr-2" />
            Explore our Topics
          </h3>
          <div className="hidden sm:block">
            <span className="bg-purple-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Explore
            </span>
            <span className="bg-green-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Contribute
            </span>
            <span className="bg-cyan-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Track
            </span>
          </div>
        </div>
        <div className="px-5 my-1 xl:w-70 flex justify-end ">
          <div className="relative flex justify-end w-[100%] rounded input-group">
            <form
              className="flex justify-between w-[100%]"
              onSubmit={handleSubmit}
            >
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Search"
                onChange={handleChange}
              />
              <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  />
                </svg>
              </span>
            </form>
          </div>
        </div>
      </div>
      <hr className="w-[95%] mx-auto bg-gray-300 h-[2px] mb-3 mt-3" />
      {filteredList?.length > 0 &&
        filteredList?.map((topic) => (
          <Post
            key={topic?.id}
            title={topic?.title}
            description={topic?.description}
            date={topic?.date}
            author={topic?.author}
            id={topic?.id}
          />
        ))}
    </>
  );
}

export default FeedPosts;
