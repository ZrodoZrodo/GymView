import React,{useState} from "react";
import { useCookies } from "react-cookie";

export const AddExercise = () => {
  const [cookie,setCookie]=useCookies()
  const [exercise,setExercise]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(exercise.length!==0){
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
          fetch(`http://localhost:8000/user/exercise/`, {
            method:"POST",
            body:JSON.stringify({name:exercise}),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookie.JWT.access}`,
            },
          }).then(resp=>resp.json()).then(()=>setExercise(""))
        });
    }
  }

  return (
    <div class="card w-full h-full bg-[#1c1c1e] rounded-none md:w-9/12">
      <div class="flex flex-col space-y-4 card-body">
        <h2 class="text-white text-center text-3xl underline decoration-[#f78627] underline-offset-8">
          Hello !
        </h2>
        <div className=" text-center text-white ">
          {" "}
          We are here to help you!
        </div>
        <div className="grid grid-cols-3 gap-4 text-center ">
          <div className=" text-center">
            <p className="text-2xl text-[#f78627]"> Strength</p>
            To enhance your workout routine, you can add a new exercise. Simply
            provide the name of the exercise, and we'll take care of the rest.
            Let's make your fitness journey even more exciting!
          </div>
          <div className="flex justify-center pt-8">
            <div className=" border-2 border-l-[#f78627] h-48 border-r-transparent border-t-transparent border-b-transparent rounded-null "></div>
          </div>
          <div className=" text-center">
            <p className="text-2xl text-[#f78627]"> Knowledge</p>
            Once you've added the exercise, you can further customize it by
            specifying details such as the number of series, repetitions,
            weight, and any additional comments for each week. Take your
            workouts to the next level with personalized exercises tailored to
            your fitness goals. Ready to get started? Enter the name of your new
            exercise and embark on a path to a healthier, stronger you!
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 text-center ">
          <h2 class="text-white text-center text-3xl underline decoration-[#f78627] underline-offset-8">
            What we offer to you?
          </h2>
          <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-start md:text-end mb-10">
                <time class="font-mono italic">First step</time>
                <div class="text-lg font-black">Improved Fitness Level</div>
                Strive for a healthier lifestyle by consistently engaging in
                physical activities. Regular exercise helps boost your overall
                fitness level, increases energy levels, and promotes well-being.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end mb-10">
                <time class="font-mono italic">Second step</time>
                <div class="text-lg font-black">Enhanced Mental Wellness</div>
                iMac is a family of all-in-one Mac desktop computers designed
                and built by Apple Inc. It has been the primary part of Apple's
                consumer desktop offerings since its debut in August 1998, and
                has evolved through seven distinct forms
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-start md:text-end mb-10">
                <time class="font-mono italic">Third step</time>
                <div class="text-lg font-black">Nutritional Excellence</div>
                Achieve nutritional goals by adopting a balanced and wholesome
                diet. Explore diverse, nutrient-rich foods to provide your body
                with essential vitamins and minerals for optimal functioning.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end mb-10">
                <time class="font-mono italic">Fourth step</time>
                <div class="text-lg font-black">
                  Skill Mastery in Area of Interest
                </div>
                Cultivate expertise in a particular area of interest or hobby.
                Whether it's learning a musical instrument, mastering a
                language, or honing a craft, continuous practice leads to skill
                development and personal fulfillment.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-start md:text-end mb-10">
                <time class="font-mono italic">Fifth step</time>
                <div class="text-lg font-black">
                  Stronger Social Connectionsh
                </div>
                Foster meaningful relationships by investing time in social
                interactions. Connect with friends, family, or new acquaintances
                to build a strong support system and experience a sense of
                belonging.
              </div>
            </li>
          </ul>
          <div className="flex flex-col items-center text-white space-y-6">
            <h2 class="text-white text-center text-3xl underline decoration-[#f78627] underline-offset-8">
              What you waiting for? <br /> Add your first exercise!{" "}
            </h2>
            <div class="join">
              <input
              value={exercise}
              onChange={(e)=>setExercise(e.target.value)}
                class="input input-bordered border-[#f78627] join-item"
                placeholder="Exercise name"
              />
              <button onClick={(e)=>handleSubmit(e)} class="btn  border-[#f78627] join-item rounded-r-full">
                Exercise!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
