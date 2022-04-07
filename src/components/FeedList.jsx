import React from "react";
import Card from "./Card";
import FeedPost from "./FeedPost";
import FeedPosts from "./FeedPosts";
import Notice from "./Notice";

function FeedList() {
  return (
    <>
      <Card>
        <FeedPost />
      </Card>

      <Notice />

      <Card>
        <FeedPosts />
      </Card>
    </>
  );
}

export default FeedList;
