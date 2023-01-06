import React from "react";
import AllReadyRead from "./AllReadyRead";

const ReadingHistory = () => {
  return (
    <div className="all-content pt-5">
      <h2 className="p-4">All reading content</h2>
      <hr />
      <div className="max-h-[500px] overflow-auto">
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

export default ReadingHistory;
