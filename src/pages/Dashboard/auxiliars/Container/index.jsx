import React, { useContext, useEffect } from "react";
import NewProyect from "../proyects/NewProyect";
import ProyectList from "../proyects/ProyectList";
import EndProyects from "../proyects/EndProyects";
import TaskBody from "../task/TaskBody";
import AnimationContext from "../../../../context/animations/AnimationContext";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
//import "./index.scss";
import styled from "@emotion/styled";

const ContainerDashboard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 768px) {
     display: flex;
    flex-direction: column;   
    justify-content: center;
    align-self: center;
  }
`;

const Box = styled.div`
  margin: 0 auto;
  background: #fff;
  width: 98%;
  max-height: 100vh;
  border-radius: 50px 50px 0 0;
  overflow-y: scroll; 
  @media (min-width: 768px) {
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 99%;
    height: 98vh;
    border-radius: 35px;
    padding: 0.3rem;    
  }
`;
function Container() {
  const animaContext = useContext(AnimationContext);
  const {
    panelnuevoproyecto,
    panelproyectos,
    panelterminados,
    allFalse,
  } = animaContext;

  const proyectoContext = useContext(ProyectoContext);
  const { proyectoactivo, proyectoActual } = proyectoContext;
  // useEffect(() => {
  //   console.log("hay otro proyecto activo");
  //   if (proyectoactivo) {
  //     allFalse();
  //   }
  // }, [proyectoactivo, panelnuevoproyecto, panelproyectos, panelterminados]);
  console.log(proyectoactivo);
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
