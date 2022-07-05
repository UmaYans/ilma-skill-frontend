import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCategories } from "../../redux-toolkit/features/categoriesSlice";
import { getService } from "../../redux-toolkit/features/serviceSlice";
import { BsArrowRight } from "react-icons/bs";
import CardCourse from "./CardCourse/CardCourse";
import CartMap from "./CartMap/CartMap";
import style from "./Course.module.css";

const Course = () => {
  const { catId } = useParams();

  const dispatch = useDispatch();

  const services = useSelector((state) => state.serv.services);
  const categories = useSelector((state) => state.cat.categories);
  const loading = useSelector((state) => state.serv.loading);

  useEffect(() => {
    dispatch(getService());
    dispatch(getCategories());
  }, [dispatch]);

  function catService(id) {
    if (!catId) {
      const filter = services.filter((servic) => servic.catId?._id === id);
      return filter.slice(0, 2).map((servic) => {
        return <CardCourse key={servic._id} servic={servic} />;
      });
    } else {
      const filter = services.filter((servic) => servic.catId?._id === id);
      return filter.map((servic) => {
        return <CardCourse key={servic._id} servic={servic} />;
      });
    }
  }

  return (
    <div>
      {loading ? (
        <div className={style.loader}>Loading...</div>
      ) : (
        <div>
          <CartMap />
          <div className={style.card_main}>
            {!catId
              ? categories.map((cat, index) => {
                  return (
                    <div key={cat._id}>
                      <div className={style.categories_name}>{cat.name}</div>
                      <div className={style.catService}>
                        {catService(cat._id)}
                        <div className={style.card}>
                          <div className={style.card_img}></div>
                          <div className={style.nav_categ}>
                            <div className={style.icons_arrow}>
                              <NavLink
                                to={`../course/category/${cat._id}`}
                                className={style.nav_categ}
                              >
                                <div className={style.icon_color}>
                                  {" "}
                                  <BsArrowRight />
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : categories.map((cat) => {
                  if (cat._id === catId) {
                    return (
                      <div key={cat._id}>
                        <div className={style.cartMap_catName}>{cat.name}</div>
                        <div className={style.catService}>
                          {catService(cat._id)}
                        </div>
                      </div>
                    );
                  }
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
