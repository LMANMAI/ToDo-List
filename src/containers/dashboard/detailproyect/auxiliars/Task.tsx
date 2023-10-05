import React, { useContext, useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import TaskContext from "../../../../context/task/taskContext";
import { Tarea } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { setBgUi, setIsHighlighted } from "../../../../redux/slices/ui";
const Task = ({ tarea, onDragStart }: any) => {
  const textarea = document.getElementById("miTextarea") as HTMLTextAreaElement;
  const dispatch = useDispatch();
  const isHighlighted = useSelector(
    (state: RootState) => state.ui.isHighlighted
  );
  const { eliminarTarea, obtenerTareas, actualizarTask, tareaActual } =
    useContext(TaskContext);

  const proyectoactivo = useSelector(
    (state: RootState) => state.proyects.proyectoactivo
  );
  useEffect(() => {
    obtenerTareas(proyectoactivo._id);
  }, []);
  const [textoTarea, setTextoTarea] = useState(tarea.nombre);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextoTarea(e.target.value);
  };
  const handleEditTask = (tarea: any) => {
    tarea.nombre = textoTarea;
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    actualizarTask(tarea);
  };
  const removeTask = (id: any) => {
    eliminarTarea(id, proyectoactivo._id);
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    obtenerTareas(proyectoactivo._id);
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
  const handleDragStart = (e: any) => {
    onDragStart(e);
  };
  return (
    <Tarea
      isHighlighted={isHighlighted}
      className={isHighlighted === tarea._id ? "highlighted" : ""}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <textarea
        id="textarea"
        value={textoTarea}
        onChange={(e) => handleChange(e)}
        disabled={isHighlighted !== tarea._id}
      ></textarea>
      {isHighlighted === tarea._id ? (
        <div>
          <button
            className="button__edit"
            onClick={() => handleEditTask(tarea)}
            title="Guardar cambios"
          >
            Guardar
          </button>

          <ul className="edit__submenu">
            <li onClick={() => removeTask(tarea._id)}>Eliminar tarea</li>
            <li onClick={() => changeTaskStatus(tarea)}>Finalizar tarea</li>
            <li onClick={() => changeTaskStatus(tarea)}>Regresar a borrador</li>
          </ul>
        </div>
      ) : null}
      <button
        className="button__options"
        onClick={() => {
          dispatch(setBgUi(true));
          dispatch(setIsHighlighted(tarea._id));
          textarea?.select();
        }}
        title="Editar tarea"
      >
        <BsFillPencilFill />
      </button>
    </Tarea>
  );
};

export default Task;
