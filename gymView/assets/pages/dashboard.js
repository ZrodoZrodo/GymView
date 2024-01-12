import React from "react";
import DashboardNavbar from "../components/dashboardNavbar";
import Sidebar from "../components/sideBar";
import { DashboardInfo } from "../components/dashboardInfo";
import AddTraining from "../components/addTraining";


export const Dashboard = () => {


  return (
    <div className="flex flex-wrap max-h-screen w-full min-h-screen">
      <DashboardNavbar></DashboardNavbar>
      <div className="flex flex-nowrap min-h-screen w-full ">
        <Sidebar></Sidebar>
        <AddTraining />
        <DashboardInfo />
      </div>
    </div>
  );
};
