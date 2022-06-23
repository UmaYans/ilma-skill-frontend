import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/" >Главная</NavLink>
      <NavLink to="/course">Курсы</NavLink>
      <NavLink to="/profile">Личный кабинет</NavLink>
    </header>
  );
};

export default Header;