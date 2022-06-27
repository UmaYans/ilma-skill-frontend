import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getCommentByServiceId } from "../../../redux-toolkit/features/commentsSlice";

const Commnts = ({ user, token, id }) => {
  const dispatch = useDispatch()

  const comments = useSelector(state => state.com.comments)
  const [text, setText] = useState("");

  console.log(comments);
  useEffect(() => {
    dispatch(getCommentByServiceId(id))
  }, [dispatch])

  const addCom = () => {
    setText("")
    dispatch(addComment({text, id}))
  }

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Оставьте комментарий..."
        />
        <input type="submit" value="Добавить" disabled={!text} onClick={() => addCom()} />
      </form>
      <div>
        {comments.map(comment => {
          return (
            <div key={comment._id}>{comment.text}</div>
          )
        })}
      </div>
    </div>
  );
};

export default Commnts;
