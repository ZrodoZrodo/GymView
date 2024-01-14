import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Training = ({name,date,comment,id,trening,setTrenings}) => {
  const [cookie, setCookie] = useCookies(["JWT"]);
  const navigate=useNavigate()

const handleClick=()=>{
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
        method:"DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie.JWT.access}`,
        },
      })
        .then((resp) => resp.json()).then(resp=>console.log(resp)).then(()=>navigate('/treningList'))
    })
    setTrenings(prev=>(prev.filter(tr=>tr.id!==id)))
}

  return (
    <div className="card w-11/12 mt-2 bg-[#332F2B] shadow-xl" >
      <div onClick={()=>navigate(`/treninginfo/${id}`)} className="flex flex-row card-body border-2 border-[#FA7309] rounded-xl h-full sm:gird-cols-1">
        <div className="flex flex-col w-5/12">
          <span className=" text-white font-bold ">{name}</span>
          <span className="mb-2">{date}</span>
        </div>
        <div className="flex items-center justify-end w-full">
          {comment}
        </div>
      </div>
      <button onClick={()=>handleClick()}>usuń</button>
    </div>
  );
};
