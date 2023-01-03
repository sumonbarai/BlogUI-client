import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      {/* <!-- top nav bar start --> */}
      <div class="top-nav-bar container mx-auto">
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <Link to="/" class="uppercase text-2xl font-bold">
              Blog UI
            </Link>
          </div>

          <div class="navbar-end">
            <Link to="/" class="btn btn-sm btn-ghost mx-px">
              Sign In
            </Link>
            <Link to="/" class="btn btn-sm bg-[#5869da] border-0 mx-px">
              Sing Up
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- top nav bar end --> */}
      <hr />
      {/* <!-- main nav bar start --> */}
      <div class="container mx-auto">
        <div class="navbar bg-base-100">
          <div class="navbar-start lg:hidden">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
          <div class="navbar-start hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
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
          <div class="navbar-end">
            <div class="bg-red-500 m-1 w-7 h-7 rounded-full flex text-white bg-[#3b5999] cursor-pointer">
              <i class="fa-brands fa-facebook-f m-auto"></i>
            </div>
            <div class="bg-red-500 m-1 w-7 h-7 rounded-full flex text-white bg-[#55acee] cursor-pointer">
              <i class="fa-brands fa-twitter m-auto"></i>
            </div>
            <div class="bg-red-500 m-1 w-7 h-7 rounded-full flex text-white bg-[#bd081c] cursor-pointer">
              <i class="fa-brands fa-youtube m-auto"></i>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- main nav bar end --> */}
    </header>
  );
};

export default NavBar;
