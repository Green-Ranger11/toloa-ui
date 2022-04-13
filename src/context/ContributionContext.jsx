import { createContext, useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../data/baseUrl";

const ContributionContext = createContext(null);

export const ContributionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [contribution, setContribution] = useState([]);
  const [topic, setTopic] = useState([{ title: "this is title" }]);
  const [topicId, setTopicId] = useState(0);

  useEffect(() => {
    if (topicId !== 0) {
      getTopics();
    }
  }, []);

  // Set Topic ID
  const setTopicID = (id) => {
    setTopicId(() => parseInt(id));
  };

  const getCurrentUserId = () => {
    if (user) return user?.id;
    const userId = localStorage.getItem("userId");
    if (!userId) return 1;
    return Number(userId);
  };

  const login = (user) => {
    if (user && user?.id) {
      localStorage.setItem("userId", user.id);
      setUser(user);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
  };

  // Get all Topics
  const getTopics = async () => {
    const response = await axios.get(baseUrl + `/topic/${topicId}`);

    if (response) {
      setTopic(response.data);
    }
  };

  // Add a Contribution
  const addContribution = async (newContribution) => {
    newContribution.createdBy = getCurrentUserId();
    newContribution.topicId = topicId;
    console.log("User ID: ", newContribution.topicId);
    const response = await axios.post(
      baseUrl + "/contribution",
      newContribution
    );
    if (response) {
      setContribution((prevContribution) => [
        ...prevContribution,
        response.data,
      ]);
    }
  };

  // Add a Discussion
  const addDiscussion = async (newDiscussion) => {
    newDiscussion.topicId = topicId;
    newDiscussion.createdBy = getCurrentUserId();
    console.log(newDiscussion);
    const response = await axios.post(baseUrl + "/discussion", newDiscussion);
  };

  return (
    <ContributionContext.Provider
      value={{
        topic,
        topicId,
        addContribution,
        addDiscussion,
        getTopics,
        setTopicID,
        login,
        logout,
        getCurrentUserId,
      }}
    >
      {children}
    </ContributionContext.Provider>
  );
};

export default ContributionContext;
