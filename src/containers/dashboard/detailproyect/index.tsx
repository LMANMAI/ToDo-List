import React, { useContext, useEffect, useState } from "react";
import TaskContext from "../../../context/task/taskContext";
import ProyectoContext from "../../../context/proyects/proyectoContext";
import { BsChevronLeft, BsGear } from "react-icons/bs";
import { FormTask, TaskList } from "./auxiliars";
import { FormTaskContainer, FormConfigMenu } from "./styles";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMenu } from "../../../redux/slices/ui";

const Task = (tarea: any) => {
  const dispatch = useDispatch();
  const openmenu = useSelector((state: RootState) => state.ui.openmenu);
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
    <FormTaskContainer
      onClick={() => {
        if (openmenu) {
          dispatch(setOpenMenu(false));
        }
      }}
    >
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
          <h3 className="formt__task_title">
            <input
              type="text"
              name=""
              id=""
              value={proyectoActual.nombre}
              disabled
            />
          </h3>
          <div style={{ position: "relative" }}>
            <button
              title="Opciones del proyecto."
              className={`form__task_btn options ${openmenu ? "picked" : ""}`}
              onClick={() => {
                dispatch(setOpenMenu(!openmenu));
              }}
            >
              <BsGear />
            </button>
            <FormConfigMenu openmenu={openmenu}>
              <li>Cambiar nombre del proyecto</li>
              <li>Eliminar proyecto</li>
              <li>Finalizar proyecto</li>
            </FormConfigMenu>
          </div>
        </div>
        <FormTask />
      </div>
      <TaskList />
    </FormTaskContainer>
  );
};

export default Task;
