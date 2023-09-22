import React, { useContext, useEffect } from "react";
import { ProyectList } from "../proyects";
import { TaskBody } from "../task";
import { AnimationContext, ProyectoContext } from "../../../../context";
import { ContainerDashboard, Box } from "./styles";
import { Outlet } from "react-router-dom";

function Container() {
  const uiContext = useContext(AnimationContext);
  const { panelproyectos, panelterminados, allFalse } = uiContext;

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
