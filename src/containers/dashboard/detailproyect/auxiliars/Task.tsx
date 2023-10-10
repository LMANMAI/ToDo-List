import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Tarea } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { setBgUi, setIsHighlighted } from "../../../../redux/slices/ui";
import { deleteTask, EditTask, getTask } from "../../../../services";
import { setTareasProyecto } from "../../../../redux/slices/task";

const Task = ({ tarea, onDragStart }: any) => {
  const textarea = document.getElementById("miTextarea") as HTMLTextAreaElement;
  const dispatch = useDispatch();
  const isHighlighted = useSelector(
    (state: RootState) => state.ui.isHighlighted
  );

  const currentproyect = useSelector(
    (state: RootState) => state.proyects.currentproyect
  );

  const [textoTarea, setTextoTarea] = useState(tarea.nombre);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextoTarea(e.target.value);
  };
  const handleEditTask = async (tarea: any) => {
    const updatedTask = { ...tarea };
    updatedTask.nombre = textoTarea;
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    await EditTask(updatedTask);
  };
  const removeTask = async (id: any) => {
    await deleteTask(currentproyect._id, id);
    const restasks = await getTask(currentproyect._id);
    dispatch(setIsHighlighted(""));
    dispatch(setBgUi(false));
    dispatch(setTareasProyecto(restasks.data));
  };

  const changeTaskStatus = async (tarea: any) => {
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
