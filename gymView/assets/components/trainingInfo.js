import React from "react";
const training = {
  name: "Wyciskanie na klate",
  DATE: "2023-11-20",
  notes:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta",
};
export const TrainingInfo = () => {
  return (
    <div class="card w-full h-full bg-[#1c1c1e] rounded-none md:w-9/12">
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-left text-3xl underline-offset-8">
          Training name: {training.name}
        </h2>
        <div className=" text-left ">
          Training was performed on the day: {training.DATE}
        </div>
        <div className=" text-center text-white px-2">
          {" "}
          These are your notes:
        </div>
        <div className=" text-center text-[#FA7309]  px-2">
          {" "}
          These are your notes: {training.notes}
        </div>
        <div>
          <hr className="border" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center ">
          <div className="flex flex-col space-y-2 border-12">
            <p className=" text-center text-[#FA7309]">Exercise 1</p>
            <p className="text-white text-2xl "> </p>
          </div>
          <div className="flex flex-col space-y-2 ">
            <p className=" text-center text-[#FA7309]">Exercise 2 </p>
            <p className="text-white text-2xl"> </p>
          </div>
          <div className="flex flex-col space-y-2 ">
            <p className=" text-center text-[#FA7309]">Exercise 3 </p>
            <p className="text-white text-2xl"> </p>
          </div>
          <div className="flex flex-col space-y-2 ">
            <p className=" text-center text-[#FA7309]">Exercise 4 </p>
            <p className="text-white text-2xl"> </p>
          </div>
        </div>
        <div class="card-actions justify-end"></div>
        <div className="UserInfo w-full h-full"></div>
      </div>
    </div>
  );
};
