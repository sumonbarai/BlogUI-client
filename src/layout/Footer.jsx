import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div class="grid grid-flow-col gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/travel">Travel</NavLink>
        </li>
        <li>
          <NavLink to="/foods">Foods</NavLink>
        </li>
        <li>
          <NavLink to="/review">Review</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
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
      <div>
        <p>Copyright © 2023 - All right reserved by Blog UI Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
