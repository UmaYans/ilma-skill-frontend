import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlockFour.module.css";
import blackMan from "./Image.png";

function BlockFour(props) {
  return (
    <div className={styles.rodBlock1}>
      <div className={styles.rodBlock}>
        <div className={styles.texts}>
          <h1>
            Не теряйте времени во время пандемии COVID-19. Развивайте свои
            навыки.
          </h1>
          <p>
            Видео высокой четкости - это видео с более высоким разрешением и
            качеством, чем в стандартной четкости. Хотя не существует
            стандартизированного значения для видео высокой четкости, как
            правило, для любого видео.
          </p>
          <Link to={"/sign-in"}>
            <div className={styles.blocks}>
              <button className={styles.buttons}>Зарегистрироваться</button>
            </div>
          </Link>
        </div>

        <div className={styles.images}>
          <img alt="blackMan" src={blackMan} />
        </div>
      </div>
    </div>
  );
}

export default BlockFour;
