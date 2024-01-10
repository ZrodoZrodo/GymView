import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div className="form-control space-y-4">
        <label className="input-group  input-group-vertical">
          <span className="pr-4 text-white">Username</span>
          <input
            type="text"
            name="username"
            placeholder="Type your username"
            className="input w-full"
          />
        </label>
        <label className="input-group input-group-vertical ">
          <span className="pr-5 text-white">Password</span>
          <input type="password" name="password" className="input w-full " />
        </label>
        <button className="btn btn-ghost border-white rounded-none mt-10">
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
