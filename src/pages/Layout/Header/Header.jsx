import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux-toolkit/features/usersSlice";

const Header = () => {
  const users = useSelector((state) => state.user.users);
  const image = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <header className={style.header}>
      <div className={style.main}>
        <div className={style.populite}>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.slova2 : style.slova
            }
            to="/"
          >
            <div className={style.main_icon}>
            <div className={style.icons}>
              <img
                src="https://www.pinclipart.com/picdir/big/247-2470176_square-academic-cap-vector-png-download-clipart.png"
                alt=""
              />
            </div>
            <div className={style.denomination}>I'lma-skill</div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.slova2 : style.slova
            }
            to="/course"
          >
            Курсы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.slova2 : style.slova
            }
            to="/profile"
          >
            Профиль
            <img
              className={style.img}
              src={
                image.avatar
                  ? `http://localhost:4100/${image.avatar}`
                  : users.avatar
              }
              alt="name"
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
