import React from "react";
import ContributionCard from "../components/dashboard/ContributionCard";
import DiscussionCard from "../components/dashboard/DiscussionCard";
import CommentCard from "../components/dashboard/CommentCard";
import DirectCard from "../components/dashboard/DirectCard";
import RealTimeCard from "../components/dashboard/RealTimeCard";
import CountryCard from "../components/dashboard/CountryCard";
import MostActiveCard from "../components/dashboard/MostActiveCard";
import Footer from "../components/Footer";
function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden mt-[60px] max-w-[80%] mx-auto">
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
                {/* Line chart (Acme Plus) */}
                <ContributionCard />
                {/* Line chart (Acme Advanced) */}
                <DiscussionCard />
                {/* Line chart (Acme Professional) */}
                <CommentCard />
                {/* Bar chart (Direct vs Indirect) */}
                <DirectCard />
                {/* Line chart (Real Time Value) */}
                <RealTimeCard />
                {/* Doughnut chart (Top Countries) */}
                <CountryCard />
                {/* Table (Top Channels) */}
                <MostActiveCard />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
