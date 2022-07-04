import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux-toolkit/features/categoriesSlice";
import def from "./img/defoltPhoto.png";
import style from "./style/NewCourse.module.css";

const NewCourses = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.cat.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <p className={style.titleCourse}>Разместите курс</p>
      <div className={style.newCourse}>
        <div className={style.newCourse_wrap}>
          <span>Выберие фотографию для курса </span>
          <div className={style.newCourse_img}>
            <img src={def} alt="Course" />
          </div>
        </div>
        <div className={style.newCourse_inp}>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div>
              <p>Название курса</p>
              <input className={style.inp1} type="text" placeholder="Введите название курса..." />
            </div>
            <div>
              <p>Описание курса</p>
              <textarea
                id="description"
                name="description"
                rows="10"
                cols="33"
                placeholder="Введите описание..."
                className={style.textAr}
              >
                It was a dark and stormy nароight...
              </textarea>
            </div>
            <div>
              <p>Стоимость курса</p>
              <input className={style.inp2} type="number" placeholder="Введите cтоимость курса..." />
            </div>
            <div>
              <p>Категория курса</p>
              <select className={style.select} name="categories">
                {categories.map((category) => {
                  <option value="value1" selected disabled>
                    Выберите категорию{" "}
                  </option>;
                  return <option value={category._id}>{category.name}</option>;
                })}
              </select>
            </div>
            <div>
              <p>Формат обучения</p>
              <input type="radio" id="Online" value="Online"  />
              <label for="Online">Online</label>
              <input type="radio" id="Offline" value="Offline"  />
              <label for="Offline">Offline</label>
            </div>
            <div>
              <p>Время обучения</p>
              <input type="date" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCourses;
