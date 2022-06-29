import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategories } from "../../redux-toolkit/features/categoriesSlice";
import {
  getService,
  getServiceById,
} from "../../redux-toolkit/features/serviceSlice";
import CardCourse from "./CardCourse/CardCourse";
import CartMap from "./CartMap/CartMap";
import style from "./Course.module.css";

const Course = () => {
  const { catId } = useParams();

  const [filtered, setFiltered] = useState([]);

  const dispatch = useDispatch();

  const services = useSelector((state) => state.serv.services);
  const categories = useSelector((state) => state.cat.categories);
  useEffect(() => {
    dispatch(getService());
    dispatch(getCategories());
    dispatch(getServiceById(catId));
  }, [dispatch]);

  function catService(id) {
    return services.map((servic) => {
      if (servic.catId === id) {
        return <CardCourse key={servic._id} servic={servic} />;
      }
    });
  }

  
  return (
    <div>
      <CartMap />
      <div className={style.card_main}>
        {!catId
          ? categories.map((cat, index) => {
              return (
                <>
                  {/* {index === 3 && <div>Тут может быть ваша реклама</div>} */}
                  <div className={style.categories_name} key={cat._id}>
                    {cat.name}
                  </div>
                  <div className={style.catService}> {catService(cat._id)}</div>
                </>
              );
            })
          : categories.map((cat) => {
              if (cat._id === catId) {
                return (
                  <>
                    <div>{cat.name}</div>
                    <div className={style.catService}>
                      {" "}
                      {catService(cat._id)}
                    </div>
                  </>
                );
              }
            })}
      </div>
    </div>
  );
};

export default Course;
