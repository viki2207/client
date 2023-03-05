import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
// import Register from "../Auth/Register";
import Register2 from "../Auth/Register2";
import Alert from "../Layouts/Alert";
import Landing from "../Layouts/Landing";
import Dashboard from "../dasboard/Dashboard";
import CreateProfile from "../profile/CreateProfile";
import Profile from "../profile/Profile";
import Profiles from "../Profiles/Profiles";
import PrivateRoute from "./PrivateRoute";

export const Routers = () => {
  return (
    <>
      <Alert></Alert>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register2></Register2>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/create-profile"
          element={
            <PrivateRoute>
              <CreateProfile></CreateProfile>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <CreateProfile></CreateProfile>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profiles"
          element={
            <PrivateRoute>
              <Profiles></Profiles>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
