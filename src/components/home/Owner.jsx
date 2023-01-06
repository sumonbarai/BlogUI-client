import React from "react";

const Owner = () => {
  return (
    <div class="card w-full bg-base-100 rounded-none border-slate-400">
      <figure class="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          class="rounded-full w-36 h-36 object-cover"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h5>Hello, I'm Steven</h5>
        <p class="">
          Hi, I'm Stenven, a Florida native, who left my career in corporate
          wealth management six years ago to embark on a summer of soul
          searching that would change the course of my life forever.
        </p>
        <div class="flex justify-center justify-items-center">
          <strong class="py-1">Follow me : </strong>
          <div class="flex">
            <div class="m-1 w-7 h-7 rounded-full flex text-white bg-[#3b5999] cursor-pointer">
              <i class="fa-brands fa-facebook-f m-auto"></i>
            </div>
            <div class="m-1 w-7 h-7 rounded-full flex text-white bg-[#55acee] cursor-pointer">
              <i class="fa-brands fa-twitter m-auto"></i>
            </div>
            <div class="m-1 w-7 h-7 rounded-full flex text-white bg-[#bd081c] cursor-pointer">
              <i class="fa-brands fa-youtube m-auto"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
