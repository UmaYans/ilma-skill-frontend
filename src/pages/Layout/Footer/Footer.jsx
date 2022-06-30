import React from 'react';
import style from "./footer.module.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.cont}>
      <div className={style.block1}>
        <div>
      IlmaSkill
      </div>
      <div className={style.text1}>Any feedback or questions?Contact us on our social media</div>
      </div>
      <div className={style.block2}>
      <div className={style.menu}>
          Menu
        </div>
      <NavLink className={style.glavnay} to="/" >Главная</NavLink>
      </div>
      <div className={style.block3}>bdfnj sdj</div>
      </div>

    </div>
  );
};

export default Footer;