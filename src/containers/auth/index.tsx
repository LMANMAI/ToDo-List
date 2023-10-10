import React from "react";
import {
  Container,
  PanelContainer,
  ButtonContainer,
  ContentRight,
  ContentLeft,
} from "../../pages/Auth/styles";
import Login from "../../pages/Auth/Login";
import SignIn from "../../pages/Auth/Signin";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function AuthPage() {
  const panel = useSelector((state: RootState) => state.ui.panel);

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
