import React from "react";
import Card from "./Card";
import FeedPost from "./FeedPost";
import FeedPosts from "./FeedPosts";

function FeedList() {
  return (
    <>
      <Card>
        <FeedPost />
      </Card>
      <Card>
        <FeedPosts />
      </Card>
    </>
  );
}

export default FeedList;
