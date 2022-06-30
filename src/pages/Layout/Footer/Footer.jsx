import React from "react";
import style from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.cont}>
        <div className={style.block1}>
          <div className={style.menu}>Menu</div>
          <NavLink className={style.glavnay} to="/">
            Главная
          </NavLink>
          <div>Правила и условия</div>
          <div>Политика конфиденциальности</div>
        </div>
        <div className={style.block2}>
          Дополнительная информация
        </div>
        <div className={style.block3}>
          <div className={style.title2}>IlmaSkill</div>
          <div className={style.text1}>
            any feedback or questions?Contact us on our social media
          </div>
          <div className={style.iconsBlock}>
            <img src="https://www.svgrepo.com/show/325307/instagram.svg" className={style.inst} alt="phot" />
            <img src="https://www.svgrepo.com/show/154916/facebook.svg" className={style.face} alt="phot"/>
            <img src="https://www.svgrepo.com/show/361183/github-alt.svg" className={style.git} alt="phot" />
            <img src="https://www.svgrepo.com/show/204341/vk-vk.svg" className={style.vk} alt="phot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
