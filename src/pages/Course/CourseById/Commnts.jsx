import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import style from "./Comment.module.css";
import {
  addComment,
  getCommentByServiceId,
} from "../../../redux-toolkit/features/commentsSlice";

const Commnts = ({ user, token, id }) => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.com.comments);
  const [text, setText] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    dispatch(getCommentByServiceId(id));
  }, [dispatch]);

  const addCom = () => {
    setText("");
    dispatch(addComment({ text, grade, id }));
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
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          size="large"
        />
      </form>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment._id}>
              <div className={style.comment_text}>{comment.text}</div>;
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
