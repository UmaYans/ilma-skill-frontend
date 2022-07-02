import React, { useEffect, useState } from "react";
import styles from "./BlockOne.module.css";
import man from "./BlackBoy1.png";
import { getService } from "../../../redux-toolkit/features/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function BlockOne() {
  const service = useSelector((state) => state.serv.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  return (
    <div className={styles.rodBlock}>
      <div className={styles.leftBlock}>
        <div className={styles.childLeftBlock}>
          <Link to={"/course"}>
            <button className={styles.upbutton}>Ознакомиться с курсами</button>
          </Link>
          <h1>Развивайте свои навыки с помощью онлайн-курсов</h1>
          <p>
            Это глобальный поставщик учебных услуг, базирующийся по всей России
            и специализирующийся на аккредитованных и индивидуальных учебных
            курсах. Мы сокрушаем барьеры, чтобы получить степень.
          </p>
          <span className={styles.inputStyle}>
            <select className={styles.sele}>
              <option disabled={!true} value="1">
                Выберите категорию
              </option>
              {/* {console.log(service)} */}
              {service.map((services, num) => {
                return <option value={num + 1}>{services.name}</option>;
              })}
            </select>
            <input
              className={styles.inp}
              placeholder="найти нужный курс"
            ></input>
            <button> &#128269;Поиск</button>
          </span>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <img src={man} />
      </div>
    </div>
  );
}

export default BlockOne;
