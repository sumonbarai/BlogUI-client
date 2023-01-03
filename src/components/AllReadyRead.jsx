import React from "react";

const AllReadyRead = () => {
  return (
    <div class="card card-side bg-base-100 rounded-none my-2">
      <div class="p-4">
        <h2 class="">New movie is released!</h2>
        <div class="text-slate-400">
          <span>17 August</span>
          <span>.</span>
          <span>12 min read</span>
          <span>.</span>
          <span>2.1k view</span>
        </div>
      </div>
      <figure>
        <img
          class="w-32 h-32 rounded object-cover"
          src="https://placeimg.com/200/280/arch"
          alt="Movie"
        />
      </figure>
    </div>
  );
};

export default AllReadyRead;
