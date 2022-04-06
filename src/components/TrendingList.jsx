import React from "react";

function TrendingList() {
  return (
    <>
      <div className="flex flex-wrap justify-between px-3 pt-3">
        <h3 className="text-sm font-semibold pb-2 text-gray-500 uppercase">
          Trending
        </h3>
        <a href="#" className="text-sm font-semibold text-indigo-300">
          See more
        </a>
      </div>

      <div>
        <ul>
          <li>topic 1</li>
          <li>topic 2</li>
          <li>topic 3</li>
          <li>topic 4</li>
        </ul>
      </div>
    </>
  );
}

export default TrendingList;
