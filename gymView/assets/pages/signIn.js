import React,{useState} from "react";
import { Input } from "../components/input";
import LoginForm from "../components/loginForm";
import background from "../UI/backgrounds/signIn.png";

const SignIn = () => {
  return (
    <div className="min-h-screen grid grid-none md:grid-cols-2">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className=" invisible md:visible bg-center bg-cover order-last relative md:order-none min-h-full"
      >
        <div className=" ml-8 absolute inset-x-0 bottom-10">
          <p className="text-white text-3xl">Build your Legacy!</p>
          <p className="underline underline-offset-4 text-sm text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            laudantium obcaecati
          </p>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(147deg, rgba(255, 255, 255, 0.30) 1.64%, rgba(54, 54, 54, 0.01) 99.52%)",

          backdropFilter: "blur(7.45px)",

          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.2)",
        }}
        className="flex items-center flex-wrap justify-center"
      >
        <div className=" h-1/2 w-3/4">
          <p className="text-4xl text-white  underline underline-offset-4">
            Welcome back!
          </p>
          <p className="mb-2">Please enter your details.</p>
          <p className="mb-16 text-white text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            laudantium obcaecati.
          </p>
          <LoginForm />
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

export default SignIn;
