import React from "react";
import banner from "../assets/img/banner.jpeg";

const Banner = () => {
  return (
    <div class="bg-[#F1F2F3]">
      <div class="container mx-auto hero">
        <div class="hero-content flex-col lg:flex-row-reverse min-h-[500px]">
          <div class="lg:px-1 xl:px-16">
            <img
              alt="banner photos"
              src={banner}
              class="rounded-full shadow-2xl w-96 h-96"
            />
          </div>
          <div class="lg:px-1 xl:px-16">
            <span>food blogger</span>
            <h2 class="text-6xl font-semibold">
              Hello, I'm <span class="text-[#5869da]">Steven</span>
            </h2>
            <h3 class="text-5xl font-medium">Welcome to my blog</h3>
            <h5 class="text-xl text-[#687385]">
              Don't miss out on the latest news about Travel tips, <br />
              Hotels review, Food guide...
            </h5>
            <div class="form-control pt-3">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  class="input input-bordered"
                />
                <button class="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
