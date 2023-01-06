import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import img from "../assets/img/banner.jpeg";

const Blog = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  const {
    author,
    category,
    description,
    duration,
    image,
    uploadDate,
    views,
    _id,
  } = data[0] || {};
  return (
    <main className="bg-[#F7F8F9]">
      <div className="container mx-auto">
        <h2 className="text-5xl p-6 max-w-5xl text-center mx-auto">
          The effect of livestock on the physiological condition of roe deer is
          modulated by habitat quality
        </h2>

        <div className="flex justify-between items-center py-12 px-2 sm:px-8 lg:px-52">
          <div className="mb-5 flex items-center">
            <Link className="pr-2" href="#">
              <img
                className="w-10 h-10 rounded-full"
                src={image}
                alt="images"
              />
            </Link>
            <div>
              <Link className="pl-2 block">
                <span className="">{author}</span>
              </Link>
              <ul className="list-disc list-inside flex">
                <li className="text-slate-400 px-1">{uploadDate}</li>
                <li className="text-slate-400 px-1">{duration}mins read</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="uppercase">
              category :
              <span className="bg-[#3b5999] p-1 text-white">{category}</span>
            </h3>
          </div>
        </div>
        <div className="text-center p-8">
          <img className="w-2/4 mx-auto rounded-lg" src={image} alt="images" />
        </div>

        <p className="text-justify text-lg p-8">{description}</p>
      </div>
    </main>
  );
};

export default Blog;
