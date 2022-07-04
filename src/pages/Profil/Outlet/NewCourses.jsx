import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux-toolkit/features/categoriesSlice";
import { postServiceByTeacher } from "../../../redux-toolkit/features/serviceSlice";
import def from "./img/defoltPhoto.png";
import style from "./style/NewCourse.module.css";

const NewCourses = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.cat.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(postServiceByTeacher());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [catId, setCatId] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [format, setFormat] = useState("");
  console.log(time);
  useEffect(() => {
    dispatch(postServiceByTeacher());
  });

  const hadnleAddCourse = () => {
    dispatch(
      postServiceByTeacher({
        name,
        time,
        catId,
        price,
        description,
        format,
        photo,
      })
    );
  };
  const handleChangeFormat = (e) => {
    setFormat(e.target.value);
  };

  const handleChagneDesc = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCatId = (e) => {
    setCatId(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <div>
      <p>Разместите курс</p>
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
              <input
                value={name}
                type="text"
                placeholder="Введите название курса..."
                onChange={handleChangeName}
              />
            </div>
            <div>
              <p>Описание курса</p>
              <textarea
                value={description}
                onChange={handleChagneDesc}
                id="description"
                name="description"
                rows="10"
                cols="33"
                placeholder="Введите описание..."
              >
                It was a dark and stormy nароight...
              </textarea>
            </div>
            <div>
              <p>Стоимость курса</p>
              <input
                value={price}
                type="number"
                placeholder="Введите cтоимость курса..."
                onChange={handleChangePrice}
              />
            </div>
            <div>
              <p>Категория курса</p>
              <select name="categories" onChange={handleChangeCatId}>
                {categories.map((category) => {
                  <option value={catId} selected disabled>
                    Выберите категорию{" "}
                  </option>;
                  return <option value={category._id}>{category.name}</option>;
                })}
              </select>
            </div>
            <div>
              <p>Формат обучения</p>
              <input
                // value={format}
                type="radio"
                id="Online"
                value="Online"
                onChange={handleChangeFormat}
              />
              <label for="Online">Online</label>
              <input type="radio" id="Offline" value="Offline" />
              <label for="Offline">Offline</label>
            </div>
            <div>
              <p>Время обучения</p>
              <input type="date" value={time} onChange={handleChangeTime} />
            </div>
            <div>
              <button onClick={hadnleAddCourse}>Добавить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCourses;
