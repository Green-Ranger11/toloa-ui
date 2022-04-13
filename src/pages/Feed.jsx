import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Menu from "../components/Menu";
import TrendingList from "../components/TrendingList";
import FeedList from "../components/FeedList";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Feed() {
  const { search } = useLocation();

  React.useEffect(() => {
    // FAI MEA PEPELO
    if (search.includes("auth")) {
      toast.success("You have successfully signed in!");
    }
  }, []);

  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-slate-100">
      <main className="flex-grow mt-[80px] ">
        <div className="w-[90%] max-w-[100%] mx-auto grid grid-cols-12 pt-3 gap-4  ">
          {/* MENU - LEFT */}
          <div className="hidden sm:block rounded  sm:col-span-3 col-span-12">
            <Card>
              <Menu />
            </Card>
          </div>

          {/* Main Feed - Middle */}
          <div className="rounded  sm:col-span-6 col-span-12">
            <FeedList />
          </div>

          {/* Search Bar/Trending list - Right */}
          <div className="rounded  sm:col-span-3 col-span-12">
            {/* <Card>
              <SearchBar />
            </Card> */}
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
