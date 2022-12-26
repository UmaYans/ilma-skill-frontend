import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import CoursePage from "pages/Course";
import SigninPage from "pages/Sign-in";
import SignupPage from "pages/Sign-up";
import ProfilePage from "pages/Profile";
import Layout from "Layout";

import Home from "pages/Home";

import { CourseById, Room } from "components/Course";
import {
  BuyCourses,
  Comments,
  MyCourses,
  NewCourses,
  SaveCourses,
} from "components/Profile";

const App = () => {
  const token = useSelector((state) => state.user.token);
  return (
    <>
      <Routes>
        <Route
          path="/sign-in"
          element={token ? <Navigate to="/" /> : <SigninPage />}
        />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="course/" element={<CoursePage />} />
          <Route path="course/category/:catId" element={<CoursePage />} />
          <Route index element={<Home />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="course/:id" element={<CourseById />} />
          <Route path="course/room/:id" element={<Room />} />
          <Route path="profile/*" element={<ProfilePage />}>
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
