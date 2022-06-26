import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../redux-toolkit/features/categoriesSlice";
import { getService } from "../../redux-toolkit/features/serviceSlice";
import CardCourse from "./CardCourse/CardCourse";

const Course = () => {
  const dispatch = useDispatch();

  const service = useSelector((state) => state.serv.services);
  const categories = useSelector((state) => state.cat.categories);

  useEffect(() => {
    dispatch(getService());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <span>Vse course</span>
      <div>
        {service.map((servic) => {
          return <CardCourse key={servic._id} servic={servic} />
        })}
      </div>
      <hr />
      <div>
        {categories.map((category) => {
          return <div key={category._id}> {category.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Course;
