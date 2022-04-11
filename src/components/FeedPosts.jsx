import React from "react";
import Post from "./Post";
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import eu from "../images/eu.png";
import spc from "../images/spc.png";
import usp from "../images/usp.png";
import un from "../images/un.png";

function FeedPosts() {
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
        const fetchTopics = async () => {
                const result = await axios.get('http://localhost:5000/topic');
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
