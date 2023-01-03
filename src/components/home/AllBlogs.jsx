import React from "react";
import Blog from "./Blog";
import Pagination from "./Pagination";

const AllBlogs = () => {
  return (
    <>
      <div class="flex justify-between py-8">
        <h3 class="font-bold uppercase">UnReading Blog</h3>
        <select class="select select-bordered select-xs w-30 max-w-xs">
          <option selected>latest upload</option>
          <option>First Upload</option>
        </select>
      </div>

      <div class="all-card grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
      <Pagination />
    </>
  );
};

export default AllBlogs;
