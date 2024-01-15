import React, { useEffect, useState } from "react";
import { Textarea } from "./textarea";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { DashboardInfo } from "./dashboardInfo";
import Sidebar from "./sideBar";
import DashboardNavbar from "./dashboardNavbar";

export const AddTraining = () => {
  const [cookie, setCookie] = useCookies(["JWT"]);
  const navigate = useNavigate();
  const [data, setData] = useState({ exercises: [] });
  const [ex, setEx] = useState();
  const [search, setSearch] = useState("");

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
        fetch("http://localhost:8000/user/exercise/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setEx(resp));
      });
  }, []);

  const handleAddEx = (id, e) => {
    console.log(e.target.checked);
    let copy = data.exercises;
    if (e.target.checked) {
      copy.push(id);
    } else {
      copy = copy.filter((item) => item !== id);
    }

    setData((prev) => ({ ...prev, exercises: copy }));
  };

  console.log(cookie.JWT.access);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
          body: JSON.stringify(data),
        }).then((resp) => {
          if (resp.status === 201) {
            navigate("/treningList");
          }
        });
        console.log(cookie.JWT.access);
      });
  };

  return (
    <div className="flex flex-wrap max-h-screen w-full min-h-screen">
      <DashboardNavbar />
      <div className="flex flex-nowrap min-h-screen w-full ">
        <Sidebar />
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
                onChange={(e) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
              />{" "}
              <hr className="border-[#f78627] w-4/5" />
              <p className="text-2xl"> Week:</p>
              <input
                type="date"
                placeholder="Week"
                className="input input-bordered border-[#f78627] max-w-xs"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, date: e.target.value }))
                }
              />{" "}
              <hr className="border-[#f78627] w-4/5" />
              <p className="text-2xl"> List of excersise</p>
              <div className="h-92 overflow-auto">
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
                {ex &&
                  ex
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
              <hr className="border-[#f78627] w-4/5" />
              <p className="text-2xl"> Comment:</p>
              <textarea
                onChange={(e) =>
                  setData((prev) => ({ ...prev, comment: e.target.value }))
                }
                type="text"
                rows="8"
                cols="100"
                placeholder="Description"
                className="rounded-md caret-transparent bg-[#2A303C] border-2 border-[#f78627] text-[#f78627] resize-none text-left w-11/12 md:w-1/2"
              />{" "}
              <div className="flex flex-wrap gap-4">
                <a
                  onClick={() => navigate("/treningList")}
                  className="btn btn-outline text-white"
                >
                  Show trainings
                </a>
                <button
                  onClick={(e) => handleSubmit(e)}
                  class="btn btn-success text-main-dark border-2 border-success max-w-xs  justify-center"
                >
                  Zapisz zmiany
                </button>{" "}
              </div>
            </div>
            <div className="UserInfo w-full h-full"></div>
          </div>
        </div>
        <DashboardInfo />
      </div>
    </div>
  );
};
