import { useState } from "react";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import style from "./Comment.module.css";
import { addComment, deleteComment } from "redux/features/commentsSlice";

const Commnts = ({ user, token, id, comments }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [grade, setGrade] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
  };

  const addCom = () => {
    dispatch(addComment({ text, grade, id }));
    setText("");
  };

  return (
    <div>
      <div className={style.review}>
        {" "}
        <h1>Отзывы</h1>
      </div>
      <div className={style.form}>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            className={style.input}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Оставьте комментарий..."
          />
          <input
            className={style.btn_inp}
            type="submit"
            value="Добавить"
            disabled={!text}
            onClick={() => addCom()}
          />
          <div className={style.zvezda}>
            <Rating
              name="simple-controlled"
              value={+grade}
              onChange={(e) => setGrade(e.target.value)}
              size="large"
            />
          </div>
        </form>
      </div>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment._id} className={style.cont}>
              <div className={style.fio_rating}>
                <div className={style.user_profile_img}>
                  {" "}
                  <img
                    src={`http://localhost:4100/${comment.userId?.avatar}`}
                    alt="imag"
                    className={style.imgUser}
                  />{" "}
                  <div className={style.user_Name}>
                    {comment.userId?.firstName} {comment.userId?.lastName[0]}.
                  </div>{" "}
                </div>
                <div className={style.text_button}>
                  <div>
                    <div className={style.comment_text}>{comment?.text}</div>
                    <hr></hr>
                  </div>
                  <div className={style.rating}>
                    <span className={style.title}>Рейтинг:</span>
                    <Rating
                      name="read-only"
                      value={comment.grade}
                      size="large"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className={style.btn_del}
                  >
                    удалить
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Commnts;
