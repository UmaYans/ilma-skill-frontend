import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.main}>
        <div className={style.populite}>
          <div className={style.denomination}>Iilma-skill</div>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.slova2 : style.slova
            }
            to="/"
          >
            Главная
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
            Личный кабинет
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
