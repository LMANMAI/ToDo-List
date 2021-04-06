import React, { useContext } from "react";
import styled from "@emotion/styled";
import Login from "./Login";
import SignIn from "./Signin";
import AnimationContext from "../../context/animations/AnimationContext";

//import "./index.scss";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fefefe;
`;
const PanelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const ButtonContainer = styled.div`
  z-index: 2;
  /* display: grid;
  grid-template-rows: 2fr 1fr; */
  margin: 0 auto;
`;
const ContentRight = styled.div`
  //border: 1px solid red;
  height: 100vh; 
  padding: 1rem;
  transition: 0.4s 0.6s ease-in-out;
  transform: ${(props) => props.position};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;
const ContentLeft = styled.div`
  //border: 1px solid green;
  height: 100vh;
  position: absolute;
  top: 0;
  padding: 1rem;
  transition: 0.4s 0.6s ease-in-out;
  transform: ${(props) => props.position};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

function AuthPage() {
  const animaContext = useContext(AnimationContext);
  const { panel } = animaContext;
  return (
    <Container>
      <PanelContainer>
        <ButtonContainer>
          <ContentRight
            position={panel ? "translateX(100vw)" : "translateX(0px)"}
          >
            <Login />
          </ContentRight>

          <ContentLeft
            position={!panel ? "translateX(-100vw)" : "translateX(0px)"}
          >
            <SignIn />
          </ContentLeft>
        </ButtonContainer>
      </PanelContainer>
    </Container>
  );
}

export default AuthPage;
