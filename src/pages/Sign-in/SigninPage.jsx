import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../redux-toolkit/features/usersSlice";
import style from "./SigninPage.module.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import img from "./img.svg";
const SigninPage = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dis = login && password;

  const [state, setState] = useState(false);

  //Валидация форм
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле ввода не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль  не может быть пустым"
  );

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setLoginDirty(true);
        setEmailError("Поле ввода не может быть пустым");
      }
    } else {
      setLoginDirty(false);

      setEmailError("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordDirty(true);

      setPasswordError("Пароль должен быть длиннее 3 символов");
      if (!e.target.value) {
        setPasswordDirty(true);

        setPasswordError("Заполните поле");
      }
    } else if (e.target.value.length > 10) {
      setPasswordDirty(true);

      setPasswordError("Пароль не должен быть длиннее 10 символов");
    } else {
      setPasswordDirty(false);

      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAuth = () => {
    dispatch(auth({ login, password }));
    setLogin("");
    setPassword("");
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        return false;
    }
  };

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className={style.main}>
      <div className={style.img}>
        <div>
          <h1>Добро пожаловать на платформу онлайн-обучения I'lma-skill</h1>
        </div>
        <div>
          <img src={img} alt="#" />
        </div>
      </div>
      <div className={style.second}>
        <div className={style.backGround}>
          <div className="container">
            <form action="" onSubmit={handleSubmit} className={style.content}>
              <div className={style.auth}>
                {" "}
                <div className={style.title}>Авторизация</div>
              </div>
              <div className={style.userLog}>Логин</div>
              <div>
                <div className={style.error}>
                  {loginDirty && emailError && <div>{emailError}</div>}
                </div>
                <img
                  src="https://www.svgrepo.com/show/302497/profile.svg"
                  className={style.imgIcon}
                  alt="phot"
                />
                <input
                  name="login"
                  onBlur={(e) => handleBlur(e)}
                  type="text"
                  onChange={(e) => handleChangeLogin(e)}
                  placeholder="Enter login..."
                  value={login}
                  className={style.input1}
                />
              </div>
              <div className={style.userProf}>Пароль</div>
              <div>
                <div className={style.error}>
                  {passwordDirty && passwordError && <div>{passwordError}</div>}
                </div>

                <button onClick={toggleBtn} className={style.imgEye}>
                  {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
                <input
                  onBlur={(e) => handleBlur(e)}
                  name="password"
                  type={state ? "text" : "password"}
                  onChange={(e) => handleChangePassword(e)}
                  placeholder="Enter password"
                  value={password}
                  className={style.input1}
                />
              </div>
              <div>
                <button
                  className={`${style.link} ${!dis ? style.disabledlink : ""}`}
                  onClick={handleAuth}
                  disabled={!dis}
                >
                  Войти
                </button>
              </div>
              <div className={style.noA}>
                <p>
                  Нет аккаунта?{" "}
                  <Link className={style.registr} to="/sign-up">
                    Зарегистрируйтесь!
                  </Link>
                </p>
              </div>
              <div className={style.gestMain}>
                Войти как{" "}
                <Link className={style.gest} to="/">
                  Гость.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
