import React from "react";
import { Routes, Route } from "react-router-dom";
import Course from "./Course/Course";
import CourseById from "./Course/CourseById/CourseById";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Profil from "./Profil/Profil";
import SigninPage from "./Sign-in/SigninPage";
import SignupPage from "./Sign-up/SignupPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="course/:id" element={<CourseById />} />
          <Route path="profile" element={<Profil />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
