import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCommentByServiceId } from "redux/features/commentsSlice";
import { getServiceById } from "redux/features/serviceSlice";
import { getUser } from "redux/features/usersSlice";

import Commnts from "./Comments";
import InfoCourse from "./InfoCourse";
import style from "./CourseById.module.css";
import VideoChat from "./VideoChat";

const CourseById = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const service = useSelector((state) => state.serv.servic);
  const user = useSelector((state) => state.user.users);
  const token = useSelector((state) => state.user.token);
  const comments = useSelector((state) => state.com.comments);
  const loading = useSelector((state) => state.serv.loading);

  useEffect(() => {
    dispatch(getServiceById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getCommentByServiceId(id));
  }, [dispatch, id]);

  const isCourseSaved = user?.saveCourses.find((course) => {
    return course._id === service._id;
  });

  const isCourseBuy = user?.myCourses.find((course) => {
    return course._id === service._id;
  });

  if (!user || !service || !comments || loading) {
    return (
      <div className={style.noToken}>
        Для просмотра курса нужно <Link to={`/sign-in`}>Авторизоваться</Link>
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <div className={style.loader}>Loading...</div>
      ) : (
        <div>
          <div>
            <InfoCourse
              user={user}
              token={token}
              id={id}
              servic={service}
              comments={comments}
              isCourseSaved={isCourseSaved}
              isCourseBuy={isCourseBuy}
            />
          </div>
          {(isCourseBuy || user.role === "Teacher") && (
            <div>
              <VideoChat user={user} token={token} />
            </div>
          )}
          <div>
            <Commnts user={user} token={token} id={id} comments={comments} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseById;