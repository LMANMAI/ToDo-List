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
  display: grid;
  grid-template-rows: 2fr 1fr;
`;
const FormularioContainer = styled.div`
  /* position: relative;
  bottom: 20px; */
  z-index: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100vw;
`;
const ButtonContainer = styled.div`
  z-index: 2;
`;
const Button = styled.div``;
const ContentRight = styled.div`
  border: 1px solid red;
  position: absolute;
  transition: .3s ease-in-out;
  transform: ${(props) => props.position};
`;
const ContentLeft = styled.div`
border: 1px solid green;
position: absolute;
transition: .3s ease-in-out;
  transform: ${(props) => props.position};
`;
function AuthPage() {
  const animaContext = useContext(AnimationContext);
  const { panel, movePanelAuth } = animaContext;
  return (
    <>
      <Container>
        <PanelContainer>
          <FormularioContainer>
            <Login />
            <SignIn />
          </FormularioContainer>

          <ButtonContainer>
            {/* <Button onClick={() => movePanelAuth()}>Boton</Button> */}

            <ContentRight position={panel ? "translateX(150%)" : "translateX(0px)"}>
              <h3>¿Nuevo aqui?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button
                className="btn transparent"
                onClick={() => movePanelAuth()}
                id="sing-up-btn"
              >
                Registrarse
              </button>
            </ContentRight>

            <ContentLeft position={!panel ? "translateX(-150%)" : "translateX(0px)"}>
              <h3>¿Ya tienes una cuenta?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button
                className="btn transparent"
                onClick={() => movePanelAuth()}
                id="sing-up-btn"
              >
                Registrarse
              </button>
            </ContentLeft>
          </ButtonContainer>
        </PanelContainer>
      </Container>

      {/* <div className={panel ? "container sign_up_mode" : "container"}>
      
          <div className="form_container"></div>

        <Login />
          <SignIn />
        <div className="panel_container">
          <div className="panel panel-left">
             <div className="content">
              <h3>¿Nuevo aqui?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button
                className="btn transparent"
                // onClick={() => movePanelAuth()}
                id="sing-up-btn"
              >
                Registrarse
              </button>
            </div>
          </div>

          <div className="panel right-panel">
            
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AuthPage;
