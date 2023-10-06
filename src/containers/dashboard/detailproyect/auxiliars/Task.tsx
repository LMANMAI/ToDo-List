import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Tarea } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { setBgUi, setIsHighlighted } from "../../../../redux/slices/ui";
import { deleteTask, EditTask, getTask } from "../../../../services";

const Task = ({ tarea, onDragStart }: any) => {
  const textarea = document.getElementById("miTextarea") as HTMLTextAreaElement;
  const dispatch = useDispatch();
  const isHighlighted = useSelector(
    (state: RootState) => state.ui.isHighlighted
  );

  const proyectoactivo = useSelector(
    (state: RootState) => state.proyects.proyectoactivo
  );

  const [textoTarea, setTextoTarea] = useState(tarea.nombre);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextoTarea(e.target.value);
  };
  const handleEditTask = async (tarea: any) => {
    tarea.nombre = textoTarea;
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    await EditTask(tarea);
  };
  const removeTask = async (id: any) => {
    const res = await deleteTask(proyectoactivo._id, id);
    console.log(res);
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    getTask(proyectoactivo._id);
  };

  const changeTaskStatus = async (tarea: any) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    await EditTask(tarea);
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
