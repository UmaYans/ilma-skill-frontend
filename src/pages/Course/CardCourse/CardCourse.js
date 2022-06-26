import React from "react";
import { NavLink } from "react-router-dom";

const CardCourse = ({ servic }) => {
  console.log(servic);
  return (
    <div>
      <div>
        <img src={servic.photo} alt={servic.name} />
      </div>
      <div>
        <NavLink to={`/course/${servic._id}`}> {servic.name}</NavLink>
      </div>
    </div>
  );
};

export default CardCourse;
