import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import { Rating } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCorse,
  getUser,
  saveCorse,
} from "../../../redux-toolkit/features/usersSlice";
import { getServiceById } from "../../../redux-toolkit/features/serviceSlice";

const InfoCoutse = ({ user, token, id, servic, comments }) => {
  const dispatch = useDispatch();

  const commentsFind = comments.filter((item) => item._id === item._id);

  const rat = Math.floor(
    commentsFind.reduce((sum, item) => {
      return sum + item.grade;
    }, 0) / commentsFind.length
  );
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const isCourseSaved = user.saveCourses.find((course) => {
    return course._id === servic._id;
  });

  const handleSave = (id) => {
    dispatch(saveCorse(id));
  };

  const handleDelSave = (id) => {
    dispatch(deleteCorse(id));
  };

  return (
    <div className={style.main_info}>
      <div className={style.info}>
        <div className={style.text_block}>
          <div>
            <span className={style.text_one}>
              Профориентационный курс для новичков
            </span>
            <h2>Надежный старт в {servic.catId?.name}</h2>
            <h3>Курс {servic.name}</h3>

            <span className={style.text_one}>
              Определите подходящую вам профессию {servic.catId?.name}, освойте
              её с нуля и увеличьте свой доход
            </span>
            <ul className={style.list}>
              <li>Заработок 200 000 ₽/мес на уровне middle</li>
              <li>Стабильный заработок в комфортной валюте</li>
              <li>Удалённая работа из любой точки мира</li>
              <li>Льготная ипотека и отсрочка от армии</li>
            </ul>
            <div>
              <span>Доступные форматы обучения</span>
              <div className={style.formats_map}>
                {servic.format?.map((form, index) => (
                  <div
                    key={index}
                    className={`${style.fromats} ${
                      index % 2 !== 0 ? style.fromats_on : ""
                    }`}
                  >
                    {form}
                  </div>
                ))}
              </div>
              <div>
                <Stack direction="row" spacing={1}>
                  {!isCourseSaved ? (
                    <div onClick={() => handleSave(servic._id)}>
                      <IconButton color="secondary" aria-label="add an alarm">
                        <AlarmIcon />
                      </IconButton>
                    </div>
                  ) : (
                    <div onClick={() => handleDelSave(servic._id)}>
                      <IconButton color="secondary" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  )}

                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        <div className={style.img_block}>
          <div className={style.image_block}>
            <img src={servic.photo} alt={servic.name} />
          </div>

          <div className={style.rating_all}>
            Рейтинг курса:
            <Rating size="large" name="read-only" value={rat} readOnly />
          </div>
        </div>
      </div>
      <div className={style.banner}>
        <div>
          <div>Уровень</div>
          <div>Для новичков</div>
        </div>
        <div>
          <div>Трудоустройство</div>
          <div>Через 6 месяцев</div>
        </div>
        <div>
          <div>Длительность</div>
          <div>Через 6 месяцев</div>
        </div>
        <div>
          <div>Старт курса</div>
          <div>Через 6 месяцев</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCoutse;
