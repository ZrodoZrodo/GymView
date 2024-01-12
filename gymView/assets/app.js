import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Info } from "./pages/info";
import { SignIn } from "./pages/signIn";
import { useCookies } from "react-cookie";
import { Register } from "./pages/register";
import { HomePage } from "./pages/homePage";

export const App=()=>{
    const [cookie,setCookie]=useCookies(['tese'])
    setCookie("test1")
    console.log(cookie)
    return(
        <>

        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>

        </Routes>
      </BrowserRouter>
    </>
    )
}