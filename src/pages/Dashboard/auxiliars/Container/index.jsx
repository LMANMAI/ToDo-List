import React, { useContext, useEffect } from "react";
import { NewProyect, ProyectList, EndProyects } from "../proyects";
import { TaskBody } from "../task";
import { AnimationContext, ProyectoContext } from "../../../../context";
import { ContainerDashboard, Box } from "./styles";

function Container() {
  const animaContext = useContext(AnimationContext);
  const { panelproyectos, panelterminados, allFalse } = animaContext;

  const proyectoContext = useContext(ProyectoContext);
  const { proyectoactivo } = proyectoContext;
  useEffect(() => {
    if (proyectoactivo) {
      allFalse();
    }
  }, [proyectoactivo]);
  return (
    <ContainerDashboard>
      <Box>
        <NewProyect />
        {panelproyectos ? <ProyectList /> : <TaskBody />}
        {panelterminados && <EndProyects />}
      </Box>
    </ContainerDashboard>
  );
}

export default Container;
