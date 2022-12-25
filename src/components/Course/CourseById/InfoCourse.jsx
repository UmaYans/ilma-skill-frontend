import { useEffect } from "react";
import style from "./Cart.module.css";
import Stack from "@mui/material/Stack";
import { Rating } from "@mui/material";

import { useDispatch } from "react-redux";
import {
  deleteCorse,
  entryCourse,
  getUser,
  saveCorse,
} from "redux/features/usersSlice";

const InfoCoutse = ({
  user,
  token,
  id,
  servic,
  comments,
  isCourseSaved,
  isCourseBuy,
}) => {
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

  // const isCourseSaved = user.saveCourses.find((course) => {
  //   return course._id === servic._id;
  // });

  const handleSave = (id) => {
    dispatch(saveCorse(id));
  };

  const handleDelSave = (id) => {
    dispatch(deleteCorse(id));
  };

  const handleEntry = (id) => {
    dispatch(entryCourse(id));
  };

  function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();

    let time = date + " " + month + " " + year;
    return time;
  }

  function timeDiff() {
    var diff = Math.floor((servic.time.end - servic.time.start) / 1000),
      units = [
        { d: 24, l: "дней" },
        { d: 7, l: "недель" },
      ];

    var s = "";
    for (var i = 0; i < units.length; ++i) {
      s = (diff % units[i].d) + " " + units[i].l + " " + s;
      diff = Math.floor(diff / units[i].d);
    }
    return s;
  }

  console.log(servic, "es");

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
                  <div>
                    <div className={style.button_Course}>
                      <button
                        disabled={isCourseSaved}
                        onClick={() => handleSave(servic._id)}
                        className={`${style.saveCourse} ${
                          isCourseSaved ? style.saveCourseDis : ""
                        }`}
                      >
                        {!isCourseSaved ? "Сохранить" : "Сохранено"}
                      </button>
                      <button
                        disabled={isCourseBuy}
                        onClick={() => handleEntry(servic._id)}
                        className={`${style.buyCourse} ${
                          isCourseBuy ? style.buyCourseDis : ""
                        }`}
                      >
                        {isCourseBuy ? "Курс оплачен" : "Оплатить"}
                      </button>
                    </div>
                    {isCourseSaved && (
                      <div
                        onClick={() => handleDelSave(servic._id)}
                        className={style.delSaveCourse}
                      >
                        Удалить
                      </div>
                    )}
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        <div className={style.img_block}>
          <div className={style.image_block}>
            <img src={`/public/${servic.image}`} alt={servic.name} />
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
          <div>{timeDiff(servic)}</div>
        </div>
        <div>
          <div>Старт курса</div>
          <div>{timeConverter(servic.time.start)}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCoutse;
