import React, { useContext } from "react";
import {
  Container,
  PanelContainer,
  ButtonContainer,
  ContentRight,
  ContentLeft,
} from "./styles";
import Login from "./Login";
import SignIn from "./Signin";
import AnimationContext from "../../context/animations/AnimationContext";

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
