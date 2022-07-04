import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getCommentsByUser,
} from "../../../redux-toolkit/features/commentsSlice";
import style from "./style/Comments.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

const Comments = () => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.com.userComments);
  const loading = useSelector((state) => state.com.loading);
  const error = useSelector((state) => state.com.error);

  useEffect(() => {
    dispatch(getCommentsByUser());
  }, [dispatch]);

  const deleteCom = (id) => {
    dispatch(deleteComment(id));
  };

  console.log(comments);

  if (error) {
    return <div>{error}</div>;
  }

  if (!comments || loading) {
    return <div>...</div>;
  }

  return (
    <div>
      <p>Мои комментарии</p>
      <div>
        {comments.length === 0  ? (
          <div>Нет оставленных комментарий</div>
        ) : (
          comments?.map((comment) => {
            return (
              <div key={comment._id} className={style.comments}>
                <div>
                  <span>
                    Комментарий оставлен к курсу {comment.serviceId.name}
                  </span>
                  <p>{comment.text}</p>
                </div>
                <Stack direction="row" spacing={2}>
                  <Button
                    onClick={() => deleteCom(comment._id)}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Stack>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Comments;
