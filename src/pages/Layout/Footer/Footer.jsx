import React from "react";
import style from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.cont}>
        <div className={style.block1}>
          <div className={style.menu}>Menu</div>
          <div className={style.glavnaym}>
            <NavLink className={style.glavnay} to="/">
              Главная
            </NavLink>
          </div>
          <div>
            <NavLink className={style.curs} to="/course">
              Курсы
            </NavLink>
          </div>
        </div>
        <div className={style.block2}>
          <div className={style.menu2}>Дополнительная информация</div>
          <div className={style.prav}>Правила и условия</div>
          <div className={style.polit}>Политика конфиденциальности</div>
        </div>

        <div className={style.block3}>
          <div className={style.title2}>I'lma-skill</div>
          <div className={style.text1}>
            Есть какие-либо отзывы или вопросы? Свяжитесь с нами в социальных
            сетях!
          </div>
          <div className={style.iconsBlock}>
            <div className={style.wrapper}>
              <div className={`${style.icon} ${style.twitter}`}>
                <img
                  className={style.twit}
                  src="https://www.svgrepo.com/show/318179/twitter.svg"
                  alt="phot"
                />
                <span className={style.tooltip}>Twitter</span>
              </div>
              <div className={`${style.icon} ${style.instagram}`}>
                <img
                  className={style.inst}
                  src="https://www.svgrepo.com/show/325307/instagram.svg"
                  alt="phot"
                />
                <span className={style.tooltip}>Instagram</span>
              </div>
              <div className={`${style.icon} ${style.youtube}`}>
                <img
                  className={style.you}
                  src="https://www.svgrepo.com/show/52968/youtube.svg"
                  alt="phot"
                />
                <span className={style.tooltip}>Youtube</span>
              </div>
              <div className={`${style.icon} ${style.facebook}`}>
                <img
                  className={style.face}
                  src="https://www.svgrepo.com/show/21065/facebook.svg"
                  alt="phot"
                />
                <span className={style.tooltip}>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
