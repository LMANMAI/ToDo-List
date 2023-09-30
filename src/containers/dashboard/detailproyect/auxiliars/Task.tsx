import React, { useContext, useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import TaskContext from "../../../../context/task/taskContext";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import {
  Tarea,
  ButtonStateContainer,
  ButtonState,
  ButtonPending,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { setBgUi, setIsHighlighted } from "../../../../redux/slices/ui";
const Task = (tarea: any) => {
  const textarea = document.getElementById("miTextarea") as HTMLTextAreaElement;
  const dispatch = useDispatch();
  const isHighlighted = useSelector(
    (state: RootState) => state.ui.isHighlighted
  );
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
  const [textoTarea, setTextoTarea] = useState(tarea.tarea.nombre);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextoTarea(e.target.value);
  };
  const handleEditTask = (tarea: any) => {
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    actualizarTask(tarea);
  };
  const removeTask = (id: any) => {
    eliminarTarea(id, proyectoActual._id);
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    obtenerTareas(proyectoActual._id);
  };
  const changeTaskStatus = (tarea: any) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTask(tarea);
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
  };

  return (
    <Tarea
      isHighlighted={isHighlighted}
      className={isHighlighted === tarea.tarea._id ? "highlighted" : ""}
    >
      <textarea
        id="textarea"
        value={textoTarea}
        onChange={(e) => handleChange(e)}
        disabled={isHighlighted !== tarea.tarea._id}
      ></textarea>
      {isHighlighted === tarea.tarea._id ? (
        <div>
          <button
            className="button__edit"
            onClick={() => handleEditTask(tarea.tarea)}
            title="Guardar cambios"
          >
            Guardar
          </button>

          <ul className="edit__submenu">
            <li onClick={() => removeTask(tarea.tarea._id)}>Eliminar tarea</li>
            <li onClick={() => changeTaskStatus(tarea.tarea)}>
              Finalizar tarea
            </li>
            <li onClick={() => changeTaskStatus(tarea.tarea)}>
              Regresar a borrador
            </li>
          </ul>
        </div>
      ) : null}
      <button
        className="button__options"
        onClick={() => {
          dispatch(setBgUi(true));
          dispatch(setIsHighlighted(tarea.tarea._id));
          textarea?.select();
        }}
        title="Editar tarea"
      >
        <BsFillPencilFill />
      </button>
      {/* <ButtonStateContainer>
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
          onClick={() => removeTask(tarea.tarea._id)}
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
      </ButtonStateContainer> */}
    </Tarea>
  );
};

export default Task;
