import React from "react";
import AllBlogs from "../components/home/AllBlogs";
import ReadingHistory from "../components/home/ReadingHistory";
import Banner from "../components/home/Banner";

import Owner from "../components/home/Owner";

const Home = () => {
  return (
    <div>
      <Banner />
      <main>
        <div class="all-layout py-8 bg-[#F7F8F9]">
          <div class="container mx-auto px-3 flex gap-4 flex-col lg:flex-row">
            <div class="left-area w-full lg:w-3/4">
              <AllBlogs />
            </div>
            <div class="right-area w-full lg:w-1/4">
              <Owner />
              <ReadingHistory />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
