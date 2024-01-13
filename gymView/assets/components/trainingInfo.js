import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const TrainingInfo = () => {

  const navigate=useNavigate()
  const {id}= useParams();
  const [cookie,setCookie]=useCookies()
  const [training,setTrening]=useState()

  useEffect(() => {
    fetch("http://localhost:8000/user/token/refresh/", {
      method: "POST",
      body: JSON.stringify({ refresh: cookie.JWT.refresh }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCookie("JWT", resp))
      .then(() => {
        fetch(`http://localhost:8000/user/Trening/${id}/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setTrening(resp[0]?resp[0]:[]));
      });
  }, []);

  
  if(!training) return;

  return (
    <div class="card w-full h-full bg-[#1c1c1e] rounded-none md:w-9/12">
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-left text-3xl underline-offset-8">
          Training name: {training.name}
        </h2>
        <div className=" text-left ">
          Training was performed on the day: {training.date}
        </div>
        <div className=" text-center text-[#FA7309]  px-2">
          {" "}
          These are your notes: {training.comment}
        </div>
        <div>
          <hr className="border" />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center ">
        {training.exercises.map((ex)=><div className="flex flex-col space-y-2 border-12" onClick={()=>navigate(`/exercise/${ex.exercise.id}`)}>
            <p className=" text-center text-[#FA7309]">{ex.exercise.name}</p>
            <p className="text-white text-2xl "> </p>
          </div>)}

        </div>
        <div class="card-actions justify-end"></div>
        <div className="UserInfo w-full h-full"></div>
      </div>
    </div>
  );
};
