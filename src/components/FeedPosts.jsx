import React from "react";
import Post from "./Post";
import eu from "../images/eu.png";
import spc from "../images/spc.png";
import usp from "../images/usp.png";
import un from "../images/un.png";

function FeedPosts() {
  return (
    <>
      <Post title="Health & NCDs" author="Alan Manaia" date="8 Apr" description="Explore the rise of Non-communicable diseases in the Pacific and
              what we can do to solve this issues..." />
      <Post title="Climate Change" author="John Doe" date="8 Apr" description="Explore the rise of Non-communicable diseases in the Pacific and
              what we can do to solve this issues..." />
      <Post title="Education" author="Jane Doe" date="8 Apr" description="Explore the rise of Non-communicable diseases in the Pacific and
              what we can do to solve this issues..." />
      <Post title="Information Tech" author="Alex Alexander" date="8 Apr" description="Explore the rise of Non-communicable diseases in the Pacific and
              what we can do to solve this issues..." />
    </>
  );
}

export default FeedPosts;
