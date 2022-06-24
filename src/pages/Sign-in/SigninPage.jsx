import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../redux-toolkit/features/usersSlice";
import style from "./SigninPage.module.css";

const SigninPage = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //Валидация форм
  const [loginDirty, setLoginDirty] = useState(true);
  const [passwordDirty, setPasswordDirty] = useState(true);
  const [emailError, setEmailError] = useState(
    "Поле ввода не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль  не может быть пустым"
  );

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
      default:
        return false;
    }
  };

  return (
    <div className={style.main}>
      <div className={style.backGround}>
        <div className="container">
          <form action="" onSubmit={handleSubmit} className={style.content}>
            <div>
              {" "}
              <div className={style.title}>Авторизация</div>
            </div>
            <div>{error}</div>
            <div className={style.userLog}>Логин</div>
            <div>
              {loginDirty && emailError && <div>{emailError}</div>}
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
              {passwordDirty && passwordError && <div>{passwordError}</div>}
              <img
                src="https://www.svgrepo.com/show/380010/eye-password-show.svg"
                alt="phot"
                className={style.imgEye}
              />
              <input
                onBlur={(e) => handleBlur(e)}
                name="password"
                type="password"
                onChange={(e) => handleChangePassword(e)}
                placeholder="Enter password"
                value={password}
                className={style.input1}
              />
            </div>
            <div>
              <button
                disabled={loginDirty || passwordDirty || !login || !password}
                className={style.button}
                onClick={handleAuth}
              >
                Войти
              </button>
            </div>
            <div>
              <p>
                Нет аккаунта?{" "}
                <Link className={style.auth} to="/sign-up">
                  Зарегистрируйтесь!
                </Link>
              </p>
            </div>
            <div className={style.gestMain}>
              Войти как{" "}
              <Link className={style.gest} to="/">
                гость
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
