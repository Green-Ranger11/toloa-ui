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
      console.log(response.data);
    }
  };

  // Add a Contribution

  // Edit a contribution

  return (
    <ContributionContext.Provider value={{ contribution }}>
      {children}
    </ContributionContext.Provider>
  );
};

export default ContributionContext;
