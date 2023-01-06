import React from "react";
import { useSelector } from "react-redux";
import AllReadyRead from "./AllReadyRead";

const ReadingHistory = () => {
  const { isReading } = useSelector((state) => state.blogPost);
  // what content render
  let content;
  if (isReading.length) {
    content = isReading.map((blog) => (
      <AllReadyRead key={blog._id} blog={blog} />
    ));
  } else {
    content = <p className="text-center font-bold p-3">No content available</p>;
  }
  return (
    <div className="all-content pt-5">
      <h2 className="p-4">All reading content</h2>
      <hr />
      <div className="max-h-[500px] overflow-auto">{content}</div>
    </div>
  );
};

export default ReadingHistory;
