import React from "react";
import backgroundregister from "../UI/backgrounds/register.png";
import logo from "../UI/Logo.png";
import RegisterForm from "../components/registerForm";

const Register = () => {
  return (
    <div className="min-h-screen grid grid-none md:grid-cols-2">
      <div
        style={{
          backgroundImage: `url(${backgroundregister})`,
        }}
        className=" invisible md:visible bg-center bg-cover order-last relative md:order-none min-h-full"
      >
        <div className=" ml-8 absolute inset-x-0 bottom-10">
          <p className="text-white text-3xl">Start the workout!</p>
          <p className="underline underline-offset-4 text-sm text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            laudantium obcaecati.
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#363636",
        }}
        className="flex items-center flex-wrap justify-center"
      >
        <div className=" h-1/2 w-3/4">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundRepeat: "no-repeat",
              height: "15%",
            }}
          ></div>
          <p className="text-4xl text-white  underline underline-offset-4">
            It's time to shine!
          </p>
          <p className="mb-2">Please enter your details.</p>
          <p className="mb-16 text-white text-xl">
            Type your email, create funny username, type strong password, and
            become a beast!
          </p>
          <RegisterForm />
          <p className="text-center mt-4">
            Don't have an account?
            <span className="underline underline-offset-4 pl-1">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
