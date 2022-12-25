import React from "react";
import styles from "./BlcokTwo.module.css";
import calling from "./Uroks.png";
import sound from "./sound.png";
import live from "./live.png";
import play from "./play.png";
import { Link } from "react-router-dom";

function BlockTwo(props) {
  return (
    <div className={styles.rodBlock}>
      {/* /// Заголовок и текст */}
      <div className={styles.title}>
        <h1>Высококачественное видео, аудио и живые занятия</h1>
        <p>
          Видео высокой четкости - это видео с более высоким разрешением и
          качеством, чем в стандартной четкости. Хотя стандартизированного
          значения для высокой четкости не существует, обычно любое
          видеоизображение, содержащее значительно более 480 строк вертикальной
          развертки или 576 вертикальных линий, считается высоким разрешением.
        </p>
        <Link to={`/course`}>
          <button>Посетить курсы</button>
        </Link>
      </div>

      {/* Картинка */}
      <div className={styles.images}>
        <img src={calling} />
        {/* кнопки */}
        <div className={styles.buutons}>
          <button>
            <div className={styles.bro}>
              <img className={styles.icon} src={sound} />
              <span className={styles.texts}>Аудио занятия</span>
            </div>
          </button>

          <button style={{ margin: "auto 3% auto 3%" }}>
            <div className={styles.bro}>
              <img className={styles.icon} src={live} />
              <span className={styles.texts}> Живые уроки</span>
            </div>
          </button>

          <button>
            <div className={styles.bro}>
              <img className={styles.icon} src={play} />
              <span className={styles.texts}> Записанные занятия</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlockTwo;
