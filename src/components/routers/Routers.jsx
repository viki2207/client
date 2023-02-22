import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
// import Register from "../Auth/Register";
import Register2 from "../Auth/Register2";
import Alert from "../Layouts/Alert";
import Landing from "../Layouts/Landing";
import Dashboard from "../dasboard/Dashboard";

export const Routers = () => {
  return (
    <>
      <Alert></Alert>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register2></Register2>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
};
