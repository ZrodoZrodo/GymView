import React from "react";
import { useNavigate } from "react-router-dom";


export const Training = ({name,date,comment,id}) => {

  const navigate=useNavigate()

  return (
    <div className="card w-11/12 mt-2 bg-[#332F2B] shadow-xl" onClick={()=>navigate(`/treninginfo/${id}`)}>
      <div className="flex flex-row card-body border-2 border-[#FA7309] rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span className=" text-white font-bold ">{name}</span>
          <span className="mb-2">{date}</span>
        </div>
        <div className="flex items-center justify-end w-full">
          {comment}
        </div>
      </div>
    </div>
  );
};
