import React, { useReducer } from "react";
//importo el context y el reducer
import ProyectoContext from "./proyectoContext";
import ProyectoReducer from "./proyectoReducer";
//importo mis types
import {
  MOSTRAR_FORMULARIO,
  MOSTRAR_PROYECTOS,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTIVO,
  ELIMINAR_PROYECTO,
  MOSTRAR_TERMINADOS,
  TERMINAR_PROYECTO,
  PROYECTO_ERROR,
  PROYECTO_NULL,
} from "../../types";
import clienteAxios from "../../config/axios";

const ProyectoState = (props: any) => {
  const InitialState = {
    panel: false,
    panelproyecto: false,
    proyectos: [],
    errorformulario: false,
    proyectoactivo: null,
    panelterminados: false,
    proyectosterminados: [],
    mensaje: null,
    badge: false,
    badgeT: false,
  };

  const [state, dispatch] = useReducer(ProyectoReducer, InitialState);
  //mis funciones
  const showPanel = () => {
    dispatch({
      type: MOSTRAR_FORMULARIO,
    });
  };
  //mostarar el componente de proyectos
  const mostrarPanel = () => {
    dispatch({
      type: MOSTRAR_PROYECTOS,
    });
  };
  const mostrarTerminados = () => {
    dispatch({
      type: MOSTRAR_TERMINADOS,
    });
  };
  //obtener los proyectos
  const obtenerProyectos = async () => {
    try {
      const requestP = await clienteAxios.get("/proyect");

      dispatch({
        type: OBTENER_PROYECTOS,
        payload: requestP.data,
      });
    } catch (error: any) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
  };
  //Agrega Proyectos
  // const agregarProyecto = async (proyect: any) => {
  //   console.log(proyect);
  //   try {
  //     const requestP = await clienteAxios.post("/proyect", proyect);
  //     console.log(requestP);
  //     // dispatch({
  //     //   type: AGREGAR_PROYECTO,
  //     //   payload: requestP.data.proyect,
  //     // });
  //   } catch (error: any) {
  //     console.log(error);
  //     // const alerta = {
  //     //   msg: error.response.data.msg,
  //     //   categoria: "alerta-error",
  //     // };
  //     // dispatch({
  //     //   type: PROYECTO_ERROR,
  //     //   payload: alerta,
  //     // });
  //   }
  // };
  //Valido el formulario
  const validarFormulario = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };
  //Seleccionar y poner un proyecto como activo
  const proyectoActual = (proyecto: any) => {
    dispatch({
      type: PROYECTO_ACTIVO,
      payload: proyecto,
    });
  };
  //Eliminar las tareas
  const eliminarProyecto = async (proyectoID: any) => {
    console.log(proyectoID);
    try {
      await clienteAxios.delete(`/proyect/${proyectoID}`);
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoID,
      });
    } catch (error: any) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error dash",
      };
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
  };
  const terminarProyecto = async (proyecto: any) => {
    console.log(proyecto);
    try {
      const consulta = await clienteAxios.put(
        `/proyect/${proyecto._id}`,
        proyecto
      );
      console.log(consulta);
      dispatch({
        type: TERMINAR_PROYECTO,
        payload: proyecto,
      });
    } catch (error) {}
  };

  const proyectoNull = () => {
    dispatch({
      type: PROYECTO_NULL,
    });
  };

  return (
    <ProyectoContext.Provider
      value={{
        //valores del state o las funciones a compartir con el arbol de componentes
        panel: state.panel,
        panelproyecto: state.panelproyecto,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        proyectoactivo: state.proyectoactivo,
        panelterminados: state.panelterminados,
        proyectosterminados: state.proyectosterminados,
        mensaje: state.mensaje,
        badge: state.badge,
        badgeT: state.badgeT,
        mostrarPanel,
        obtenerProyectos,
        showPanel,
        validarFormulario,
        proyectoActual,
        eliminarProyecto,
        mostrarTerminados,
        terminarProyecto,
        proyectoNull,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
