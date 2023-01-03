import React from "react";
import AllReadyRead from "./AllReadyRead";

const AllReadingContent = () => {
  return (
    <div class="all-content pt-5">
      <h2 class="p-4">All reading content</h2>
      <hr />
      <div class="max-h-[500px] overflow-auto">
        <AllReadyRead />
        <AllReadyRead />
        <AllReadyRead />
        <AllReadyRead />
        <AllReadyRead />
        <AllReadyRead />
        <AllReadyRead />
      </div>
    </div>
  );
};

export default AllReadingContent;
