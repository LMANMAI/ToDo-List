import React, { useContext } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignIn from "./Signin";
import AnimationContext from "../../context/animations/AnimationContext";

import "./index.scss";


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
