import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostTimeline from "../components/PostTimeline";
import Contribution from "../components/Contribution";
import Card from "../components/Card";
import HeadingHero from "../components/HeadingHero";
import { ContributionProvider } from "../context/ContributionContext";
import Discussion from "../components/Discussion";

function Timeline() {
  return (
    <>
      <div className="w-[80%] max-w-[100%] mx-auto grid sm:grid-cols-12 md-grid-cols-12 pt-6 gap-8 mt-[80px] ">
        <div className="rounded border-gray-300 border-2 border-dashed col-span-8">
          <HeadingHero
            title="Climate Change and its Impacts for SIDS"
            description="Explore the effects of climate change and how it is directly impacting low-lying areas of the Pacific Region. "
          />
          <PostTimeline />
        </div>
        <div className="rounded border-gray-300 border-2 border-dashed col-span-4">
          <Card>
            <Contribution />
          </Card>
          <Card>
            <Discussion />
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Timeline;
