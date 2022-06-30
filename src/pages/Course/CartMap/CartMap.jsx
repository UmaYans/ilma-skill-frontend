import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

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
    <div>
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
            <div>
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
            <div>
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
        <NavLink to={"/course"}>
          <div>Все </div>
        </NavLink>
        {categories.map((cat, index) => {
          return (
            <>
              <NavLink to={`../course/category/${cat._id}`}>
                <div className={style.cat_first} key={cat._id}>
                  <div
                    className={style.catName}
                    onClick={() => handleCategory(cat._id)}
                  >
                    {cat.name}
                  </div>
                </div>
              </NavLink>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CartMap;
