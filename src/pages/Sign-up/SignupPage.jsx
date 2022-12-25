/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import InputMask from "react-input-mask";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux-toolkit/features/usersSlice";
import style from "./Signup.module.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import img from "./img.svg";

const SignupPage = () => {
  const dispatch = useDispatch();

  const signinUp = useSelector((state) => state.user.signinUp);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("User");
  const [check, setCheck] = useState(false);

  const [state, setState] = useState(false);

  const disabled =
    firstName && lastName && login && password && phone && role && age;

  //Валидация форм
  //Валидация форм

  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле ввода не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль  не может быть пустым"
  );
  const [nameError, setNameError] = useState("Поле ввода не может быть пустым");
  const [lastNameError, setLastNameError] = useState(
    "Поле ввода не может быть пустым"
  );
  const [phoneError, setPhoneError] = useState(false);

  const hadleChangeName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError("Имя  должно быть длиннее 3 символов");
      if (!e.target.value.length) {
        setNameError("Заполните поле");
      }
    } else if (e.target.value.length > 10) {
      setNameError("Имя не должно быть длинне 10 символов");
    } else {
      setNameError("");
    }
  };

  const handlePhoneError = (e) => {
    setPhone(e.target.value);
    if (e.target.value.length <= 9) {
      setPhoneError("номер не должен быть короче 9 цифр");
      if (!e.target.value.length) {
        setPhoneError("Заполните поле");
      }
    }
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 3) {
      setLastNameError("Фамилия  должна быть длиннее 3 символов");
      if (!e.target.value.length) {
        setLastNameError("Заполните поле");
      }
    } else {
      setLastNameError("");
    }
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setEmailError("Поле ввода не может быть пустым");
      }
    } else {
      setEmailError("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordError("Пароль не может содержать меньше 3-х символов");
      if (!e.target.value) {
        setPasswordError("Заполните поле");
      }
    } else if (e.target.value.length > 10) {
      setPasswordError("Пароль не должен быть длиннее 10 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleRole = () => {
    setCheck(!check);
    if (!check) {
      setRole("Teacher");
    }
    if (check) {
      setRole("User");
    }
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      registerUser({ login, firstName, age, lastName, password, phone, role })
    );
    setPassword("");
    setPhone("");
    setFirstName("");
    setLastName("");
    setLogin("");
    setAge("");
  };

  const handlePrev = (e) => {
    e.preventDefault();
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "text":
        setNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      default:
        return false;
    }
  };

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className={style.body}>
      <div className={style.img}>
        <div>
          <h1>Добро пожаловать на платформу онлайн-обучения I'lma-skill</h1>
        </div>
        <div>
          <img src={img} alt="#" />
        </div>
      </div>
      <div className={style.content}>
        {" "}
        <h1>Регистрация</h1>
        <form action="" onSubmit={handlePrev}>
          <div className={style.div}>
            <p>Имя</p>
            <div className="inp1">
              <div className={style.error}>
                {nameDirty && nameError && <div>{nameError}</div>}
              </div>
              <img
                src="https://www.svgrepo.com/show/368760/id.svg"
                alt="phot"
                className={style.nameImg}
              />
              <input
                className={style.input}
                name="text"
                onBlur={handleBlur}
                value={firstName}
                type="text"
                placeholder="Введите имя..."
                onChange={hadleChangeName}
              />
            </div>
            <p>Фамилия</p>
            <div className="inp2">
              <div className={style.error}>
                {lastNameDirty && lastNameError && <div>{lastNameError}</div>}
              </div>
              <img
                src="https://www.svgrepo.com/show/368760/id.svg"
                alt="phot"
                className={style.nameImg}
              />
              <input
                className={style.input}
                name="lastName"
                onBlur={handleBlur}
                value={lastName}
                type="text"
                placeholder="Введите фамилию..."
                onChange={handleChangeLastName}
              />
            </div>
            <p>Возраст</p>
            <div>
              <img
                src="https://www.svgrepo.com/show/22720/image.svg"
                alt="phot"
                className={style.nameImg}
              />
              <input
                className={style.input}
                type="number"
                value={age}
                placeholder="Укажите возраст"
                onChange={handleChangeAge}
              />
            </div>
            <p> Номер телефона</p>
            <div>
              <div className={style.error}>
                {phoneDirty && phoneError && <div>{phoneError}</div>}
              </div>
              <img
                src="            https://www.svgrepo.com/show/39091/telephone.svg                "
                alt="phot"
                className={style.nameImg}
              />

              <InputMask
                name="phone"
                mask="+7(999)-999-99-99"
                className={style.input}
                type="text"
                placeholder="+7 (123)-456-78-90"
                value={phone}
                onBlur={handleBlur}
                onChange={handlePhoneError}
              ></InputMask>
            </div>
            <p> Логин</p>
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
                className={style.input}
                name="email"
                value={login}
                onBlur={handleBlur}
                type="text"
                placeholder="Введите логин.."
                onChange={handleChangeLogin}
              />
            </div>
            <p> Пароль</p>
            <div className={style.div_wrapper}>
              <div className={style.error}>
                {passwordDirty && passwordError && <div>{passwordError}</div>}
              </div>

              <button onClick={toggleBtn} className={style.imgEye}>
                {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
              <input
                className={style.input}
                name="password"
                onBlur={handleBlur}
                value={password}
                type={!state ? "password" : "text"}
                placeholder="Введите пароль..."
                onChange={(e) => handleChangePassword(e)}
              />
            </div>
            <div className={style.role}>
              <input type="checkbox" value={check} onChange={handleRole} /> I`m
              Teacher
            </div>
          </div>
        </form>
        <div className={style.reg}>
          <button disabled={signinUp || !disabled} onClick={handleSubmit}>
            <Link
              to="../sign-in"
              className={`${style.link} ${
                signinUp || !disabled ? style.disabledlink : ""
              }`}
            >
              {" "}
              Зарегистрироваться
            </Link>
          </button>
          <p>
            Уже есть аккаунт? <Link to="../sign-in">Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
