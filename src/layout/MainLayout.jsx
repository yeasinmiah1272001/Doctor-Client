import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
