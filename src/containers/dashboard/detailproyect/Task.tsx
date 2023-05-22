import React, { useContext, useEffect } from "react";
import TaskContext from "../../../context/task/taskContext";
import ProyectoContext from "../../../context/proyects/proyectoContext";
import styled from "@emotion/styled";
import { FormTask, TaskList } from "../../../pages/Dashboard/auxiliars/task";
const Tarea = styled.li`
  // border: 1px solid green;
  padding: 0.8rem;
  height: 200px;
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24);
  display: grid;
  grid-template-rows: 2fr 1fr;
  p {
    overflow-y: auto;
    padding: 5px;
  }
  @media (min-width: 768px) {
    grid-template-rows: 2fr 30px;
    height: 25vh;
    background-color: #f2f2f2;
  }
`;
const ButtonStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 5px;
  }
`;

const ButtonState = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  margin: 2.5px 0;
  margin: 0 4px;
  padding: 8px;
  border-radius: 25px;
  color: white;
  background-color: #4b72a8;

  align-self: center;
`;
const ButtonPending = styled(ButtonState)`
  background-color: transparent;
  border: 2px solid #4b72a8;
  color: #4b72a8;
  font-weight: bold;
`;

const Task = (tarea: any) => {
  const taskContext = useContext(TaskContext);
  const { eliminarTarea, obtenerTareas, actualizarTask, tareaActual } =
    taskContext;

  const proyectContext = useContext(ProyectoContext);
  const { proyectoactivo } = proyectContext;
  //extraigo el proyecto activo para tener la referencia cuando actualice los proyectos
  const [proyectoActual] = proyectoactivo;
  useEffect(() => {
    obtenerTareas(proyectoActual._id);
  }, []);
  const handleClick = (id: any) => {
    eliminarTarea(id, proyectoActual._id);
    // obtenerTareas(proyectoActual._id);
  };
  const cambiarEstadoTarea = (tarea: any) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTask(tarea);
  };

  return (
    <>
      <h3>{proyectoActual.nombre}</h3>
      <FormTask />
      <TaskList />
      {/* <ButtonContainer>
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
      </ButtonContainer> */}
    </>
  );
};

export default Task;
