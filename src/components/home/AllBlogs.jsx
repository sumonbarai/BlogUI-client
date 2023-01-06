import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const AllBlogs = () => {
  const { isLoading, error, blogs } = useSelector((state) => state.blogPost);
  // what content render
  let content;
  if (isLoading) {
    content = <p>No content available</p>;
  } else if (!isLoading && error) {
    content = <p>there some error in server</p>;
  } else if (!isLoading && !error && blogs.length > 0) {
    content = blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />);
  }
  return (
    <>
      <div className="flex justify-between py-8">
        <h3 className="font-bold uppercase">UnReading Blog</h3>
        <select className="select select-bordered select-xs w-30 max-w-xs">
          <option>latest upload</option>
          <option>First Upload</option>
        </select>
      </div>

      <div className="all-card grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {content}
      </div>
      <Pagination />
    </>
  );
};

export default AllBlogs;
