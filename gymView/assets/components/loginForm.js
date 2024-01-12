import React,{useState} from "react";
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [data,setData]=useState({})
  const [fail,setFail]=useState(false)
  const navigate=useNavigate()

    const [cookie,setCookie]=useCookies(['JWT'])
  const handleSubmit = (e)=>{
    e.preventDefault();
    fetch('http://localhost:8000/user/token/',{
      method:'post',
      body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(resp=>resp.json()).then(resp=>{
        if(resp.detail)
        {
          setFail(true)
        }
        else{
          setCookie('JWT',resp)
          navigate('/dashboard')
        }
    })
    
  }
  

  return (
    <form>
      {fail&&<>Wpisz poprawne dane</>}
      <div className="form-control space-y-4">
        <label className="input-group  input-group-vertical">
          <span className="pr-4 text-white">Username</span>
          <input
            type="text"
            name="username"
            placeholder="Type your username"
            className="input w-full"
            onChange={(e)=>setData((prev)=>({...prev,username:e.target.value}))}
          />
        </label>
        <label className="input-group input-group-vertical ">
          <span className="pr-5 text-white">Password</span>
          <input type="password" name="password" className="input w-full " onChange={(e)=>setData((prev)=>({...prev,password:e.target.value}))} />
        </label>
        <button className="btn btn-ghost border-white rounded-none mt-10" onClick={(e)=>handleSubmit(e)}>
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
