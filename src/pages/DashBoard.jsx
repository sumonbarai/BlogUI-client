import React from "react";
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar";
import DashBoardTable from "../components/dashboard/DashBoardTable";

const DashBoard = () => {
  return (
    <div className="bg-[#F7F8F9]">
      <div className="container mx-auto px-3 py-3">
        <div className="drawer drawer-mobile h-[75vh]">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-row items-stretch justify-center">
            <label
              className="bg-base-100 p-2 swap swap-rotate lg:hidden"
              for="my-drawer-2"
            >
              <i className="fa-solid fa-house text-2xl cursor-pointer"></i>
            </label>
            <div className="overflow-x-auto w-full pl-1">
              <DashBoardTable />
            </div>
          </div>
          <DashBoardSideBar />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
