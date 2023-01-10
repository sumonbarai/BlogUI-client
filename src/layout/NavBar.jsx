import React from "react";
import { Link, NavLink } from "react-router-dom";
import SocialIcon from "../shared/SocialIcon";

const NavBar = () => {
  return (
    <header>
      {/* <!-- top nav bar start --> */}
      <div className="top-nav-bar container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link to="/" className="uppercase text-2xl font-bold">
              Blog UI
            </Link>
          </div>

          <div className="navbar-end">
            <Link to="/" className="btn btn-sm btn-ghost mx-px">
              Sign In
            </Link>
            <Link to="/" className="btn btn-sm bg-[#5869da] border-0 mx-px">
              Sing Up
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- top nav bar end --> */}
      <hr />
      {/* <!-- main nav bar start --> */}
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
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
              </ul>
            </div>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
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
            </ul>
          </div>
          <div className="navbar-end">
            <SocialIcon />
          </div>
        </div>
      </div>
      {/* <!-- main nav bar end --> */}
    </header>
  );
};

export default NavBar;
