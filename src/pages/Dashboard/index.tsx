import React, { useContext, useEffect } from "react";
import { Container, SideBar } from "./auxiliars";
import ProyectoContext from "../../context/proyects/proyectoContext";
import AuthContext from "../../context/auth/authContext";
import AlertaContext from "../../context/alertas/alertaContext";
import AnimationContext from "../../context/animations/AnimationContext";
import { DashboardContainer } from "./styles";
const DashboardPage = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { mensaje, proyectoActual } = proyectoContext;

  const authContext = useContext(AuthContext);
  const { userAuth } = authContext;

  const alertacontext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertacontext;

  const animationContext = useContext(AnimationContext);
  const { panelnuevoproyecto, panelproyectos, panelterminados } =
    animationContext;

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
      <SideBar />
      <Container />
    </DashboardContainer>
  );
};

export default DashboardPage;
