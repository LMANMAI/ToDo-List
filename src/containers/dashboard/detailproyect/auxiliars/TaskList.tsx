import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../../../../context/task/taskContext";
import { ListadoTareas } from "./styles";

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  const { tareasproyecto } = taskContext;

  return (
    <ListadoTareas>
      {tareasproyecto.length === 0 ? (
        <p className="ntarea">No hay tareas comenza creando una!</p>
      ) : (
        <ul>
          {tareasproyecto.map((tarea: any) => (
            <Task tarea={tarea} key={tarea._id} />
          ))}
        </ul>
      )}
    </ListadoTareas>
  );
};

export default TaskList;
