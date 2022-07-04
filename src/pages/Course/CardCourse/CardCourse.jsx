import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./CardCorse.module.css";

const CardCourse = ({ servic }) => {
  const [check, setCheck] = useState(false);

  const readMore = () => {
    setCheck(!check);
  };

  return (
    <div className={style.card}>
      {/* <div className={style.card_img}>
        <img src={servic.photo} alt={servic.name} className={style.img} />
      </div> */}
      <div className={style.hover_text_one}>
        <NavLink to={`../course/${servic._id}`} className={style.nav_servName}>
          <figure className={style.effect__text_three}>
            <img src={servic.photo} alt={servic.name} />
            <figcaption>
              <h3> {servic.name}</h3>
              <p> </p>
            </figcaption>
          </figure>
        </NavLink>
      </div>

      <div className={style.course_info}>
        <div className={style.nav_servName_div}>
          {/* <NavLink
            to={`../course/${servic._id}`}
            className={style.nav_servName}
          >
            {servic.name}
          </NavLink> */}
        </div>

        <div className={style.text_block}>
          <div>
            {!check ? (
              <span>
                {servic.description.substring(0, 90)}
                <span onClick={readMore} className={style.button_second}>
                  ...
                </span>{" "}
              </span>
            ) : (
              <span onClick={readMore}>{servic.description}</span>
              // )
              // ? servic.description.substring(0, 90) + "..."
              // : servic.description
            )}
          </div>
          {/* <button onClick={readMore} className={style.button_second}>
            {!check ? "Подробнее>>" : "Скрыть >>"}
          </button> */}
        </div>
        <div>
          {/* <span className={style.online}>Online</span>
          <span className={style.offline}>Offline</span> */}
          <div className={style.format_card}>
            {servic.format.map((format, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? style.online : style.offline}`}
              >
                {format}
              </div>
            ))}
          </div>
        </div>
        <p>
          {servic.price} ₽ <s> {servic.oldPrice} </s>
        </p>
      </div>
    </div>
  );
};

export default CardCourse;
