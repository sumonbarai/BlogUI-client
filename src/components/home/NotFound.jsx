import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[75vh] w-full bg-[#F1F2F3] flex text-center">
      <div className="m-auto">
        <div className="top font-bold text-9xl text-white opacity-95">404</div>
        <div className="down">
          <h3 className="capitalize text-xl font-bold">Page Not Found</h3>
          <p className="capitalize text-lg">
            Why don't you try one of these pages instead?
          </p>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
