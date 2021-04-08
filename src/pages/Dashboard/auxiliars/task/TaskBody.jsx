import React, { useContext } from "react";
import FormTask from "./FormTask";
import TaskList from "./TaskList";
import ProyectList from "../proyects/ProyectList";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import styled from "@emotion/styled";

const ContentMain = styled.main`
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 100%;
  }
`;
const Tittle = styled.h2`
  font-weight: 200;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.7rem;
  font-size: 19px;
  color: #2f2f2f;
`;
const ButtonContainer = styled.div`
  width: fit-content;
  margin: 5px auto;
  padding: 0.5rem;
`;
const Button = styled.button`
  color: white;
  background-color: #f02d7b;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 8px;
  margin: 5px;
  cursor: pointer;
`;
const TaskBody = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {
    panel,
    panelproyecto,
    panelterminados,
    proyectoactivo,
    eliminarProyecto,
    terminarProyecto,
    proyectoNull
  } = proyectoContext;

  if (!proyectoactivo)
    return (
      <div className="TaskBody_inactive">
        <p>Comienza creando un proyecto</p>
      </div>
    );

  const handdleProyectState = (proyecto) => {
    if (!proyecto.estado) {
      proyecto.estado = true;
    }
    terminarProyecto(proyecto);
  };
  const [proyectoActual] = proyectoactivo;

  return (
    <ContentMain>
      {/* {panelproyecto && <ProyectList />} */}
      <Tittle>{proyectoActual.nombre}</Tittle>
      <FormTask />
      <TaskList />
      <ButtonContainer>
        <Button
          type="button"
          onClick={() => handdleProyectState(proyectoActual)}
        >
          Terminar Proyecto
        </Button>
        <Button
          type="button"
          onClick={() => eliminarProyecto(proyectoActual._id)}
        >
          Eliminar Proyecto
        </Button>
        {/* <Button 
          type="button"
          onClick={()=> proyectoNull()}
        >X</Button> */}
      </ButtonContainer>
    </ContentMain>
  );
};

export default TaskBody;
