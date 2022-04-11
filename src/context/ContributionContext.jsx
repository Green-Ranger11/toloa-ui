import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ContributionContext = createContext();

export const ContributionProvider = ({ children }) => {
  const [contribution, setContribution] = useState([]);

  useEffect(() => {
    getContributions();
  }, []);

  // Get all Contributions
  const getContributions = async () => {
    const response = await axios.get("http://localhost:5000/contribution");

    if (response) {
      setContribution(response.data);
    }
  };

  // Add a Contribution
  const addContribution = async (newContribution) => {
    newContribution.createdBy = 1;
    newContribution.topicId = 1;
    const response = await axios.post(
      "http://localhost:5000/contribution",
      newContribution
    );
    if (response) {
      setContribution((prevContribution) => [...prevContribution, response.data]);
    }
  };

  return (
    <ContributionContext.Provider value={{ contribution, addContribution }}>
      {children}
    </ContributionContext.Provider>
  );
};

export default ContributionContext;
