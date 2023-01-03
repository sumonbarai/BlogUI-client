import React from "react";

const Blog = () => {
  return (
    <div class="bg-base-100 shadow-xl rounded-t-lg">
      <figure>
        <img
          class="w-full rounded-t-lg"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <div class="card-actions justify-start">
          <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
            Fashion
          </div>
          <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
            Products
          </div>
        </div>
        <h2 class="card-title">Foolproof Spatchcock Turkey</h2>
        <p>
          Want a beautiful roast turkey in under two hours? Spatchcock turkey is
          the answer flattening out the bird gives you juicy meat and crispy
          skin, every time.
        </p>
        <div class="text-slate-400">
          <span>17 August</span>
          <span>.</span>
          <span>12 min read</span>
          <span>.</span>
          <span>2.1k view</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
