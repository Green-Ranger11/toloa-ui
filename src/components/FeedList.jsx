import React, { useContext, useEffect } from "react";
import Card from "./Card";
import FeedPosts from "./FeedPosts";
import Notice from "./Notice";
import PostInput from "./PostInput";
import axios from "axios";
import { format, parseISO } from "date-fns";
import baseUrl from "../data/baseUrl";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import ContributionContext from "../context/ContributionContext";

function FeedList() {
  const [topics, setTopics] = React.useState([]);
  const { searchKey } = useContext(ContributionContext);

  useEffect(() => {
    filterList();
  }, [searchKey]);

  const addTopic = (topic) => {
    setTopics([
      {
        id: topic.id,
        title: topic.title,
        description: topic.description,
        author: `${topic?.createdBy?.firstName} ${topic?.createdBy?.lastName}`,
        date: format(parseISO(topic.createdAt), "d MMM"),
      },
      ...topics,
    ]);
  };

  const filterList = () => {
    const filteredTopics = topics.filter((x) =>
      x.title.toLowerCase().includes(searchKey.toLowerCase())
    );

    setTopics(filteredTopics);
  };

  React.useEffect(() => {
    const fetchTopics = async () => {
      const result = await axios.get(baseUrl + "/topic");
      const fetchedTopics = result.data.map((topic) => {
        return {
          id: topic.id,
          title: topic.title,
          description: topic.description,
          author: `${topic?.createdBy?.firstName} ${topic?.createdBy?.lastName}`,
          date: format(parseISO(topic.createdAt), "d MMM"),
        };
      });
      setTopics(fetchedTopics);
    };

    fetchTopics();
  }, []);

  return (
    <>
      <Card>
        <PostInput addTopic={addTopic} />
      </Card>

      <Notice />

      <Card>
        <FeedPosts topics={topics} />
      </Card>
    </>
  );
}

export default FeedList;
