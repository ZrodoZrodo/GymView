import React, { useState,useEffect } from "react";
import { Training } from "./training";
import { useCookies } from "react-cookie";
export const TrainingList = () => {

  const [trenings,setTrenings]=useState([])
  const [cookie,setCookie]=useCookies()
  const [date,setDate]=useState("")
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
        fetch("http://localhost:8000/user/Trening/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setTrenings(resp));
      });
  }, []);

  console.log(trenings)
  return (
    <div className="card p-4 w-full bg-[#1c1c1e] rounded-none md:w-9/12">
      <div className="mt-2 ml-2 ">
        <p className="text-4xl text-white">List of Trainings </p>
        <p className="text-xl mt-2 mb-4 text-[#FA7309]">
          {" "}
          History of trainings.
        </p>
        <p className="text-2xl text-white">Date:</p>
        <input onChange={(e)=>setDate(e.target.value)} type="date"></input>
        <div className="overflow-y-scroll h-5/6">
          {trenings.filter(trening=>trening.date.includes(date)).map(trening=><Training id={trening.id} name={trening.name} comment={trening.comment} date={trening.date}/>)}
        </div>
      </div>
    </div>
  );
};
