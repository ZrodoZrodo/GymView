import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Info } from "./pages/info";
import { SignIn } from "./pages/signIn";
import { useCookies } from "react-cookie";
import { Register } from "./pages/register";
import { HomePage } from "./pages/homePage";
import { Dashboard } from "./pages/dashboard";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
