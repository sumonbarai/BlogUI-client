import React from "react";
import { Link } from "react-router-dom";

const DashBoardSideBar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-3/4 md:w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/addBlog">AddBlog</Link>
        </li>
        <li>
          <Link to="/editBlog">EditBlog</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardSideBar;
