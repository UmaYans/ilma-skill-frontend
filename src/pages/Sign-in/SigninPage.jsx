import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SigninPage = () => {

  
  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);

  return <div>SigninPage</div>;
};

export default SigninPage;
