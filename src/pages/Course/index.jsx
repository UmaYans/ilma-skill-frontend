import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCategories } from "redux/features/categoriesSlice";
import { getService } from "redux/features/serviceSlice";
import { BsArrowRight } from "react-icons/bs";

import style from "./Course.module.css";
import { CardCourse, CartMap } from "components/Course";

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

  if (!services || !categories || loading) {
    return (
      <div className={style.loader}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>

        <div className={style.covers}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

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
              : // eslint-disable-next-line array-callback-return
                categories.map((cat) => {
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
