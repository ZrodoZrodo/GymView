import React from "react";
import Navbar from "../components/navbar";
import backgroundHero from "../UI/backgrounds/hero.png";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundHero})`,
      }}
      className=" max-h-screen w-full min-h-screen"
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-56 ">
        <a className="font-bold text-white text-6xl text-center">
          REACH YOUR LIMIT <br />
          AND GET TO THE <br />
          NEXT LEVEL
        </a>
        <a className="font-medium text-center my-4 text-[#FA7309]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Utenim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip
          <br /> ex ea commodo consequat.
        </a>
        <div className="mt-4">
          <button
            onClick={() => navigate("/info")}
            className="btn btn-outline text-white uppercase h-20 w-40 rounded-none  mr-6"
          >
            Learn more
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="btn bg-main-orange text-white h-20 uppercase w-40 rounded-none border-none"
          >
            Join now!
          </button>
        </div>
      </div>
    </div>
  );
};
