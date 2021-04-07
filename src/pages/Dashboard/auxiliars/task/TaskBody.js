import React, { useContext } from "react";
import FormTask from "./FormTask";
import TaskList from "./TaskList";
import ProyectList from "../proyects/ProyectList";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import styled from "@emotion/styled";

const ContentMain = styled.main`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const Tittle = styled.h2`
  font-weight: 200;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.7rem;
  font-size: 19px;
  color: #2f2f2f;
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
      <div className="button_wraper">
        <button
          type="button"
          className="btn btn_terminar"
          onClick={() => handdleProyectState(proyectoActual)}
        >
          Terminar Proyecto
        </button>
        <button
          type="button"
          className="btn btn_eliminar"
          onClick={() => eliminarProyecto(proyectoActual._id)}
        >
          Eliminar Proyecto
        </button>
      </div>
    </ContentMain>
  );
};

export default TaskBody;
