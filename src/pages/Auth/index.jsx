import React, { useContext } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignIn from "./Signin";
import AnimationContext from "../../context/animations/AnimationContext";

import "./index.scss";

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
  const animaContext = useContext(AnimationContext);
  const { panel, movePanelAuth } = animaContext;
  return (
    <>
      <div className={panel ? "container sign_up_mode" : "container"}>
        <div className="form_container">
          <div className="singin_singup_container">
            <Login />
            <SignIn />
          </div>
        </div>

        <div className="panel_container">
          <div className="panel panel-left">
            <div className="content">
              <h3>¿Nuevo aqui?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button
                className="btn transparent"
                onClick={() => movePanelAuth()}
                id="sing-up-btn"
              >
                Registrarse
              </button>
            </div>
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>¿Ya tenes una cuenta?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button
                className="btn transparent"
                onClick={() => movePanelAuth()}
                id="sing-in-btn"
              >
                Inicia Sesion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
