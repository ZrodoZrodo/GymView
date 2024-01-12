import React from "react";

export const Exercise = () => {
  return (
    <div class="card w-full h-full bg-[#1c1c1e] rounded-none md:w-9/12">
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-left text-3xl underline-offset-8">
          Exercise name:
        </h2>
        <div className=" text-center text-white px-2">
          {" "}
          Here you can add your week:
        </div>
        <div className="grid grid-cols-1 gap-4 text-center ">
          <div className="flex flex-col items-center text-white space-y-6">
            <p className="text-2xl"> Choose date:</p>
            <input
              type="date"
              name="date"
              className="input input-bordered border-[#f78627] max-w-xs"
            />{" "}
            <hr className="border-[#f78627] w-4/5" />
            <p className="text-2xl"> Number of series</p>
            <input
              type="number"
              placeholder="Series"
              className="input input-bordered border-[#f78627] max-w-xs"
            />{" "}
            <hr className="border-[#f78627] w-4/5" />
            <p className="text-2xl"> Number of replication:</p>
            <input
              type="number"
              placeholder="Reps"
              className="input input-bordered border-[#f78627] max-w-xs"
            />{" "}
            <hr className="border-[#f78627] w-4/5" />
            <p className="text-2xl"> Amount of weight</p>
            <input
              type="number"
              placeholder="Weights"
              className="input input-bordered border-[#f78627] max-w-xs"
            />{" "}
          </div>
          <hr className="border-[#f78627] w-4/5" />
        </div>
        <div class="card-actions justify-end">
          <div className="flex flex-wrap gap-4">
            <a className="btn btn-outline text-white">Show trainings</a>
            <button class="btn btn-success text-main-dark border-2 border-success max-w-xs  justify-center">
              Zapisz zmiany
            </button>{" "}
          </div>
        </div>
        <div className="UserInfo w-full h-full"></div>
      </div>
    </div>
  );
};