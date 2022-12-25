import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Course from "./pages/Course/Course";
import CourseById from "./pages/Course/CourseById/CourseById";
import Room from "./pages/Course/Room/Room";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import BuyCourses from "./pages/Profil/Outlet/BuyCourses";
import Comments from "./pages/Profil/Outlet/Comments";
import MyCourses from "./pages/Profil/Outlet/MyCourses";
import NewCourses from "./pages/Profil/Outlet/NewCourses";
import SaveCourses from "./pages/Profil/Outlet/SaveCourses";
import Profil from "./pages/Profil/Profil";
import SigninPage from "./pages/Sign-in/SigninPage";
import SignupPage from "./pages/Sign-up/SignupPage";

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
          <Route path="course/" element={<Course />} />
          <Route path="course/category/:catId" element={<Course />} />
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="course/:id" element={<CourseById />} />
          <Route path="course/room/:id" element={<Room />} />
          <Route path="profile/*" element={<Profil />}>
            <Route index element={<Comments />} />
            <Route path="buyCourses" element={<BuyCourses />} />
            <Route path="saveCurses" element={<SaveCourses />} />
            <Route path="myCurses" element={<MyCourses />} />
            <Route path="newCurses" element={<NewCourses />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
