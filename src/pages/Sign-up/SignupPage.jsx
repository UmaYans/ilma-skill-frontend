import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux-toolkit/features/usersSlice";

const SignupPage = () => {
  const dispatch = useDispatch();

  const signinUp = useSelector((state) => state.user.signinUp);
  const error = useSelector((state) => state.user.error);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("User");
  const [check, setCheck] = useState(false);

  //Валидация форм
  //Валидация форм

  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
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
      setPasswordError("Пароль должен быть длиннее 3 символов");
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
      console.log(setRole);
    }
    if (check) {
      setRole("User");
    }
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
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

  return (
    <div>
      {error}
      <h1>Регистрация</h1>
      <form action="" onChange={handlePrev}>
        <div>
          Имя
          <div className="inp1">
            {nameDirty && nameError && <div>{nameError}</div>}
            <input
              name="text"
              onBlur={handleBlur}
              value={firstName}
              type="text"
              placeholder="Введите имя..."
              onChange={hadleChangeName}
            />
          </div>
          Фамилия
          <div className="inp2">
            {lastNameDirty && lastNameError && <div>{lastNameError}</div>}
            <input
              name="lastName"
              onBlur={handleBlur}
              value={lastName}
              type="text"
              placeholder="Введите фамилию..."
              onChange={handleChangeLastName}
            />
          </div>
          Возраст
          <div>
            <input
              type="number"
              value={age}
              placeholder="Укажите возраст"
              onChange={handleChangeAge}
            />
          </div>
          Номер телефона
          <div>
            <input
              type="text"
              value={phone}
              placeholder="Введите номер телефона"
              onChange={handleChangePhone}
            />
          </div>
          Логин
          <div>
            {loginDirty && emailError && <div>{emailError}</div>}
            <input
              name="email"
              value={login}
              onBlur={handleBlur}
              type="text"
              placeholder="Введите логин.."
              onChange={handleChangeLogin}
            />
          </div>
          Пароль
          <div>
            {passwordDirty && passwordError && <div>{passwordError}</div>}
            <input
              name="password"
              onBlur={handleBlur}
              value={password}
              type="password"
              placeholder="Введите пароль..."
              onChange={handleChangePassword}
            />
          </div>
          <div>
            <input type="checkbox" value={check} onChange={handleRole} /> I`m
            Teacher
          </div>
        </div>
      </form>
      <div>
        <button disabled={signinUp} onClick={handleSubmit}>
          Зарегистрироваться
        </button>
        <p>
          Уже есть аккаунт? <Link to="../sign-in">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
