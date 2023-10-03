import React, { useContext, useEffect } from "react";
import { Container, SideBar } from "./auxiliars";
import ProyectoContext from "../../context/proyects/proyectoContext";
import { DashboardContainer } from "./styles";
import { authentication } from "../../services";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const DashboardPage = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { mensaje, proyectoActual } = proyectoContext;

  const panelnuevoproyecto = useSelector(
    (state: RootState) => state.ui.panelnuevoproyecto
  );
  const panelproyectos = useSelector(
    (state: RootState) => state.ui.panelproyectos
  );
  const panelterminados = useSelector(
    (state: RootState) => state.ui.panelterminados
  );

  useEffect(() => {
    const handleAuth = async () => {
      await authentication();
      if (mensaje) {
        // mostrarAlerta(mensaje.msg, mensaje.categoria);
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
