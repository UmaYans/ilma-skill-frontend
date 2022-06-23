import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux-toolkit/features/usersSlice";

const SignupPage = () => {
  const dispatch = useDispatch();

  const signinUp = useSelector((state) => state.user.signinUp);
  const error = useSelector((state) => state.user.error);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("User");
  const [check, setCheck] = useState(false);

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

  const hadleChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = ()=> {
    dispatch(registerUser({login,firstName,lastName,password,phone,role}))
    setPassword('')
    setPhone('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div>
      {error}
      <h1>Регистрация</h1>
      <div>
        Имя
        <div className="inp1">
          <input
            value={firstName}
            type="text"
            placeholder="Введите имя..."
            onChange={hadleChangeName}
          />
        </div>
        Фамилия
        <div className="inp2">
          <input
            value={lastName}
            type="text"
            placeholder="Введите фамилию..."
            onChange={handleChangeLastName}
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
          <input
            value={login}
            type="text"
            placeholder="Введите логин.."
            onChange={handleChangeLogin}
          />
        </div>
        Пароль
        <div>
          <input
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
      <div>
        <button disabled={signinUp} onClick={handleSubmit}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default SignupPage;
