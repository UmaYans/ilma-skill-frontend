import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getServiceTeacher } from "redux/features/serviceSlice";
import { getAllUsers, getUser } from "redux/features/usersSlice";
import style from "./style/MyCourse.module.css";

const MyCourses = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  const services = useSelector((state) => state.serv.teacherService);
  const loading = useSelector((state) => state.serv.loading);

  const readMore = () => {
    setCheck(!check);
  };

  useEffect(() => {
    dispatch(getUser());
    dispatch(getServiceTeacher());
    dispatch(getAllUsers());
  }, [dispatch]);

  if (!services || loading) {
    return <div>...</div>;
  }

  return (
    <div>
      <p>Мои размещенные курсы </p>
      <div className={style.wrapper}>
        {services.length === 0 ? (
          <div>
            Нет размещенных курсов.Добавить{" "}
            <Link to="/profile/newCurses">курс?</Link>{" "}
          </div>
        ) : (
          services.map((service) => {
            return (
              <div className={style.card}>
                <div className={style.hover_text_one}>
                  <NavLink
                    to={`/course/${service._id}`}
                    className={style.nav_servName}
                  >
                    <figure className={style.effect__text_three}>
                      <img
                        src={`/public/${service.image}`}
                        alt={service.name}
                      />
                      <figcaption>
                        <h3> {service.name}</h3>
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
                          {service.description.substring(0, 90)}
                          <span
                            onClick={readMore}
                            className={style.button_second}
                          >
                            ...
                          </span>{" "}
                        </span>
                      ) : (
                        <span onClick={readMore}>{service.description}</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className={style.format_card}>
                      {service.format.map((format, index) => (
                        <div
                          key={index}
                          className={`${
                            index % 2 === 0 ? style.online : style.offline
                          }`}
                        >
                          {format}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p>
                    {service.price} ₽ <s> {service.oldPrice} </s>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyCourses;
