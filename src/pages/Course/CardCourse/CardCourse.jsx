import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CardCorse.module.css"

const CardCourse = ({ servic }) => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img src={servic.photo} alt={servic.name}  className={style.img} />
      </div>
      <div>
        <NavLink to={`/course/${servic._id}`}> {servic.name}</NavLink>
      </div>
    </div>
  );
};

export default CardCourse;
