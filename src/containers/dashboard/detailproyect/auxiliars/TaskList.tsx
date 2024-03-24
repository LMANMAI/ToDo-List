import React, { useEffect, useState } from "react";
import Task from "./Task";
import { ListadoTareas, BackgroundUI } from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { Loading } from "../../../../components";
import {
  setBgUi,
  setIsHighlighted,
  setEditMode,
  setDeleteMode,
  setEditDescMode,
} from "../../../../redux/slices/ui";
import { EditTask, getTask } from "../../../../services";
import { setTareasProyecto } from "../../../../redux/slices/task";

const TaskList = () => {
  const [borradorTasks, setBorradorTasks] = useState<any>([]);
  const [pendientesTasks, setPendientesTasks] = useState<any>([]);
  const [completasTasks, setCompletasTasks] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const bg_position = useSelector((state: RootState) => state.ui.bg);
  const tareasproyecto = useSelector(
    (state: RootState) => state.task.tareasproyecto
  );

  const handleDragStart = (e: any, taskId: any) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDrop = (e: any, destino: any) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const tareaArrastrada = tareasproyecto.find(
      (tarea: any) => tarea._id === taskId
    );

    if (tareaArrastrada) {
      if (destino === "borrador") {
        setBorradorTasks([
          ...borradorTasks,
          { ...tareaArrastrada, estado: destino },
        ]);
        removeFromColumn(taskId, "pendiente");
        removeFromColumn(taskId, "completa");
      } else if (destino === "pendiente") {
        setPendientesTasks([
          ...pendientesTasks,
          { ...tareaArrastrada, estado: destino },
        ]);
        removeFromColumn(taskId, "borrador");
        removeFromColumn(taskId, "completa");
      } else if (destino === "completa") {
        setCompletasTasks([
          ...completasTasks,
          { ...tareaArrastrada, estado: destino },
        ]);
        removeFromColumn(taskId, "borrador");
        removeFromColumn(taskId, "pendiente");
      }

      changeTaskStatus(tareaArrastrada, destino);
    }
  };

  const changeTaskStatus = async (tarea: any, status: String) => {
    const updatedTask = { ...tarea };
    updatedTask.estado = status;
    removeFromColumn(updatedTask._id, status);
    await EditTask(updatedTask);

    const res = await getTask(id);
    if (res.status === 200) {
      dispatch(setTareasProyecto(res.data));
    }
  };

  const removeFromColumn = (taskId: any, column: any) => {
    if (column === "borrador") {
      setBorradorTasks(
        borradorTasks.filter((task: any) => task._id !== taskId)
      );
    } else if (column === "pendiente") {
      setPendientesTasks(
        pendientesTasks.filter((task: any) => task._id !== taskId)
      );
    } else if (column === "completa") {
      setCompletasTasks(
        completasTasks.filter((task: any) => task._id !== taskId)
      );
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const borrador = tareasproyecto.filter(
        (tarea: any) => tarea.estado === "borrador"
      );
      const pendientes = tareasproyecto.filter(
        (tarea: any) => tarea.estado === "pendiente"
      );
      const completas = tareasproyecto.filter(
        (tarea: any) => tarea.estado === "completa"
      );

      setBorradorTasks(borrador);
      setPendientesTasks(pendientes);
      setCompletasTasks(completas);
      setLoading(false);
    }, 1000);
  }, [tareasproyecto]);

  return (
    <>
      {loading ? (
        <Loading label="Trayendo tareas" />
      ) : tareasproyecto.length === 0 ? (
        <div>
          <p className="ntarea">No hay tareas, comienza creando una!</p>
        </div>
      ) : (
        <ListadoTareas>
          <ColumnaTareas
            titulo="Tareas en Borrador"
            tareas={borradorTasks}
            onDragStart={handleDragStart}
            onDragOver={(e: any) => e.preventDefault()}
            onDrop={(e: any) => handleDrop(e, "borrador")}
          />
          <ColumnaTareas
            titulo="Tareas Pendientes"
            tareas={pendientesTasks}
            onDragStart={handleDragStart}
            onDragOver={(e: any) => e.preventDefault()}
            onDrop={(e: any) => handleDrop(e, "pendiente")}
          />
          <ColumnaTareas
            titulo="Tareas Completas"
            tareas={completasTasks}
            onDragStart={handleDragStart}
            onDragOver={(e: any) => e.preventDefault()}
            onDrop={(e: any) => handleDrop(e, "completa")}
          />
        </ListadoTareas>
      )}

      <BackgroundUI
        bg_position={bg_position}
        onClick={() => {
          dispatch(setBgUi(false));
          dispatch(setEditMode(false));
          dispatch(setIsHighlighted(""));
          dispatch(setDeleteMode(false));
          dispatch(setEditDescMode(false));
        }}
      />
    </>
  );
};

const ColumnaTareas = ({
  titulo,
  tareas,
  onDragStart,
  onDragOver,
  onDrop,
}: any) => {
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
