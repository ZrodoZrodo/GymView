import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
export const Exercise = () => {
  // const {id}= useParams();
  // const [exercise,setExercise]=useState()
  // const [cookie,setCookie]=useCookies()

  // useEffect(() => {
  //   fetch("http://localhost:8000/user/token/refresh/", {
  //     method: "POST",
  //     body: JSON.stringify({ refresh: cookie.JWT.refresh }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((resp) => setCookie("JWT", resp))
  //     .then(() => {
  //       fetch(`http://localhost:8000/user/exercise/${id}/`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${cookie.JWT.access}`,
  //         },
  //       })
  //         .then((resp) => resp.json())
  //         .then((resp) => setExercise(resp));
  //     });
  // }, []);

  // console.log(exercise)

  // if(!exercise) return;

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
            <p className="text-2xl"> Amount of weights</p>
            <input
              type="number"
              placeholder="Weights"
              className="input input-bordered border-[#f78627] max-w-xs"
            />{" "}
          </div>
        </div>
        <div class="card-actions justify-center">
          <div className="flex items-center flex-wrap gap-4">
            <a className="btn btn-outline text-white">Show trainings</a>
            <button class="btn btn-success  border-2 border-success max-w-xs  justify-center">
              Save changes
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <div className=" border-2 border-l-[#f78627] h-48 border-r-transparent border-t-transparent border-b-transparent rounded-null "></div>
      </div>
      <h2 class="text-white text-left text-3xl underline-offset-8">
        List of weeks:
      </h2>
      <div className="grid grid-cols-3 gap-4 text-center ">
        <div className="flex flex-col space-y-2 border-12">
          <p className=" text-center text-2xl text-[#FA7309]">Week:</p>
          <p className="text-white  text-xl">Date: </p>
          <p className="text-white  text-xl">Number of series: </p>
          <p className="text-white  text-xl">Number of replication: </p>
          <p className="text-white  text-xl">Weight: </p>
          <p className="text-white  text-xl">Comment: </p>
        </div>
      </div>
    </div>
  );
};
