import React from "react";

import DashBoardSideBar from "../components/dashboard/DashBoardSideBar";
import EditForm from "../components/dashboard/EditForm";

const EditBlog = () => {
  return (
    <main className="bg-[#F7F8F9]">
      <div className="container mx-auto px-3 py-3">
        <div className="drawer drawer-mobile h-[75vh]">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-row items-stretch justify-center">
            <label
              className="bg-base-100 p-2 swap swap-rotate lg:hidden"
              htmlFor="my-drawer-2"
            >
              <i className="fa-solid fa-house text-2xl cursor-pointer"></i>
            </label>
            <EditForm />
          </div>
          <DashBoardSideBar />
        </div>
      </div>
    </main>
  );
};

export default EditBlog;
