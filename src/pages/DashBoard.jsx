import React from "react";
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar";
import DashBoardTable from "../components/dashboard/DashBoardTable";

const DashBoard = () => {
  return (
    <div class="bg-[#F7F8F9]">
      <div class="container mx-auto px-3 py-3">
        <div class="drawer drawer-mobile h-[75vh]">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-row items-stretch justify-center">
            <label
              class="bg-base-100 p-2 swap swap-rotate lg:hidden"
              for="my-drawer-2"
            >
              <i class="fa-solid fa-house text-2xl cursor-pointer"></i>
            </label>
            <div class="overflow-x-auto w-full pl-1">
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
