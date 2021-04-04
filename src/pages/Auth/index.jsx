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
  display: grid;
  grid-template-rows: 2fr 1fr;
`;
const TopPanel = styled.div`
  grid: 1 / 2;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomPanel = styled.div`
  border: 1px solid blue;
`;

function AuthPage() {
  // const animaContext = useContext(AnimationContext);
  // const { panel, movePanelAuth } = animaContext;
  return (
    <>
      <Container>
        <PanelContainer>
          <TopPanel>
            <Login />
            <SignIn />
          </TopPanel>

          <BottomPanel>
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

            <div className="content">
              <h3>¿Ya tenes una cuenta?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button
                className="btn transparent"
                // onClick={() => movePanelAuth()}
                id="sing-in-btn"
              >
                Inicia Sesion
              </button>
            </div>
          </BottomPanel>
        </PanelContainer>
      </Container>

      {/* <div className={panel ? "container sign_up_mode" : "container"}>
      
          <div className="form_container"></div>

        <Login />
          <SignIn />
        <div className="panel_container">
          <div className="panel panel-left">
            
          </div>

          <div className="panel right-panel">
            
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AuthPage;
