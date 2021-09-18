import React, { useReducer } from "react";
//import el context y el reducer
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
//import los types
import {
  TASK_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  DELETE_TASK,
  TASK_STATE,
  TASK_ACTUAL,
  ACTUALIZAR_TASK,
} from "../../types";
import clienteAxios from "../../config/axios";

const TaskState = (props) => {
  //state inicial
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaactual: null,
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);
  //Funciones
  //obtener las tareas relacionadas con el id del proyecto
  const obtenerTareas = async (proyecto) => {
    try {
      const peticion = await clienteAxios.get("/api/task", {
        params: { proyecto },
      });

      dispatch({
        type: TASK_PROYECTO,
        payload: peticion.data,
      });
    } catch (error) {}
  };
  //Agregar nueva tarea
  const agregarTarea = async (tarea) => {
    try {
      const consulta = await clienteAxios.post("/api/task", tarea);

      dispatch({
        type: AGREGAR_TAREA,
        payload: tarea,
      });
    } catch (error) {}
  };
  //validar la tarea
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };
  //eliminar tarea
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/task/${id}`, { params: { proyecto } });
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {}
  };
  //editar la tarea
  const actualizarTask = async (tarea) => {
    try {
      const requestcambio = await clienteAxios.put(
        `/api/task/${tarea._id}`,
        tarea
      );

      dispatch({
        type: ACTUALIZAR_TASK,
        payload: requestcambio.data.tarea,
      });
    } catch (error) {}
  };
  const tareaActual = (tarea) => {
    dispatch({
      type: TASK_ACTUAL,
      payload: tarea,
    });
  };
  return (
    <TaskContext.Provider
      value={{
        //valores del state
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaactual: state.tareaactual,
        counttask: state.counttask,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        tareaActual,
        actualizarTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskState;
