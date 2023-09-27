import React, { useContext, useEffect } from "react";
import { Container, SideBar } from "./auxiliars";
import ProyectoContext from "../../context/proyects/proyectoContext";
import AlertaContext from "../../context/alertas/alertaContext";
import AnimationContext from "../../context/animations/AnimationContext";
import { DashboardContainer } from "./styles";
import authentication from "../../services/authentication";
const DashboardPage = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { mensaje, proyectoActual } = proyectoContext;

  const alertacontext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertacontext;

  const animationContext = useContext(AnimationContext);
  const { panelnuevoproyecto, panelproyectos, panelterminados } =
    animationContext;

  useEffect(() => {
    const handleAuth = async () => {
      await authentication();
      if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
      if (panelnuevoproyecto || panelproyectos || panelterminados) {
        proyectoActual(null);
      }
    };
    handleAuth();
  }, [mensaje]);
  return (
    <DashboardContainer>
      <SideBar />
      <Container />
    </DashboardContainer>
  );
};

export default DashboardPage;
