import React from "react";
import styles from "./BlockOne.module.css";
import man from "./BlackBoy1.png";
function BlockOne() {
  return (
    <div className={styles.rodBlock}>
      <div className={styles.leftBlock}>
        <div className={styles.childLeftBlock}>
          <button className={styles.upbutton}>Ознакомиться с курсами</button>
          <h1>Развивайте свои навыки с помощью онлайн-курсов</h1>
          <p>
            Это глобальный поставщик учебных услуг, базирующийся по всей России
            и специализирующийся на аккредитованных и индивидуальных учебных
            курсах. Мы сокрушаем барьеры, чтобы получить степень.
          </p>
          <span className={styles.inputStyle}>
            <select className={styles.sele}>
              <option value="0">Выбрать направление</option>
              <option value="1">ЕГЭ и ОГЭ</option>
              <option value="2">Иностранные языки</option>
              <option value="3">IT</option>
              <option value="4">Веб Дизайн</option>
              <option value="5">Маркетинг</option>
              <option value="6">Дизайн и UX</option>
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
