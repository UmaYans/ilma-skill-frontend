import React from "react";

const InfoCoutse = ({ user, token, id, servic }) => {
  return (
    <div>
      <div>
        <div>
          <span>Профориентационный курс для новичков</span>
          <h2>Надежный старт в {servic.catId?.name}</h2>
          <span>
            Определите подходящую вам профессию {servic.catId?.name}, освойте её
            с нуля и увеличьте свой доход
          </span>
          <ul>
            <li>Заработок 200 000 ₽/мес на уровне middle</li>
            <li>Стабильный заработок в комфортной валюте</li>
            <li>Удалённая работа из любой точки мира</li>
            <li>Льготная ипотека и отсрочка от армии</li>
          </ul>
          <div>
            {servic.format?.map((form) => <div >{form}</div> )}
          </div>
        </div>
        <div>{servic.name}</div>
      </div>
      <div>
        <img src={servic.photo} alt={servic.name} />
      </div>
    </div>
  );
};

export default InfoCoutse;
