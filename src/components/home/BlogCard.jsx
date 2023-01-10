import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addReadingAction } from "../../redux/blogPost/actions";
import { categoryAction } from "../../redux/filter/actions";
import dayCalculator from "../../utilites/dayCalculator";

const BlogCard = ({ blog }) => {
  const { isReading } = useSelector((state) => state.blogPost);
  const { category: filterCategory } = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    title,
    timestamp,
    category,
    description,
    duration,
    image,
    views,
    _id,
  } = blog;
  const handleClick = () => {
    navigate(`/blog/${_id}`);
    dispatch(addReadingAction(blog));
  };
  const isClicked = isReading.find((blog) => blog._id === _id);

  return (
    <div className="bg-base-100 shadow-xl rounded-t-lg">
      <figure>
        <img className="w-full rounded-t-lg" src={image} alt="photos" />
      </figure>
      <div className={`card-body ${isClicked ? "text-red-400" : ""}`}>
        <div className="card-actions justify-start">
          <div
            className={`badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer ${
              filterCategory === category && "bg-[#5869DA] text-white"
            }`}
            onClick={() => dispatch(categoryAction(category))}
          >
            {category}
          </div>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          <h2 className="card-title capitalize">{title}</h2>
          <p>{description.slice(0, 100)}...</p>
          <div className="text-slate-400">
            <span>{dayCalculator(timestamp)}</span>
            <span className="px-1">.</span>
            <span>{duration} min read</span>
            <span className="px-1">.</span>
            <span>{views}k view</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
