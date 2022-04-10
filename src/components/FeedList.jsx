import React from "react";
import Card from "./Card";
import FeedPosts from "./FeedPosts";
import Notice from "./Notice";

function FeedList() {
  return (
    <>
      <Notice />
      <Card>
        <h2 className="text-3xl font-bold text-gray-600 text-left pl-4">
          #Topics
        </h2>
        <hr className="h-[2px] bg-slate-200 rounded-md w-[95%] mx-auto mt-1 mb-2" />{" "}
      </Card>
      <Card>
        <FeedPosts />
      </Card>
    </>
  );
}

export default FeedList;
