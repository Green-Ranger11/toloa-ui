import React from "react";
import Post from "./Post";

function FeedPosts({topics}) {
  return (
    <>
    {
            topics?.length > 0 && topics?.map(topic => (
                <Post
                        key={topic?.id}
                        title={topic?.title}
                        description={topic?.description}
                        date={topic?.date}
                        author = {topic?.author}
                />
            ))
    }
    </>
  );
}

export default FeedPosts;
