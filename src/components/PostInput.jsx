import React from "react";
import axios from "axios";
import baseUrl from "../data/baseUrl";
import SendIcon from "../images/send-icon.png";
import { toast } from "react-toastify";
import ContributionContext from "../context/ContributionContext";

const initState = {
  title: "",
  description: "",
};

function FeedPost({ addTopic }) {
  const [formData, setFormData] = React.useState(initState);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { getCurrentUserId } = React.useContext(ContributionContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const userId = getCurrentUserId();
    const { title, description } = formData;
    if (!title || !description) {
      toast.error("Please fill in all fields!");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(baseUrl + "/topic", {
        title,
        description,
        createdBy: userId,
      });
      if (response.status === 201 || response.status === 200) {
        toast.success("Added New Topic");
        addTopic(response.data);
        setFormData({ title: "", description: "" });
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative m-3 py-2 px-1 ">
        <div className="py-2 pl-1">
          <h3 className="text-1xl font-bold text-gray-500 uppercase">
            Start a Discussion
          </h3>
        </div>
        <input
          name="title"
          onChange={handleChange}
          value={formData.title}
          className="w-full mb-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:text-gray-400"
          type="text"
          placeholder="Create a Topic"
        />
        <textarea
          type="text"
          id="large-input"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add a description"
          className="block h-[100px] w-[100%] text-gray-900 bg-gray-100 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500  placeholder:text-sm placeholder:text-gray-400 "
        ></textarea>

        <div className="absolute bottom-2 right-2 w-[100%] px-3 pb-2 flex justify-end items-center">
          <button onClick={handleSubmit} disabled={isSubmitting}>
            <img
              src={SendIcon}
              alt="Submit button"
              className={`w-8 h-8 p-1 pr-[7px] pt-[6px] overflow-hidden rounded-full ${
                isSubmitting ? "bg-gray-700" : "bg-blue-500"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default FeedPost;
