import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Menu from "../components/Menu";
import TrendingList from "../components/TrendingList";
import FeedList from "../components/FeedList";
import SearchBar from "../components/SearchBar";

function Feed() {
  return (
    <div className="flex flex-col h-full min-h-full">
      <main className="flex-grow mt-[80px] bg-slate-300">
        <div className="container flex flex-wrap justify-center mx-auto mb-10">
          <div className="w-full h-full px-2 mb-4 bg-transparent sm:w-1/2 md:w-1/5">
            <Card>
              <Menu />
            </Card>
          </div>
          <div className="w-full sm:w-1/2 md:w-[40%] mb-4 px-2 h-full">
            <FeedList />
          </div>
          <div className="w-full sm:w-1/2 md:w-[25%] mb-4 px-2 h-full">
            <Card>
              <SearchBar />
            </Card>
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
