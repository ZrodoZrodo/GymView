import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Info } from "./pages/info";
import { SignIn } from "./pages/signIn";
import { useCookies } from "react-cookie";

export const App=()=>{
    const [cookie,setCookie]=useCookies(['tese'])
    setCookie("test1")
    console.log(cookie)
    return(
        <>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Info />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
    )
}