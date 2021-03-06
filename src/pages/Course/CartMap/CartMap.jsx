import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "./CartMap.module.css";
import img from "./1.svg";
import img1 from "./f.svg";
import img2 from "./d.svg";
import { useSelector } from "react-redux";

function CartMap() {
  const [filtered, setFiltered] = useState([]);

  const categories = useSelector((state) => state.cat.categories);

  const handleCategory = (id) => {
    setFiltered(categories.filter((categ) => categ._catId === id));
  };

  return (
    <div className={style.main_cart_map}>
      <div className={style.banner}>
        <div className={style.banner_text}>
          Развивайте свои навыки, чтобы продвинуться по карьерной лестнице.
        </div>
        <div className={style.banner_img}>
          <img src={img} alt="" />
        </div>
      </div>
      <div className={style.rec}>
        <div className={style.div_one}>
          <div className={style.icon}>
            <div className={style.first_child}>
              <img src={img1} alt="" />
            </div>
            <div className={style.text_image}>
              <p>Найди новых друзей</p>
            </div>
          </div>
          <div className={style.text_one}>
            <p>
              На некоторых занятиях ты встретишь новых друзей. Поздоровайтесь с
              ними и подружитесь, это будет такая теплая дружба!
            </p>
          </div>
        </div>
        <div className={style.div_one}>
          <div className={style.icon}>
            <div className={style.first_child}>
              <img src={img2} alt="" />
            </div>
            <div className={style.text_image}>
              <p>Эксперт и веселый наставник</p>
            </div>
          </div>
          <div className={style.text_one}>
            <p>
              Учитесь усердно и не забывайте также отдыхать. Учитесь и
              наслаждайтесь материалами или занятиями с нашими опытными
              наставниками.
            </p>
          </div>
        </div>
      </div>
      <div className={style.rek}>
        <div>
          <h3>Чему вы хотите научиться?</h3>
        </div>
        <div>
          <p>
            Выберите правильный класс, как вам нужно. Тогда наслаждайтесь
            учебой.
          </p>
        </div>
      </div>
      <div className={style.ccc}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to={"/course"}
        >
          <div className={style.allCat}>Все </div>
        </NavLink>
        {categories.map((cat, index) => {
          return (
            <div key={cat._id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to={`../course/category/${cat._id}`}
              >
                <div className={style.cat_first}>
                  <div
                    className={style.catName}
                    onClick={() => handleCategory(cat._id)}
                  >
                    {cat.name}
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartMap;
