import React from "react";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import Card from "../components/partials/Card";
import Menu from "../components/partials/Menu";
import TrendingList from "../components/partials/TrendingList";
import FeedList from "../components/partials/FeedList";

function Feed() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow mt-[80px]">
        <div className="flex flex-wrap -mb-4 mx-auto container justify-center bg-slate-300">
          <div className="w-full sm:w-1/2 md:w-1/5 mb-4 px-2 h-screen bg-transparent">
            <Card>
              <Menu />
            </Card>
          </div>
          <div className="w-full sm:w-1/2 md:w-[40%] mb-4 px-2 h-screen">
            <FeedList />
          </div>
          <div className="w-full sm:w-1/2 md:w-[25%] mb-4 px-2 h-screen">
            <Card>
              <TrendingList />
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Feed;
