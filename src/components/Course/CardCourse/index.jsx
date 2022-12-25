import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./CardCorse.module.css";

const CardCourse = ({ servic }) => {
  const [check, setCheck] = useState(false);
  const readMore = () => {
    setCheck(!check);
  };

  return (
    <div className={style.card}>
      <div className={style.hover_text_one}>
        <NavLink to={`../course/${servic._id}`} className={style.nav_servName}>
          <figure className={style.effect__text_three}>
            <img src={`/public/${servic.image}`} alt={servic.name} />
            <figcaption>
              <h3> {servic.name}</h3>
              <p> </p>
            </figcaption>
          </figure>
        </NavLink>
      </div>

      <div className={style.course_info}>
        <div className={style.nav_servName_div}></div>

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
            )}
          </div>
        </div>
        <div>
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
