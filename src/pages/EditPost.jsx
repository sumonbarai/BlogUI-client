import React from "react";
import DashBoardForm from "../components/dashboard/DashBoardForm";
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar";

const EditPost = () => {
  return (
    <main class="bg-[#F7F8F9]">
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
            <DashBoardForm action="update" />
          </div>
          <DashBoardSideBar />
        </div>
      </div>
    </main>
  );
};

export default EditPost;
