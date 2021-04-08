import React, { useContext, useState } from "react";
import { BsFolder, BsFolderPlus, BsFolderCheck } from "react-icons/bs";
import AuthContext from "../../../../context/auth/authContext";
import AnimationContext from '../../../../context/animations/AnimationContext';
import styled from '@emotion/styled';

const SideBarContainer = styled.div``;
const SideBarDatos = styled.div``;
const Brand = styled.h2``;
const Name = styled.div``;
const SidebarButtonContainer = styled.div``;
const Button = styled.button``;
const EndSesionButton = styled.button``;


const SideBar = () => {
  const animationContext = useContext(AnimationContext);
  const { movePanelNuevoProyecto, movePanelProyectos, movePanelProyectosTermiandos} = animationContext;

  const authContext = useContext(AuthContext);
  const { user, EndSesion } = authContext;

  const Exit = () => {
    setTimeout(() => {
      EndSesion();
    }, 1000);
  };
  return (
    <div className="DashboardSideBar">
      <div className="DashboardSideBar_datos">
        <h2 className="DashboardSideBar_datos-brand">
          TASK <p>app</p>
        </h2>

        <div className="DashboardSideBar_datos-name">
          {user ? (
            <p>
              Hola! <span>{user.nombre}</span>
            </p>
          ) : null}
        </div>
       
      </div>

      <div className="DashboardSideBar_botones">
        <button
          onClick={() => movePanelNuevoProyecto()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolderPlus />
          <p>Crear Proyecto</p>
        </button>

        <button
          onClick={() => movePanelProyectos()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolder />
         <p> Mis proyectos</p>
        </button>

        <button
          onClick={() => movePanelProyectosTermiandos()}
          className="DashboardSideBar_botones_btn"
        >
          <BsFolderCheck />
          <p>Proyectos Terminados</p>
        </button>
      </div>
      <button className="DashboardSideBar_datos_btn" onClick={() => Exit()}>
          Cerrar Sesión
        </button>
    </div>
  );
};

export default SideBar;
