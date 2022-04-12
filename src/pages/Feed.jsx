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
    <div className="flex flex-col h-full min-h-full">
      <main className="flex-grow mt-[80px] ">
        {/* <div className="container flex flex-wrap justify-center mx-auto mb-10">
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
        </div> */}

        <div className="w-[90%] max-w-[100%] mx-auto grid grid-cols-12 pt-3 gap-4  ">
          <div className="rounded border-gray-300 border-2 border-dashed sm:col-span-3 col-span-12">
            <Card>
              <Menu />
            </Card>
          </div>
          <div className="rounded border-gray-300 border-2 border-dashed sm:col-span-6 col-span-12">
            <Card>
              <FeedList />
            </Card>
          </div>
          <div className="rounded border-gray-300 border-2 border-dashed sm:col-span-3 col-span-12">
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
