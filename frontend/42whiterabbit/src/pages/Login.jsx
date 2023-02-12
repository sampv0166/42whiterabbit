import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authInfo } = useSelector((state) => state.auth);
  const handleNavigate = () => {
    window.location.replace(
      "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-60026d8f6f4c6890bf2cf17be5596322421198fec6aca83e267965226aba757f&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_type=code"
    );
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (authInfo) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <button onClick={() => handleNavigate()}>login</button>
    </div>
  );
};

export default Login;
