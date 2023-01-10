import React, { useState } from "react";
import banner from "../../assets/img/banner.jpeg";
import Typical from "react-typical";
import { useDispatch } from "react-redux";
import { InputKeywordAction } from "../../redux/filter/actions";

const Banner = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = () => {
    dispatch(InputKeywordAction(input));
    setInput("");
  };

  return (
    <div className="bg-[#F1F2F3]">
      <div className="container mx-auto hero">
        <div className="hero-content flex-col lg:flex-row-reverse min-h-[500px]">
          <div className="lg:px-1 xl:px-16">
            <img
              alt="banner photos"
              src={banner}
              className="rounded-full shadow-2xl w-96 h-96"
            />
          </div>
          <div className="lg:px-1 xl:px-16">
            <span className="text-[#5869DA]">
              <span className="text-black">I'm </span>
              <Typical
                steps={["Food Blogger !", 2500, "Travel Blogger !", 2500]}
                loop={Infinity}
                wrapper="b"
              />
            </span>
            <h2 className="text-6xl font-semibold">
              Hello, I'm <span className="text-[#5869da]">Steven</span>
            </h2>
            <h3 className="text-5xl font-medium">Welcome to my blog</h3>
            <h5 className="text-xl text-[#687385] pt-3">
              Don't miss out on the latest news about Travel tips, <br />
              Hotels review, Food guide...
            </h5>
            <div className="form-control pt-3">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-square" onClick={handleInput}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
