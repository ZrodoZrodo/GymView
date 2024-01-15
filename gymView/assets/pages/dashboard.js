import React from "react";
import DashboardNavbar from "../components/dashboardNavbar";
import Sidebar from "../components/sideBar";
import { DashboardInfo } from "../components/dashboardInfo";
import { TrainingInfo } from "../components/trainingInfo";
import { TrainingList } from "../components/trainingList";
import { useCookies } from "react-cookie";
import { AddExercise } from "../components/addExercise";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const [cookie, setCookie,removeCookie] = useCookies(["JWT"]);

  const navigate=useNavigate()
  if(!cookie.JWT)
  {
    location.href="http://127.0.0.1:8000/signin/"
  }
  return (
    <div className="flex flex-wrap max-h-screen w-full min-h-screen">
      <DashboardNavbar></DashboardNavbar>
      <div className="flex flex-nowrap min-h-screen w-full ">
        <Sidebar></Sidebar>
        <AddExercise />
        <DashboardInfo />
      </div>
    </div>
  );
};
