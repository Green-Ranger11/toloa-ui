import React from "react";
import Card from "./Card";
import UserAvatar from "../../images/user-placeholder.png";

function FeedPost() {
  return (
    <>
      <Card>
        <div
          className="flex items-center justify-center w-10 h-10 ml-2 overflow-hidden rounded-full bg-left bg-cover"
          style={{ backgroundImage: `url(${UserAvatar})` }}
        ></div>
        <input
          type="text"
          id="large-input"
          class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </Card>
    </>
  );
}

export default FeedPost;
