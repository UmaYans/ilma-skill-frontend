import React from "react";
import styles from "./BlockFive.module.css";
import teacher from "./Block5.png";
function BlockFive() {
  return (
    <div className={styles.rodBlock}>
      <div className={styles.images}>
        <img src={teacher} />
      </div>
      <div className={styles.texts}>
          <h1>
          Вы хотите поделиться своими знаниями? 
            Присоединяйтесь к нам в качестве наставника
          </h1>
          <p>
          Если вы обладаете какими-либо навыками, которые соответствуют одну из наших курсов,
           то заполните анкету и отправьте ее на почту ilma-skill@gmail.com 
          </p>
      </div>
    </div>
  );
}

export default BlockFive;
