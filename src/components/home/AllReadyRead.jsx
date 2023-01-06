import React from "react";
import { Link } from "react-router-dom";

const AllReadyRead = ({ blog }) => {
  const { duration, image, uploadDate, views, _id } = blog;
  return (
    <Link to={`/blog/${_id}`}>
      <div className="card card-side bg-base-100 rounded-none my-2 cursor-pointer">
        <div className="p-4">
          <h2 className="">New movie is released!</h2>
          <div className="text-slate-400">
            <span>{uploadDate}</span>
            <span className="px-1">.</span>
            <span>{duration} min read</span>
            <span className="px-1">.</span>
            <span>{views}k view</span>
          </div>
        </div>
        <figure>
          <img
            className="w-32 h-32 rounded object-cover"
            src={image}
            alt="images"
          />
        </figure>
      </div>
    </Link>
  );
};

export default AllReadyRead;
