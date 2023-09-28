import React, { useContext, useEffect } from "react";
import TaskContext from "../../../context/task/taskContext";
import ProyectoContext from "../../../context/proyects/proyectoContext";
import { BsChevronLeft, BsGear } from "react-icons/bs";
import { FormTask, TaskList } from "./auxiliars";
import { FormTaskContainer } from "./styles";

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
    <FormTaskContainer>
      <div className="form__task">
        <div className="form__task_header">
          <button
            title="Regresar al menu anterior."
            className="form__task_btn"
            onClick={() => {
              window.history.back();
            }}
          >
            <BsChevronLeft />
          </button>
          <h3 className="formt__task_title">{proyectoActual.nombre}</h3>
          <button
            title="Opciones del proyecto."
            className="form__task_btn options"
            onClick={() => {
              alert(
                "aca deberia poder editar el proyecto mediante un modal y o borrarlo"
              );
            }}
          >
            <BsGear />
          </button>
        </div>
        <FormTask />
      </div>
      <TaskList />
    </FormTaskContainer>
  );
};

export default Task;
