import React from "react";
import Card from "./Card";
import FeedPosts from "./FeedPosts";
import Notice from "./Notice";
import PostInput from './PostInput';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import baseUrl from "../data/baseUrl";

function FeedList() {
  const [topics, setTopics] = React.useState([]);

  const addTopic = (topic) => {
    setTopics([{
      id: topic.id,
      title: topic.title,
      description: topic.description,
      author: `${topic?.createdBy?.firstName} ${topic?.createdBy?.lastName}`,
      date: format(parseISO(topic.createdAt), 'd MMM'),
    }, ...topics ]);
  }

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
  }, []);


  return (
    <>
    <Card>
      <PostInput addTopic={addTopic} />
    </Card>
      <Notice />
      <Card>
        <h2 className="pl-4 text-3xl font-bold text-left text-gray-600">
          #Topics
        </h2>
        <hr className="h-[2px] bg-slate-200 rounded-md w-[95%] mx-auto mt-1 mb-2" />{" "}
      </Card>
      <Card>
        <FeedPosts topics={topics} />
      </Card>
    </>
  );
}

export default FeedList;
