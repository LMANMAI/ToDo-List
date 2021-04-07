import React, { useReducer } from "react";
import AnimationReducer from "./AnimationReducer";
import AnimationContext from "./AnimationContext";
import {
    PANELAUTH,
    PANELNUEVO,
    PANELPROYECTOS,
    PANELTERMIANDOS,
    TODO_FALSE
  } from '../../types';

const AnimationState = props => {
  const initialState = {
      panel: false,
      panelnuevoproyecto: false,
      panelproyectos: false,
      panelterminados: false
  };
  const [state, dispatch] = useReducer(AnimationReducer, initialState);
  //funciones
  const movePanelAuth = () => {
      dispatch({
          type: PANELAUTH
      })
  }
  const movePanelNuevoProyecto = () =>{
    dispatch({
      type: PANELNUEVO
  })
  }
  const movePanelProyectos = () =>{
    dispatch({
      type: PANELPROYECTOS
  })
  }
  const movePanelProyectosTermiandos = () =>{
    dispatch({
      type: PANELTERMIANDOS
  })
  } 
  const allFalse = ()=>{
    dispatch({
        type: TODO_FALSE
    })
}
  return (
    <AnimationContext.Provider value={{
        panel: state.panel,
        panelnuevoproyecto: state.panelnuevoproyecto,
        panelproyectos: state.panelproyectos,
        panelterminados: state.panelterminados,
        movePanelAuth,
        movePanelNuevoProyecto,
        movePanelProyectos,
        movePanelProyectosTermiandos,
        allFalse
    }}>
      {props.children}
    </AnimationContext.Provider>
  );
};

export default AnimationState;
