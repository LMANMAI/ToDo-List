import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../../../../context/task/taskContext";
import { ListadoTareas, BackgroundUI } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import {
  setBgUi,
  setIsHighlighted,
  setEditMode,
} from "../../../../redux/slices/ui";
const TaskList = () => {
  const dispatch = useDispatch();
  const taskContext = useContext(TaskContext);
  const { tareasproyecto } = taskContext;
  const bg_position = useSelector((state: RootState) => state.ui.bg);
  const tareasCompletas = tareasproyecto.filter(
    (tarea: any) => tarea.estado === "completa" || tarea.estado === true
  );
  const tareasPendientes = tareasproyecto.filter(
    (tarea: any) => tarea.estado === "pendiente" || tarea.estado === false
  );
  const tareasBorrador = tareasproyecto.filter(
    (tarea: any) => tarea.estado === "borrador"
  );
  return (
    <ListadoTareas>
      {tareasproyecto.length === 0 ? (
        <p className="ntarea">No hay tareas comenza creando una!</p>
      ) : (
        <>
          <div className="listadotareas__column">
            <h3>Tareas en Borrador</h3>
            {tareasBorrador.length > 0 && (
              <ul className="list_container">
                {tareasBorrador.map((tarea: any) => (
                  <Task tarea={tarea} key={tarea._id} />
                ))}
              </ul>
            )}
          </div>

          <div className="listadotareas__column">
            <h3>Tareas Pendientes</h3>
            {tareasPendientes.length > 0 && (
              <ul className="list_container">
                {tareasPendientes.map((tarea: any) => (
                  <Task tarea={tarea} key={tarea._id} />
                ))}
              </ul>
            )}
          </div>
          <div className="listadotareas__column">
            <h3>Tareas Completas</h3>
            {tareasCompletas.length > 0 && (
              <ul className="list_container">
                {tareasCompletas.map((tarea: any) => (
                  <Task tarea={tarea} key={tarea._id} />
                ))}
              </ul>
            )}
          </div>
        </>
      )}
      <BackgroundUI
        bg_position={bg_position}
        onClick={() => {
          dispatch(setBgUi(false));
          dispatch(setEditMode(false));
          dispatch(setIsHighlighted(""));
        }}
      />
    </ListadoTareas>
  );
};

export default TaskList;
