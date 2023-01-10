import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAction, sortAction } from "../../redux/filter/actions";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const AllBlogs = () => {
  const { isLoading, error, blogs } = useSelector((state) => state.blogPost);
  const { sort, category, input } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  console.log(blogs);

  // button enable or disable
  let isShow;
  if (category || input) {
    isShow = true;
  } else {
    isShow = false;
  }
  // sorting redux state
  const handleSorting = () => {
    if (sort === "least_upload") {
      dispatch(sortAction("first_upload"));
    } else {
      dispatch(sortAction("least_upload"));
    }
  };
  // sorting function
  const blogSorting = (a, b) => {
    if (sort === "first_upload") {
      return Number(a.timeStamp) - Number(b.timeStamp);
    } else if (sort === "least_upload") {
      return Number(b.timeStamp) - Number(a.timeStamp);
    }
    return Number(a.timeStamp) - Number(b.timeStamp);
  };

  const sortByCategory = (blog) => {
    if (category) {
      if (blog.category === category) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  };

  const sortByInput = (blog) => {
    if (input) {
      if (blog.title.toLowerCase().includes(input.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  };
  // what content render
  let content;
  if (isLoading) {
    content = <p className="text-center font-bold"></p>;
  } else if (!isLoading && error) {
    content = <p>there some error in server</p>;
  } else if (!isLoading && !error && blogs.length <= 0) {
    content = <p>No Content available</p>;
  } else if (!isLoading && !error && blogs.length > 0) {
    content = blogs
      .sort(blogSorting)
      .filter(sortByCategory)
      .filter(sortByInput)
      .map((blog) => <BlogCard key={blog._id} blog={blog} />);
  }
  return (
    <>
      <div className="flex justify-between py-8">
        <h3 className="font-bold uppercase">My Blogs</h3>
        <div>
          <button
            className="bg-[#5869DA] mx-3 btn btn-sm border-none"
            disabled={!isShow}
            onClick={() => dispatch(clearAction())}
          >
            Clear Filter
          </button>
          <select
            className="select select-bordered select-xs w-30 max-w-xs"
            value={sort}
            onChange={handleSorting}
          >
            <option value={"least_upload"}>latest upload</option>
            <option value={"first_upload"}>First Upload</option>
          </select>
        </div>
      </div>

      <div className="all-card grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {content}
      </div>
      <Pagination />
    </>
  );
};

export default AllBlogs;
