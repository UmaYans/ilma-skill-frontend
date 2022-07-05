import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import style from "./Comment.module.css";
import {
  addComment,
  deleteComment,
} from "../../../redux-toolkit/features/commentsSlice";

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
          <div>
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
                </div>
                <div className={style.user_Name}>
                  {comment.userId?.firstName} {comment.userId?.lastName[0]}.
                </div>{" "}
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
              <div className={style.text_button}>
                <div className={style.comment_text}>{comment?.text}</div>
                <div>
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className={style.btn_del}
                  >
                    x
                  </button>
                </div>
              </div>
              {/* <div className={style.comment_text}>{comment?.text}</div>
              <div className={style.user_profile_img}>
                {" "}
                <img
                  src={`http://localhost:4100/${comment.userId?.avatar}`}
                  alt="imag"
                />{" "}
              </div>
              <div>{comment.userId?.firstName} {comment.userId?.lastName}</div>
              <div>
                <button onClick={() => handleDelete(comment._id)}>x</button>
              </div>
              <div className={style.rating}>
                <span className={style.title}>Рейтинг:</span>
                <Rating
                  name="read-only"
                  value={comment.grade}
                  size="large"
                  readOnly
                />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Commnts;
