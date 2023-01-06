import React from "react";

const AllReadyRead = () => {
  return (
    <div className="card card-side bg-base-100 rounded-none my-2">
      <div className="p-4">
        <h2 className="">New movie is released!</h2>
        <div className="text-slate-400">
          <span>17 August</span>
          <span>.</span>
          <span>12 min read</span>
          <span>.</span>
          <span>2.1k view</span>
        </div>
      </div>
      <figure>
        <img
          className="w-32 h-32 rounded object-cover"
          src="https://placeimg.com/200/280/arch"
          alt="Movie"
        />
      </figure>
    </div>
  );
};

export default AllReadyRead;
