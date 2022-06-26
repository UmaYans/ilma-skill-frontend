import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pathAvatar, getUser } from "../../redux-toolkit/features/usersSlice";
import style from "./profile.module.css";

const Profil = (id, user) => {
  const image = useSelector((state) => state.user.userAvatar);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const handlePathAvatar = (file) => {
    dispatch(pathAvatar({ file, id }));
    localStorage.setItem("avatar", user.avatar);
  };

  return (
    <div>
      <img className={style.img}
        src={
          image.avatar ? `http://localhost:4100/${users.avatar}` 
          : users.avatar
        }
        alt=""
        
      />
      <div>Имя: {users.firstName}</div>
      <div>фамилия: {users.lastName}</div>
    </div>
  );
};

export default Profil;
