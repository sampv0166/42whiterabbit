import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "../features/auth/authSlice";

const Home = () => {
  const { authInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const code = queryParameters.get("code");
    console.log(code);
    if (code && !authInfo) {
      if (!authInfo) {
        console.log("called ")
        dispatch(getToken(code));
        
      }
    } else {
      navigate("/login");
    }
  }, []);

  return <div>home</div>;
};

export default Home;
