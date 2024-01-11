import React from "react";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-start gap-4 flex-row w-full h-24 bg-[#332F2B] border-[#f78627] border-b-2 border-l-0 border-t-0 rounded-r-lg">
      <div className="self-center ml-20 my-4 text-3xl md:text-5xl font-bold cursor-pointer">
        <span className="text-[#FA7309]">Gym</span>
        <span className="text-[#f78627]">View</span>
      </div>
      <div className="self-center text-white hidden md:flex">
        We watch, you do the workout!
      </div>
    </div>
  );
};

export default DashboardNavbar;
