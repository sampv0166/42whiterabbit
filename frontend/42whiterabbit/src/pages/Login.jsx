import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #4e1a4e;
  height: 70px;
  width: 200px;
  border-radius: 15px;
  border-color: white;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  font-family: monospace;
`;

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
    <MainContainer>
      <Button onClick={() => handleNavigate()}>LOGIN</Button>
    </MainContainer>
  );
};

export default Login;
