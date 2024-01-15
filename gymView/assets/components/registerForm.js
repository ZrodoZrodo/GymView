import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [fail, setFail] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/user/register/", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) =>
      resp.status === 400
        ? setFail(true)
        : location.href("http://localhost:8000/signin")
    );
  };
  return (
    <form>
      {fail && <>Wpisz poprawne dane</>}
      <div className="form-control space-y-4">
        <label className="input-group  input-group-vertical">
          <span className="pr-4 text-white">Email</span>
          <input
            type="email"
            name="email"
            placeholder="info@example.com"
            className="input w-full"
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </label>
        <label className="input-group  input-group-vertical">
          <span className="pr-4 text-white">Username</span>
          <input
            type="text"
            name="username"
            placeholder="Type your username"
            className="input w-full"
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </label>
        <label className="input-group input-group-vertical ">
          <span className="pr-5 text-white">Password</span>
          <input
            type="password"
            name="password"
            className="input w-full "
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </label>
        <button
          className="btn btn-ghost border-white rounded-none mt-10"
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
