import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Sidebar = () => {

  const navigate=useNavigate()
  const [cookie, setCookie,removeCookie] = useCookies(["JWT"]);
  if(!cookie)
  {
    navigate('./signin/')
  }
  const handleLogout=()=>{
    removeCookie("JWT")
    navigate('/signin/')
  }

  return (
    <div className="flex flex-col z-10 bg-[#FA7309] border-2 -mt-24 justify-between gap-6 border-[#f78627] border-b-0 border-l-0 border-t-0 rounded-r-lg  w-20 hidden sm:flex  ">
      <img src="Log_Out.svg" />
      <div className="flex flex-col items-center  gap-6">
        <p className="text-[#1c1c1e] cursor-pointer" onClick={()=>navigate('/addTrening')}>Dodaj trening</p>
        <p className="text-[#1c1c1e] cursor-pointer" onClick={()=>navigate('/treningList')}>Zobacz treningi</p>
      </div>
      <div className="text-lg text-center mb-20">
        <p className="text-[#1c1c1e] cursor-pointer" onClick={()=>handleLogout()}>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
