import React from "react";

const trainings = {
  name: "Wyciskanie na klate",
  DATE: "2023-11-20",
  notes:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta",
};

export const Training = () => {
  return (
    <div className="card w-11/12 mt-2 bg-[#332F2B] shadow-xl">
      <div className="flex flex-row card-body border-2 border-[#FA7309] rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span className=" text-white font-bold ">{trainings.name}</span>
          <span className="mb-2">{trainings.DATE}</span>
        </div>
        <div className="flex items-center justify-end w-full">
          {trainings.notes}
        </div>
      </div>
    </div>
  );
};
