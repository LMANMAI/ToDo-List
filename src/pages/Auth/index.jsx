import React from "react";
import styled from "styled-components";
import Login from "./Login";
import SignIn from "./Signin";
import "./index.scss";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    /* border-radius: 50%; */
    right: 48%;
    top: -10%;
    background-color: #4d70a5;
    transform: translateY(-10%) rotate(45deg) translateX(-27%);
    z-index: 6;
    transition: 1.8s all ease-in-out;
  }
`;
const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const SignInSignUpContainer = styled.div`
  position: relative;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
`;
const PanelContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
function AuthPage() {
  return (
    <Container>
      <FormContainer>
        <SignInSignUpContainer>
            <Login />
            
        </SignInSignUpContainer>
      </FormContainer>
      <PanelContainer className="panel panel-left">
            PANEL
          </PanelContainer>
    </Container>
  );
}

export default AuthPage;
