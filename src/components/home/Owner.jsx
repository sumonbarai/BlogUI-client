import React from "react";
import SocialIcon from "../../shared/SocialIcon";

const Owner = () => {
  return (
    <div className="card w-full bg-base-100 rounded-none border-slate-400">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-full w-36 h-36 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h5>Hello, I'm Steven</h5>
        <p className="">
          Hi, I'm Stenven, a Florida native, who left my career in corporate
          wealth management six years ago to embark on a summer of soul
          searching that would change the course of my life forever.
        </p>
        <div className="flex justify-center justify-items-center">
          <strong className="py-1">Follow me : </strong>
          <div className="flex">
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
