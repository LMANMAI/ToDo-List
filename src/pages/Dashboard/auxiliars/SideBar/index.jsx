import React, { useContext, useState } from "react";
import { BsFolder, BsFolderPlus, BsFolderCheck } from "react-icons/bs";
import NewProyect from "../proyects/NewProyect";
import EndProyects from "../proyects/EndProyects";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import AuthContext from "../../../../context/auth/authContext";
import "./index.scss";
import AnimationContext from '../../../../context/animations/AnimationContext';
const SideBar = () => {
  const animationContext = useContext(AnimationContext);
  const { movePanelNuevoProyecto, movePanelProyectos, movePanelProyectosTermiandos} = animationContext;
  const proyectoContext = useContext(ProyectoContext);
  const {
    panel,
    panelproyecto,
    panelterminados,
    badge,
    badgeT,
    showPanel,
    mostrarPanel,
    mostrarTerminados,
  } = proyectoContext;

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
