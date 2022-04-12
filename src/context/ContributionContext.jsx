import { createContext, useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../data/baseUrl";

const ContributionContext = createContext(null);

export const ContributionProvider = ({ children }) => {
  const [contribution, setContribution] = useState([]);
  const [topic, setTopic] = useState([{ title: "this is title" }]);
  console.log("test1");

  useEffect(() => {
    getTopics();
  }, []);

  // Get all Contributions
  // const getContributions = async () => {
  //   const response = await axios.get("http://localhost:5000/contribution");

  //   if (response) {
  //     setContribution(response.data);
  //     console.log(response.data);
  //   }
  // };

  // Get all Topics
  const getTopics = async () => {
    const id = 1;
    const response = await axios.get(baseUrl + "/topic/1");

    if (response) {
      setTopic(response.data);
    }
  };

  // Add a Contribution
  const addContribution = async (newContribution) => {
    newContribution.createdBy = 1;
    newContribution.topicId = 1;
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
    newDiscussion.topicId = 1;
    newDiscussion.createdBy = 1;
    console.log(newDiscussion);
    const response = await axios.post(baseUrl + "/discussion", newDiscussion);
  };

  return (
    <ContributionContext.Provider
      value={{ topic, addContribution, addDiscussion, getTopics }}
    >
      {children}
    </ContributionContext.Provider>
  );
};

export default ContributionContext;
