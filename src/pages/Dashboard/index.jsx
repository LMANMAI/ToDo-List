import React, { useContext, useEffect } from "react";
import SideBar from "./auxiliars/SideBar";
import Container from "./auxiliars/Container";
import ProyectoContext from "../../context/proyects/proyectoContext";
import AuthContext from "../../context/auth/authContext";
import AlertaContext from "../../context/alertas/alertaContext";
import AnimationContext from "../../context/animations/AnimationContext";
import styled from "@emotion/styled";

const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 200px 1fr;
  background-color: #f2f2f2;
  overflow-y: scroll;
  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
    grid-template-rows: initial;
    overflow-y: initial;
  }
`;

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
    <DashboardContainer>
      {alerta ? <div className={alerta.categoria}>{alerta.msg}</div> : null}
      <SideBar />
      <Container />
    </DashboardContainer>
  );
};

export default DashboardPage;
