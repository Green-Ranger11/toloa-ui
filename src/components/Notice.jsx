import React, { useState } from "react";
import { SpeakerphoneIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";

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
                <span className="flex items-center">
                  <SpeakerphoneIcon className="h-5 w-5 text-white " />
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="text-sm text-gray-100">
                      Click here to see an overview of discussions and
                      contributions
                    </span>
                  </p>
                </span>
              </div>
              <div>
                <XIcon
                  className="h-6 w-6 text-white"
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
