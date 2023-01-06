import React, { useEffect } from "react";
import AllBlogs from "../components/home/AllBlogs";
import ReadingHistory from "../components/home/ReadingHistory";
import Banner from "../components/home/Banner";

import Owner from "../components/home/Owner";
import { useDispatch, useSelector } from "react-redux";
import getBlogThunk from "../redux/blogPost/thunk/getBlogThunk";

const Home = () => {
  const { isLoading } = useSelector((state) => state.blogPost);
  const dispatch = useDispatch();
  // get blog data request
  useEffect(() => {
    dispatch(getBlogThunk());
  }, [dispatch]);
  return (
    <div>
      <Banner />
      <main>
        <div className="all-layout py-8 bg-[#F7F8F9]">
          <div className="container mx-auto px-3 flex gap-4 flex-col lg:flex-row">
            <div className="left-area w-full lg:w-3/4">
              {isLoading ? (
                <p className="text-center font-bold">...Loading</p>
              ) : (
                <AllBlogs />
              )}
            </div>
            <div className="right-area w-full lg:w-1/4">
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
