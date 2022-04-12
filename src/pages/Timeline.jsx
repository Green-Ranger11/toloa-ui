import React, { useState } from "react";
import Footer from "../components/Footer";
import PostTimeline from "../components/PostTimeline";
import Contribution from "../components/Contribution";
import Card from "../components/Card";
import HeadingHero from "../components/HeadingHero";
import Discussion from "../components/Discussion";

function Timeline() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      <div className="w-[80%] max-w-[100%] mx-auto grid sm:grid-cols-12 md-grid-cols-12 pt-6 gap-8 mt-[80px] ">
        <div className="rounded border-gray-300 border-2 border-dashed sm:col-span-8 col-span-12">
          <HeadingHero
            title="Climate Change and its Impacts for SIDS"
            description="Explore the effects of climate change and how it is directly impacting low-lying areas of the Pacific Region. "
          />
          <PostTimeline />
        </div>
        <div className="rounded border-gray-300 border-2 border-dashed sm:col-span-4 col-span-12">
          <Card>
            <ul className="text-sm font-medium text-center rounded-lg divide-x divide-gray-200 shadow sm:flex">
              <li className="w-full">
                <a
                  href="#"
                  // className="inline-block p-4 w-full text-slate-200 bg-teal-600 rounded-l-lg focus:ring-1 focus:ring-blue-300 active focus:outline-none "
                  className={`inline-block p-4 w-full rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-l-lg focus:ring-1 focus:ring-blue-300 active focus:outline-none ${
                    !toggleForm
                      ? "text-slate-200 bg-teal-600 "
                      : "bg-slate-300 text-gray-700 "
                  }`}
                  onClick={() => setToggleForm(false)}
                >
                  Contribution
                </a>
              </li>

              <li className="w-full">
                <a
                  href="#"
                  className={`inline-block p-4 w-full rounded-b-lg sm:rounded-b-none sm:rounded-r-lg  focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                    toggleForm
                      ? " text-slate-200 bg-teal-600"
                      : "bg-slate-300 text-gray-700"
                  }`}
                  onClick={() => setToggleForm(true)}
                >
                  Discussion
                </a>
              </li>
            </ul>
          </Card>
          {!toggleForm ? (
            <Card>
              <Contribution />
            </Card>
          ) : (
            <Card>
              <Discussion />
            </Card>
          )}
          {/* <Card>
            <Contribution />
          </Card>
          <Card>
            <Discussion />
          </Card> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Timeline;
