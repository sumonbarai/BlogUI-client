import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Notis from "./Notis";

const Main = () => {
  return (
    <div>
      <Notis />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
