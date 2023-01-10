import React from "react";
import { NavLink } from "react-router-dom";
import SocialIcon from "../shared/SocialIcon";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
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
        <div className="grid grid-flow-col gap-4">
          <SocialIcon />
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Blog UI Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
