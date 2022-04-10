import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Menu from "../components/Menu";
import TrendingList from "../components/TrendingList";
import FeedList from "../components/FeedList";

function Feed() {
  return (
    <div className="flex flex-col min-h-full h-full">
      <main className="flex-grow mt-[80px] bg-slate-300">
        <div className="flex flex-wrap mb-10 mx-auto container justify-center">
          <div className="w-full sm:w-1/2 md:w-1/5 mb-4 px-2 h-full bg-transparent">
            <Card>
              <Menu />
            </Card>
          </div>
          <div className="w-full sm:w-1/2 md:w-[40%] mb-4 px-2 h-full">
            <FeedList />
          </div>
          <div className="w-full sm:w-1/2 md:w-[25%] mb-4 px-2 h-full">
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
