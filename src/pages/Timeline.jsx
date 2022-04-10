import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostTimeline from "../components/PostTimeline";
import Contribution from "../components/Contribution";
import Card from "../components/Card";

function Timeline() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden  bg-slate-100">
      <Header />

      <div className="w-[80%] max-w-[100%] mx-auto grid sm:grid-cols-12 md-grid-cols-12 pt-6 gap-8 mt-[80px] ">
        <div className="rounded border-gray-300 border-2 border-dashed col-span-8">
          <PostTimeline />
        </div>
        <div className="rounded border-gray-300 border-2 border-dashed col-span-4">
          <Card>
            <Contribution />
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Timeline;
