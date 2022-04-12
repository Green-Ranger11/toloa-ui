import React from "react";
import Post from "./Post";
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import baseUrl from "../data/baseUrl";

function FeedPosts() {
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
        const fetchTopics = async () => {
                const result = await axios.get(baseUrl + '/topic');
                const fetchedTopics = result.data.map(topic => {
                        return {
                                id: topic.id,
                                title: topic.title,
                                description: topic.description,
                                author: `${topic?.createdBy?.firstName} ${topic?.createdBy?.lastName}`,
                                date: format(parseISO(topic.createdAt), 'd MMM'),
                        }
                });
                setTopics(fetchedTopics);
        }

        fetchTopics();
  }, [])

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
