import React, { useContext, useEffect } from "react";
import SideBar from "./auxiliars/SideBar";
import Container from "./auxiliars/Container";
import ProyectoContext from "../../context/proyects/proyectoContext";
import AuthContext from "../../context/auth/authContext";
import AlertaContext from "../../context/alertas/alertaContext";
import "./index.scss";
import FormTask from "./auxiliars/task/FormTask";
import AnimationContext from "../../context/animations/AnimationContext";

const DashboardPage = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoactivo, mensaje, proyectoActual } = proyectoContext;

  const authContext = useContext(AuthContext);
  const { userAuth } = authContext;

  const alertacontext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertacontext;

  const animationContext = useContext(AnimationContext);
  const {
    panelnuevoproyecto,
    panelproyectos,
    panelterminados,
  } = animationContext;

  useEffect(() => {
    userAuth();
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    if (panelnuevoproyecto || panelproyectos || panelterminados) {
      proyectoActual(null);
    }
  }, [mensaje]);
  return (
    <>
      <div className="Dashboard">
        {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
        <SideBar />
        <Container />
      </div>
    </>
  );
};

export default DashboardPage;
