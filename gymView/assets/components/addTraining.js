import React, { useState } from "react";
import { Textarea } from "./textarea";
import {useCookies} from 'react-cookie'


const AddTraining = () => {
  const [cookie,setCookie]=useCookies(['JWT'])


const [data,setData]=useState({exercises:[]})


const handleSubmit=(e)=>{
e.preventDefault()
}
console.log(cookie)
console.log(data)
  return (
    <div class="card w-full h-full bg-[#1c1c1e] rounded-none md:w-9/12">
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-center text-3xl underline  decoration-[#f78627] underline-offset-8">
          Hello!
        </h2>
        <div className=" text-center text-[#f78627]">
          Put these information to create training
        </div>
        <div className=" text-center text-white px-2">
          Name, week, choose excersise.
        </div>
        <div>
          <hr className="border-[#f78627]" />
        </div>
        <div className="flex flex-col items-center text-white space-y-6">
          <p className="text-2xl"> Name of training:</p>
          <input
            type="text"
            name="title"
            placeholder="Name of traomomg"
            className="input input-bordered border-[#f78627] max-w-xs"
            onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))}
          />{" "}
          <hr className="border-[#f78627] w-4/5" />
          <p className="text-2xl"> Week:</p>
          <input
            type="date"
            placeholder="Week"
            className="input input-bordered border-[#f78627] max-w-xs"
            onChange={(e)=>setData((prev)=>({...prev,date:e.target.value}))}
          />{" "}
          <hr className="border-[#f78627] w-4/5" />
          <p className="text-2xl"> List of excersise</p>
          <hr className="border-[#f78627] w-4/5" />
          <p className="text-2xl"> Comment:</p>
          <textarea
          onChange={(e)=>setData((prev)=>({...prev,comment:e.target.value}))}
            type="text"
            rows="8"
            cols="100"
            placeholder="Description"
            className="rounded-md caret-transparent bg-[#2A303C] border-2 border-[#f78627] text-[#f78627] resize-none text-left w-11/12 md:w-1/2"
          />{" "}
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

export default AddTraining;
