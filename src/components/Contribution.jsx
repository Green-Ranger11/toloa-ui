import React from "react";
import { LightBulbIcon } from "@heroicons/react/outline";

function Contribution() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center px-3 pt-3 pb-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">
          Add a Contribution
        </h3>
        <LightBulbIcon className="text-gray-500 w-6" />
      </div>
      <form>
        <button
          type="submit"
          className="text-[#fff] w-[100%] py-2 rounded-md bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Contribution;
