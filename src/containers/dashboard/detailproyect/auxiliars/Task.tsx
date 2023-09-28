import React, { useContext, useEffect } from "react";
import TaskContext from "../../../../context/task/taskContext";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import {
  Tarea,
  ButtonStateContainer,
  ButtonState,
  ButtonPending,
} from "./styles";

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

  console.log(tarea.tarea.nombre);
  return (
    <Tarea>
      <p>{tarea.tarea.nombre}</p>
      <ButtonStateContainer>
        {tarea.tarea.estado ? (
          <ButtonState
            onClick={() => cambiarEstadoTarea(tarea.tarea)}
            type="button"
            className="btn btn_estado task_completa"
          >
            Completa
          </ButtonState>
        ) : (
          <ButtonPending
            onClick={() => cambiarEstadoTarea(tarea.tarea)}
            type="button"
            className="btn btn_estado task_pendiente"
          >
            Pendiente
          </ButtonPending>
        )}
        <ButtonState
          type="button"
          className="btn btn_eliminar"
          onClick={() => handleClick(tarea.tarea._id)}
        >
          Eliminar
        </ButtonState>
        <ButtonState
          type="button"
          className="btn btn_editar"
          onClick={() => tareaActual(tarea.tarea)}
        >
          Editar
        </ButtonState>
      </ButtonStateContainer>
    </Tarea>
  );
};

export default Task;
