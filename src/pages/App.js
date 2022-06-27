import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Course from "./Course/Course";
import CourseById from "./Course/CourseById/CourseById";
import Room from "./Course/Room/Room";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Profil from "./Profil/Profil";
import SigninPage from "./Sign-in/SigninPage";
import SignupPage from "./Sign-up/SignupPage";

const App = () => {
  const token = useSelector((state) => state.user.token);
  return (
    <>
      <Routes>
        {/* <Route path="/sign-in" element={<SigninPage />} /> */}
        <Route
          path="/sign-in"
          // element={<SigninPage />}
          element={token ? <Navigate to="/" /> : <SigninPage />}
        />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="course/:id" element={<CourseById />} />
          <Route path="course/room/:id" element={<Room />} />
          <Route path="profile" element={<Profil />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
