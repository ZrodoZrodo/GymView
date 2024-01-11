import React from "react";
import logo from "../UI/Logo.png";

const Info = () => {
  return (
    <div className="">
      <div className="navbar bg-[#1C1C1E] ">
        <p className=" text-4xl text-[#F78627] font-bold"> GymView </p>
      </div>
      <div className="bg-black pt-8 px-10 min-h-screen">
        <div className="flex flex-row">
          <hr className="border-[#F78627] w-16 mx-4 mt-16"></hr>
          <p className=" text-4xl text-[#F78627] mt-10"> GymView </p>
        </div>
        <p className=" text-sm uppercase mx-4 my-2 text-[#F78627]">
          What it is? We can help!
        </p>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 pt-14">
          <div class="card w-64 mb-24 md:w-72 xl:w-80 shadow-2xl rounded-none border-solid border-[#F78627] border-2 grid justify-items-center 2xl:w-96 ">
            <div class="card-body items-center text-center">
              <h2 class="card-title text-4xl text-[#F78627] ">Start</h2>
              <p className="text-[#F78627]">Step 1.</p>
              <p className="text-white text-center pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex.
              </p>
              <div class="card-actions"></div>
            </div>
          </div>
          <div class="card w-64 mb-24 md:w-72 xl:w-80  shadow-xl rounded-none border-solid border-[#F78627] border-2 grid justify-items-center 2xl:w-96 ">
            <div class="card-body items-center text-center">
              <h2 class="card-title text-4xl text-[#F78627] ">Build muscles</h2>
              <p className="text-[#F78627]">Step 2.</p>
              <p className="text-white text-center pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex.
              </p>
              <div class="card-actions"></div>
            </div>
          </div>
          <div class="card w-64 mb-24 md:w-72 xl:w-80  shadow-xl rounded-none border-solid border-2 border-[#F78627] grid justify-items-center 2xl:w-96 ">
            <div class="card-body items-center text-center">
              <h2 class="card-title text-4xl text-[#F78627] ">Be strong!</h2>
              <p className="text-[#F78627]">Step 3.</p>
              <p className="text-white text-center pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex.
              </p>
              <div class="card-actions">
                <button className="btn text-white h-20 uppercase w-40 rounded-none border-[#F78627]">
                  Join now!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-36">
          <div className=" border-2 border-[#F78627] h-24 border-r-transparent border-t-transparent border-b-transparent rounded-full mb-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
