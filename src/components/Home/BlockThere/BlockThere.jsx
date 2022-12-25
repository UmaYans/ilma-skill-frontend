import { useEffect } from "react";
import { getService } from "../../../redux-toolkit/features/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BlockThere.module.css";
import { Link } from "react-router-dom";

function BlockThere() {
  const service = useSelector((state) => state.serv.services);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getService());
  });
  return (
    <div className={styles.titleBlock}>
      <div className={styles.title}>
        <h1>Квалифицированные уроки для студентов</h1>
        <p>
          Урок или класс - это структурированный период времени, в течение
          которого предполагается обучение. Она включает в себя обучение одного
          или нескольких студентов учителем или инструктором.
        </p>
      </div>
      <div className={styles.rodBlock}>
        {service.slice(12, 20).map((services, num) => {
          return (
            <div key={services._id}>
              <div className={styles.cardBlcok}>
                {/* <>{services.name}</> */}
                <div>
                  <div className={styles.number}>
                    <b>
                      <p
                        className={
                          num % 3 == 0
                            ? styles.radius
                            : num % 4 == 0
                            ? styles.radius4
                            : num % 5 == 0
                            ? styles.radius2
                            : num % 6 == 1
                            ? styles.radius3
                            : styles.radius4
                        }
                      >
                        {num + 1}
                      </p>
                    </b>
                  </div>
                  <h1 style={{ textAlign: "center" }}>{services.name}</h1>
                  <div className={styles.discription}>
                    {services.description}
                  </div>
                </div>
                <Link to={`/course/${services._id}`}>
                  <button className={styles.click}>Перейти к курсу</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={`/course`}>
        <button className={styles.buttons}>Посмотреть все курсы</button>
      </Link>
    </div>
  );
}

export default BlockThere;
