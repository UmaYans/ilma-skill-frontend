import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pathAvatar, getUser } from "../../redux-toolkit/features/usersSlice";
import style from "./profile.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const Profil = (id, user) => {
  const image = useSelector((state) => state.user.users);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const unSign = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const pathAva = (file) => {
    dispatch(pathAvatar({ file }));
    localStorage.setItem("avatar", user?.avatar);
  };
  if (!users) {
    return  <div>...</div>;
  }

  const handleClick = () => {
    setClick(true);
  };


  return (
    <div className={style.body}>
      <div className={style.main}>
        <div className={style.profile}>Mой профиль</div>
        <div className={style.conainer}>
          <div className={style.avaBlock}>
            <label className={style.pathPhot} htmlFor="upload">
              <FaRegEdit className={style.iconPath} />
            </label>
            <img
              className={style.img}
              src={
                image?.avatar
                  ? `http://localhost:4100/${image.avatar}`
                  : users?.avatar
                 }
              alt=""
            />
          </div>
          <div className={style.ava}>
            <input
              className={style.input}
              id="upload"
              accept="image"
              type="file"
              onChange={(e) => {
                pathAva(e.target.files[0]);
              }}
            />
          </div>
          <div>
            <div className={style.info}>

              <div className={style.userName}>Имя: {users?.firstName}</div>
              <div className={style.userLastname}>
                Фамилия: {users?.lastName}
              </div>
              <div className={style.age}>Возраст: {users?.age}</div>
               <div>Баланс:{users.money}</div>
              {/* <button onClick={() => handleClick()}>Пополнить</button>
              {setClick ? <div>123</div> : null} */}
            </div>
          </div>
        </div>
        <div className={style.cont2}>
          <div className={style.email}>Email: {users?.login}</div>
          <div className={style.phone}>Номер телефона: {users?.phone}</div>
          <hr className={style.horiz}></hr>
        </div>
        <div className={style.cont3}>
          <div className={style.sidebar}>
            <div className={style.title}>I'lma-skill</div>
            <hr className={style.horiz2}></hr>
            <div className={style.obsh1}>
              <NavLink className={style.obsh} to="/profile">Мои комментарии</NavLink>{" "}
            </div>
            <div className={style.obsh1}>
              <NavLink className={style.obsh} to="/profile/buyCourses">Купленные курсы</NavLink>{" "}
            </div>
            <div className={style.obsh1}>
              <NavLink className={style.obsh} to="/profile/saveCurses">Сохраненные курсы</NavLink>{" "}
            </div>
            {users?.role === "Teacher" && (
              <>
                <div className={style.obsh1}>
                  <NavLink className={style.obsh} to="/profile/myCurses">Мои курсы</NavLink>
                </div>
                <div className={style.obsh1}>
                  <NavLink className={style.obs} to="/profile/newCurses">Разместить курс</NavLink>
                </div>
              </>
            )}
            <div>
              <button className={style.exit} onClick={unSign}>
                <Link className={style.textBot} to="/sign-in">
                  Выйти ←]
                </Link>
              </button>
            </div>
          </div>
          <div className={style.cont3_wrap}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
