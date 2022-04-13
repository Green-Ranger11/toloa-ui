import React, { useState } from "react";
import { SpeakerphoneIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Notice() {
  const [showNotice, setShowNotice] = useState(true);

  const handleNoticeClick = () => {
    setShowNotice(!showNotice);
  };

  return (
    <>
      {showNotice && (
        <div className="bg-indigo-600 m-3 py-2 px-1 rounded-md">
          <div className="max-w-7xl mx-auto py-3 px-0 sm:px-3 lg:px-2">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex items-center overflow-auto  ">
                  <SpeakerphoneIcon className="h-5 w-5 text-white hidden sm:block" />

                  <p className="ml-3 font-medium text-white truncate">
                    <Link to="/dashboard">
                      Click here to see a Collaboration Graph - Overview
                    </Link>
                  </p>
                </span>
              </div>

              <div>
                <XIcon
                  className="h-6 w-6 text-white hidden sm:block"
                  onClick={handleNoticeClick}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Notice;
