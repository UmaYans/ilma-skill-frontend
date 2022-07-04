import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServiceTeacher } from "../../../redux-toolkit/features/serviceSlice";
import { getUser } from "../../../redux-toolkit/features/usersSlice";

const MyCourses = () => {

    const dispatch = useDispatch();
  
    // const user = useSelector((state) => state.user.users);
    // const loading = useSelector((state) => state.user.loading);

    const services = useSelector(state => state.serv.teacherService)
    const loading = useSelector(state => state.serv.loading)
  
    useEffect(() => {
      dispatch(getUser());
      dispatch(getServiceTeacher())
    }, [dispatch]);
  
    console.log(services);
  
    if (!services || loading) {
      return <div>...</div>;
    }

  return (
    <div>
      <p>Мои размещенные курсы </p>
      <div>
        {services.length === 0 ? <div>Нет размещенных курсов.Добавить <Link to="/profile/newCurses" >курс?</Link>  </div> : 
        services.map(service => <div key={service._id} > {service.name}</div> )
        }
      </div>
    </div>
  );
};

export default MyCourses;