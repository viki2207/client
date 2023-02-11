import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Landing from "../Layouts/Landing";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
};
