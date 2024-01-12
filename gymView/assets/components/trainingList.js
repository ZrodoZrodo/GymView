import React from "react";
import { Training } from "./training";
export const TrainingList = () => {
  return (
    <div className="card p-4 w-full bg-[#1c1c1e] rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">List of Trainings </p>
        <p className="text-xl mt-2 mb-4 text-[#FA7309]">
          {" "}
          History of trainings.
        </p>
        <p className="text-2xl text-white">Date:</p>
        <input type="date"></input>
        <div className="overflow-y-scroll h-5/6">
          <Training /> <Training /> <Training /> <Training /> <Training />{" "}
          <Training />
        </div>
      </div>
    </div>
  );
};
