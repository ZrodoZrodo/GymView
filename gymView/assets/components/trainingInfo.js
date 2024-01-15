import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const TrainingInfo = () => {

  const navigate=useNavigate()
  const {id}= useParams();
  const [cookie,setCookie]=useCookies()
  const [training,setTrening]=useState()
  const [ex, setEx] = useState();
  const [exercises,setExercises]=useState([]);
  const [search, setSearch] = useState("");
  if(!cookie.JWT)
  {
    location.href="http://127.0.0.1:8000/signin/"
  }
 

useEffect(()=>{
  fetch("http://localhost:8000/user/token/refresh/", {
    method: "POST",
    body: JSON.stringify({ refresh: cookie.JWT.refresh }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => setCookie("JWT", resp))
},[])

  useEffect(()=>{

        fetch("http://localhost:8000/user/exercise/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setEx(resp));
      
  },[cookie])


  const handleClick=(eid)=>{
    const data={
      exercises:training.exercises.filter(ex=>ex.exercise.id!==eid).map(ex=>ex.exercise.id),
      name:training.name,
      date:training.date,
      comment:training.comment,
    }
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
          method:"PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
          body:JSON.stringify(data)
        })
          .then((resp) => resp.json())
      });
      setTrening((prev)=>({...prev,exercises:prev.exercises.filter(ex=>ex.exercise.id!==id)}))
  }

  useEffect(() => {

        fetch(`http://localhost:8000/user/Trening/${id}/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setTrening(resp[0]?resp[0]:[]));
      
  }, [cookie]);

  const handleAddEx = (id, e) => {
    if (e.target.checked) {
      setExercises((prev)=>[...prev,id])
    } else {
      setExercises((prev)=>prev.filter(ex=>ex!==id))
    }


  };

  const handleSave=()=>{
    const data={
      exercises:[...training.exercises.map(ex=>ex.exercise.id),...exercises],
      name:training.name,
      date:training.date,
      comment:training.comment,
    }

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
          method:"PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
          body:JSON.stringify(data)
        })
          .then((resp) => resp.json()).then(()=>navigate("/treningList"))
      });

  }

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
        {training.exercises.map((ex)=><div className="flex flex-col space-y-2 border-12" >
            <p onClick={()=>navigate(`/exercise/${ex.exercise.id}`)} className=" text-center text-[#FA7309]">{ex.exercise.name}</p>
            <p className="text-white text-2xl " onClick={()=>handleClick(ex.exercise.id)}>usuń </p>
          </div>)}
          <div className="h-92 overflow-auto">
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            {ex &&
              ex
               .filter(e=>!(training.exercises.map(ex=>ex.exercise.id)).includes(e.id))
                .filter((e) => e.name.includes(search))
                .map((e) => (
                  <p>
                    <label>
                      <input
                        type="checkbox"
                        onChange={(event) => handleAddEx(e.id, event)}
                      />
                      {e.name}
                    </label>
                  </p>
                ))}
          </div>
        </div>
        <div class="card-actions justify-end"><button onClick={()=>handleSave()}>Zapisz</button></div>
        <div className="UserInfo w-full h-full"></div>
      </div>
    </div>
  );
};
