import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../../redux-toolkit/features/usersSlice";

const SaveCourses = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(user);

  if (!user || loading) {
    return <div>...</div>;
  }

  return (
    <div>
      <p>Сохраненные курсы </p>
      <div>
        {user.saveCourses.length === 0 ? (
          <div>Нет сохраненных курсов.Найти <Link to="/course">курс?</Link></div>
        ) : (
          user.saveCourses.map((course) => {
            return (
              <div key={course._id}>
                <span>{course.name}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SaveCourses;
