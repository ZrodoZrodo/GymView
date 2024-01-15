import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
import { DashboardInfo } from "./dashboardInfo";
import Sidebar from "./sideBar";
export const Exercise = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState();
  const [cookie, setCookie] = useCookies();
  const [newWeek, setNewWek] = useState({});
  const [message, setMessage] = useState("");
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
        fetch(`http://localhost:8000/user/exercise/${id}/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setExercise(resp));
      });
  }, []);

  console.log(exercise);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newWeek.date &&
      newWeek.number_of_replication &&
      newWeek.number_of_series &&
      newWeek.weight &&
      newWeek.comment
    ) {
      const copy = exercise;
      copy.weeks.push({ ...newWeek });
      console.log(copy);

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
          fetch(`http://localhost:8000/user/exercise/${id}/`, {
            method: "PUT",
            body: JSON.stringify(copy),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookie.JWT.access}`,
            },
          })
            .then((resp) => resp.json())
            .then((resp) => console.log(resp));
        });

      setExercise(copy);
    } else {
      setMessage("Wypełnij wszystkie pola");
    }
  };

  const handleDelete = (id) => {
    let copy = exercise;
    copy.weeks = copy.weeks.filter((w) => w.id !== id);
    console.log(copy);

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
        fetch(`http://localhost:8000/user/exercise/${id}/`, {
          method: "PUT",
          body: JSON.stringify(copy),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.JWT.access}`,
          },
        })
          .then((resp) => resp.json())
          .then((resp) => console.log(resp));
      });

    setExercise(copy);
  };

  if (!exercise) return;

  return (
    <div className="flex flex-wrap max-h-screen w-full min-h-screen">
      <DashboardInfo />
      <div className="flex flex-nowrap min-h-screen w-full ">
        <Sidebar />
        <form>
          {message}
          <div class="card w-full h-full bg-[#1c1c1e] rounded-none md:w-9/12">
            <div class="flex flex-col space-y-4 card-body">
              <h2 class="text-white text-left text-3xl underline-offset-8">
                Exercise name: {exercise.name}
              </h2>
              <div className=" text-center text-white px-2">
                {" "}
                Here you can add your week:
              </div>
              <div className="grid grid-cols-1 gap-4 text-center ">
                <div className="flex flex-col items-center text-white space-y-6">
                  <p className="text-2xl"> Choose date:</p>
                  <input
                    required
                    type="date"
                    name="date"
                    className="input input-bordered border-[#f78627] max-w-xs"
                    onChange={(e) =>
                      setNewWek((prev) => ({ ...prev, date: e.target.value }))
                    }
                  />{" "}
                  <hr className="border-[#f78627] w-4/5" />
                  <p className="text-2xl"> Number of series</p>
                  <input
                    required
                    type="number"
                    placeholder="Series"
                    className="input input-bordered border-[#f78627] max-w-xs"
                    onChange={(e) =>
                      setNewWek((prev) => ({
                        ...prev,
                        number_of_series: Number(e.target.value),
                      }))
                    }
                  />{" "}
                  <hr className="border-[#f78627] w-4/5" />
                  <p className="text-2xl"> Number of replication:</p>
                  <input
                    type="number"
                    placeholder="Reps"
                    className="input input-bordered border-[#f78627] max-w-xs"
                    onChange={(e) =>
                      setNewWek((prev) => ({
                        ...prev,
                        number_of_replication: Number(e.target.value),
                      }))
                    }
                    required
                  />{" "}
                  <hr className="border-[#f78627] w-4/5" />
                  <p className="text-2xl"> Amount of weights</p>
                  <input
                    type="number"
                    placeholder="Weights"
                    className="input input-bordered border-[#f78627] max-w-xs"
                    onChange={(e) =>
                      setNewWek((prev) => ({
                        ...prev,
                        weight: Number(e.target.value),
                      }))
                    }
                    required
                  />{" "}
                  <hr className="border-[#f78627] w-4/5" />
                  <p className="text-2xl"> Comment</p>
                  <input
                    required
                    type="number"
                    placeholder="Weights"
                    className="input input-bordered border-[#f78627] max-w-xs"
                    onChange={(e) =>
                      setNewWek((prev) => ({
                        ...prev,
                        comment: e.target.value,
                      }))
                    }
                  />{" "}
                </div>
              </div>
              <div class="card-actions justify-center">
                <div className="flex items-center flex-wrap gap-4">
                  <a className="btn btn-outline text-white">Show trainings</a>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    class="btn btn-success  border-2 border-success max-w-xs  justify-center"
                  >
                    Save changes
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-8">
              <div className=" border-2 border-l-[#f78627] h-48 border-r-transparent border-t-transparent border-b-transparent rounded-null "></div>
            </div>
            <h2 class="text-white text-left text-3xl underline-offset-8">
              List of weeks:
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center ">
              {exercise.weeks
                .sort((a, b) => new Date(b) - new Date(a))
                .map((week, index) => (
                  <div
                    className="flex flex-col space-y-2 border-12"
                    onClick={() => handleDelete(week.id)}
                  >
                    <p className=" text-center text-2xl text-[#FA7309]">
                      Week: {index + 1}
                    </p>
                    <p className="text-white  text-xl">Date: {week.date}</p>
                    <p className="text-white  text-xl">
                      Number of series: {week.number_of_series}
                    </p>
                    <p className="text-white  text-xl">
                      Number of replication: {week.number_of_replication}
                    </p>
                    <p className="text-white  text-xl">Weight: {week.weight}</p>
                    <p className="text-white  text-xl">
                      Comment: {week.comment}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </form>
        <DashboardInfo />
      </div>
    </div>
  );
};
