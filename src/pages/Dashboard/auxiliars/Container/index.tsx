import React, { useContext, useEffect } from "react";
import { AnimationContext, ProyectoContext } from "../../../../context";
import { ContainerDashboard } from "./styles";
import { Outlet } from "react-router-dom";

function Container() {
  const uiContext = useContext(AnimationContext);
  const { allFalse } = uiContext;

  const proyectoContext = useContext(ProyectoContext);
  const { proyectoactivo } = proyectoContext;
  useEffect(() => {
    if (proyectoactivo) {
      allFalse();
    }
  }, [proyectoactivo]);
  return (
    <ContainerDashboard>
      <Outlet />
    </ContainerDashboard>
  );
}

export default Container;
