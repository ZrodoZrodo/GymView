import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Info } from "./pages/info";
import { SignIn } from "./pages/signIn";
import { useCookies } from "react-cookie";
import { Register } from "./pages/register";
import { HomePage } from "./pages/homePage";
import { Dashboard } from "./pages/dashboard";
import {TrainingList} from './components/trainingList'
import {TrainingInfo} from './components/trainingInfo'
import {Exercise} from './components/exercise'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<TrainingList />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<HomePage />}></Route>
          <Route path="/treninginfo/:id" element={<TrainingInfo />}></Route>
          <Route path="/exercise/:id" element={<Exercise />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
