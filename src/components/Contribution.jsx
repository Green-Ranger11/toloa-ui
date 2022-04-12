import React, { useContext, useState } from "react";
import { LightBulbIcon } from "@heroicons/react/outline";
import ContributionContext from "../context/ContributionContext";
import { toast } from "react-toastify";

function Contribution() {
  const [contributionInputs, setContributionInputs] = useState({
    title: "",
    content: "",
    attachment: "",
  });
  const { addContribution, getTopics } = useContext(ContributionContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContributionInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContribution(contributionInputs);
    setContributionInputs({
      title: "",
      content: "",
      attachment: "",
    });
    getTopics();
    toast.success("Added new Contribution");
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-center px-3 pt-3 pb-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">
          Add a Contribution
        </h3>
        <LightBulbIcon className="text-gray-500 w-6" />
      </div>
      <div className="flex px-3 pb-3 text-sm text-gray-500">
        Fill out the form below with your contribution details; attach any files
        you may want to contribute and click Submit to save your contribution
      </div>
      <form className="mx-4" onSubmit={handleSubmit}>
        <div className="mb-6 ">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Title
          </label>
          <input
            className="appearance-none border border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder:text-sm border-gray-300"
            type="text"
            placeholder="Enter title"
            name="title"
            value={contributionInputs.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
            rows="4"
            placeholder="Enter more details"
            name="content"
            value={contributionInputs.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-500 text-sm font-bold mb-2">
            Add Attachments
          </label>
          <input
            className="appearance-none border border-solid border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder:text-sm "
            type="text"
            placeholder="Add attachment"
            name="attachment"
            value={contributionInputs.attachment}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-[#fff] w-[100%] py-2 mt-3 mb-3 rounded-md bg-indigo-500 hover:bg-indigo-400"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Contribution;
