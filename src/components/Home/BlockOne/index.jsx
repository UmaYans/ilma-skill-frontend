import { useEffect } from "react";
import { getService } from "redux/features/serviceSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import styles from "./BlockOne.module.css";
import man from "./BlackBoy1.png";

function BlockOne() {
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
        </div>
      </div>
      <div className={styles.rightBlock}>
        <img src={man} alt="man" />
      </div>
    </div>
  );
}

export default BlockOne;
