import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components"
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Wrapper><button onClick={() => loginWithRedirect()}>Log In</button></Wrapper>;
};
const Wrapper =styled.section`
button {
    background-color: #725a7a;
    border: solid 2px #fff;
    border-radius:15px;
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #423447;
  }
  `;
export default LoginButton;
