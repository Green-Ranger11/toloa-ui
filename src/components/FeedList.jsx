import React from "react";
import Card from "./Card";
import PostInput from "./PostInput";
import FeedPosts from "./FeedPosts";
import Notice from "./Notice";

function FeedList() {
  return (
    <>
      <Card>
        <PostInput />
      </Card>
      <Notice />
      <Card>
        <FeedPosts />
      </Card>
    </>
  );
}

export default FeedList;
