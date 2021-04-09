import React, { useContext, useState } from "react";
import { BsFolder, BsFolderPlus, BsFolderCheck } from "react-icons/bs";
import AuthContext from "../../../../context/auth/authContext";
import AnimationContext from "../../../../context/animations/AnimationContext";
import styled from "@emotion/styled";

const SideBarContainer = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  display: grid;
  grid-template-rows: 70px 70px;
  padding: 1rem;
  color: #4b72a8;
  //@media (min-width: 768px) {}
  @media (min-width: 768px) {
    z-index: 1;
    grid-template-rows: 175px 2fr 50px;
  }
`;
const SideBarDatos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
const Brand = styled.h2`
  font-weight: 300;
  align-self: center;
  display: flex;
  align-items: center;
  p {
    text-transform: uppercase;
    font-size: 13px;
  }
`;
const Name = styled.div``;
const SidebarButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  padding: 0.2rem;
  margin: 0.3rem 0;
  @media (min-width: 768px) {
    transition: all 0.2s ease-in-out;
    flex-direction: column;
   
  }
`;
const Button = styled.button`
  margin: 0 0.4rem;
  height: fit-content;
  width: 30%;
  border-radius: 35px;
  font-size: 1.5rem;
  color: #4b72a8;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.5rem;
  p {
    // display: none;
    font-size: 10px;
  }
  &:focus {
    background: #f02d7b;
    color: white;
  }

  @media(min-width: 768px){
    width: 90%;
          display: flex;
          align-items: center;
          margin: 0.5rem 0;
          font-size: 1.8rem;
          cursor: pointer;
          border-radius: 35px;
          padding: 0.5rem;
          outline: none;
          transition: all 0.2s ease-in-out;
          svg {
            margin: 0 0.4rem;
          }
          p {
            font-size: 0.8rem;
          }
          &:hover {
            background: #314f79;
            color: white;
          }
          &:active {
            background: #f02d7b;
          }
  }
`;
const EndSesionButton = styled.button`
  background-color: #f02d7b;
  //border: 2px solid #f02d7b;
  border: none;
  outline: none;
  padding: 0.3rem;
  border-radius: 35px;
  color: white;
  cursor: pointer;
`;

const SideBar = () => {
  const animationContext = useContext(AnimationContext);
  const {
    movePanelNuevoProyecto,
    movePanelProyectos,
    movePanelProyectosTermiandos,
  } = animationContext;

  const authContext = useContext(AuthContext);
  const { user, EndSesion } = authContext;

  const Exit = () => {
    setTimeout(() => {
      EndSesion();
    }, 1000);
  };
  return (
    <SideBarContainer>
      <SideBarDatos>
        <Brand>
          TASK <p>app</p>
        </Brand>

        <Name>
          {user ? (
            <p>
              Hola! <span>{user.nombre}</span>
            </p>
          ) : null}
        </Name>
      </SideBarDatos>

      <SidebarButtonContainer>
        <Button
          onClick={() => movePanelNuevoProyecto()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolderPlus />
          <p>Crear Proyecto</p>
        </Button>

        <Button
          onClick={() => movePanelProyectos()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolder />
          <p> Mis proyectos</p>
        </Button>

        <Button
          onClick={() => movePanelProyectosTermiandos()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolderCheck />
          <p>Proyectos Terminados</p>
        </Button>
      </SidebarButtonContainer>
      <EndSesionButton onClick={() => Exit()}>Cerrar Sesión</EndSesionButton>
    </SideBarContainer>
  );
};

export default SideBar;
