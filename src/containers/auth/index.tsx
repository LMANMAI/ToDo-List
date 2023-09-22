import React, { useContext } from "react";
import {
  Container,
  PanelContainer,
  ButtonContainer,
  ContentRight,
  ContentLeft,
} from "../../pages/Auth/styles";
import Login from "../../pages/Auth/Login";
import SignIn from "../../pages/Auth/Signin";
import AnimationContext from "../../context/animations/AnimationContext";
import { ToastContainer } from "react-toastify";
function AuthPage() {
  const uiContext = useContext(AnimationContext);
  const { panel } = uiContext;
  return (
    <Container>
      <PanelContainer>
        <ButtonContainer>
          <ContentRight
            position={panel ? "translateX(100vw)" : "translateX(0px)"}
            visivility={panel ? "hidden" : "visible"}
          >
            <Login />
          </ContentRight>

          <ContentLeft
            position={!panel ? "translateX(-100vw)" : "translateX(0px)"}
            visivility={!panel ? "hidden" : "visible"}
          >
            <SignIn />
          </ContentLeft>
        </ButtonContainer>
      </PanelContainer>
    </Container>
  );
}

export default AuthPage;
