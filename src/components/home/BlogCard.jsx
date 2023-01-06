import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const {
    author,
    category,
    description,
    duration,
    image,
    uploadDate,
    views,
    _id,
  } = blog;
  console.log(blog);
  return (
    <div className="bg-base-100 shadow-xl rounded-t-lg">
      <figure>
        <img className="w-full rounded-t-lg" src={image} alt="photos" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          <div className="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
            {category}
          </div>
        </div>
        <Link to={"/blog"}>
          <h2 className="card-title">Foolproof Spatchcock Turkey</h2>
          <p>{description.slice(0, 150)}</p>
          <div className="text-slate-400">
            <span>{uploadDate}</span>
            <span className="px-1">.</span>
            <span>{duration} min read</span>
            <span className="px-1">.</span>
            <span>{views}k view</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
