import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../../../../context/task/taskContext";
import { ListadoTareas } from "./styles";

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  const { tareasproyecto } = taskContext;

  const tareasCompletas = tareasproyecto.filter(
    (tarea: any) => tarea.estado === "completa" || tarea.estado === true
  );
  const tareasPendientes = tareasproyecto.filter(
    (tarea: any) => tarea.estado === "pendiente" || tarea.estado === false
  );
  const tareasBorrador = tareasproyecto.filter(
    (tarea: any) => tarea.estado === "borrador"
  );
  console.log(tareasproyecto);
  return (
    <ListadoTareas>
      {tareasproyecto.length === 0 ? (
        <p className="ntarea">No hay tareas comenza creando una!</p>
      ) : (
        <>
          <div className="listadotareas__column">
            <h3>Tareas en Borrador</h3>
            {tareasBorrador.length > 0 && (
              <ul>
                {tareasBorrador.map((tarea: any) => (
                  <Task tarea={tarea} key={tarea._id} />
                ))}
              </ul>
            )}
          </div>

          <div className="listadotareas__column">
            <h3>Tareas Pendientes</h3>
            {tareasPendientes.length > 0 && (
              <ul>
                {tareasPendientes.map((tarea: any) => (
                  <Task tarea={tarea} key={tarea._id} />
                ))}
              </ul>
            )}
          </div>
          <div className="listadotareas__column">
            <h3>Tareas Completas</h3>
            {tareasCompletas.length > 0 && (
              <ul>
                {tareasCompletas.map((tarea: any) => (
                  <Task tarea={tarea} key={tarea._id} />
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </ListadoTareas>
  );
};

export default TaskList;
