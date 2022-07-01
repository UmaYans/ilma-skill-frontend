import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./CardCorse.module.css";

const CardCourse = ({ servic }) => {
  const [check, setCheck] = useState(false);

  const readMore = () => {
    if (!check) {
      return servic.description;
    } else {
      return servic.description.substring(0, 100) + "...";
    }
  };

  console.log(servic);
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img src={servic.photo} alt={servic.name} className={style.img} />
      </div>
      <div className={style.course_info}>
        <div>
          <NavLink to={`/course/${servic._id}`} className={style.nav_servName}>
            {" "}
            {servic.name}
          </NavLink>
        </div>

        <div className={style.text_block}>
          <p>{servic.description.substring(0, 100) + "..."}</p>
          <button onClick={readMore}>Подробнее</button>
        </div>
        <p>
          {servic.price} ₽ <s> {servic.oldPrice} </s>
        </p>
      </div>
    </div>
  );
};

export default CardCourse;
