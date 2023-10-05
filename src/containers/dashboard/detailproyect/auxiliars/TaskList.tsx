import React, { useContext, useState } from "react";
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

  const handleDragStart = (e: any, taskId: any) => {
    console.log("task", taskId);
    e.dataTransfer.setData("taskId", taskId);
  };

  const [borradorTasks, setBorradorTasks] = useState(
    tareasproyecto.filter((tarea: any) => tarea.estado === "borrador")
  );
  const [pendientesTasks, setPendientesTasks] = useState(
    tareasproyecto.filter((tarea: any) => tarea.estado === "pendiente")
  );
  const [completasTasks, setCompletasTasks] = useState(
    tareasproyecto.filter((tarea: any) => tarea.estado === "completa")
  );
  const handleDrop = (e: any, destino: any) => {
    console.log(e, "e");
    console.log("destino", destino);
    e.preventDefault();

    const taskId = e.dataTransfer.getData("taskId");
    const tareaArrastrada = tareasproyecto.find(
      (tarea: any) => tarea._id === taskId
    );

    if (tareaArrastrada) {
      // Actualizar el estado de las tareas en función del destino
      if (destino === "borrador") {
        setBorradorTasks([...borradorTasks, tareaArrastrada]);
        removeFromColumn(taskId, "pendientes");
        removeFromColumn(taskId, "completas");
      } else if (destino === "pendientes") {
        setPendientesTasks([...pendientesTasks, tareaArrastrada]);
        removeFromColumn(taskId, "borrador");
        removeFromColumn(taskId, "completas");
      } else if (destino === "completas") {
        setCompletasTasks([...completasTasks, tareaArrastrada]);
        removeFromColumn(taskId, "borrador");
        removeFromColumn(taskId, "pendientes");
      }
    }
  };

  const removeFromColumn = (taskId: any, column: any) => {
    if (column === "borrador") {
      setBorradorTasks(
        borradorTasks.filter((task: any) => task._id !== taskId)
      );
    } else if (column === "pendientes") {
      setPendientesTasks(
        pendientesTasks.filter((task: any) => task._id !== taskId)
      );
    } else if (column === "completas") {
      setCompletasTasks(
        completasTasks.filter((task: any) => task._id !== taskId)
      );
    }
  };
  return (
    <ListadoTareas>
      {tareasproyecto.length === 0 ? (
        <p className="ntarea">No hay tareas, comienza creando una!</p>
      ) : (
        <>
          <ColumnaTareas
            titulo="Tareas en Borrador"
            tareas={tareasBorrador}
            onDragStart={handleDragStart}
            onDragOver={(e: any) => e.preventDefault()}
            onDrop={(e: any) => handleDrop(e, "borrador")}
          />
          <ColumnaTareas
            titulo="Tareas Pendientes"
            tareas={tareasPendientes}
            onDragStart={handleDragStart}
            onDragOver={(e: any) => e.preventDefault()}
            onDrop={(e: any) => handleDrop(e, "pendiente")}
          />
          <ColumnaTareas
            titulo="Tareas Completas"
            tareas={tareasCompletas}
            onDragStart={handleDragStart}
            onDragOver={(e: any) => e.preventDefault()}
            onDrop={(e: any) => handleDrop(e, "completa")}
          />
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

const ColumnaTareas = ({
  titulo,
  tareas,
  onDragStart,
  onDragOver,
  onDrop,
}: any) => {
  console.log(tareas, "tarea");
  return (
    <div
      className="listadotareas__column"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h3>{titulo}</h3>
      {tareas.length > 0 ? (
        <ul className="list_container">
          {tareas.map((tarea: any) => (
            <Task
              tarea={tarea}
              key={tarea._id}
              onDragStart={(e: any) => onDragStart(e, tarea._id)}
            />
          ))}
        </ul>
      ) : (
        <p className="list__msg">
          Todavía no se cargaron tareas, comienza creando una
        </p>
      )}
    </div>
  );
};
export default TaskList;
