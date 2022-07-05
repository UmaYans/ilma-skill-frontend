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
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Оставьте комментарий..."
        />
        <input
          type="submit"
          value="Добавить"
          disabled={!text}
          onClick={() => addCom()}
        />
        <Rating
          name="simple-controlled"
          value={+grade}
          onChange={(e) => setGrade(e.target.value)}
          size="large"
        />
      </form>
      <div>
        {comments.map((comment) => {
          console.log(comment);
          return (
            <div key={comment._id}>
              <div className={style.comment_text}>{comment?.text}</div>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Commnts;
