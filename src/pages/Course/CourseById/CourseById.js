import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../redux-toolkit/features/serviceSlice";

const CourseById = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const servic = useSelector(state => state.serv.servic)

  useEffect(() => {
    dispatch(getServiceById(id))
  }, [dispatch, id])

  return (
    <div>
      {servic.name}
    </div>
  );
};

export default CourseById;