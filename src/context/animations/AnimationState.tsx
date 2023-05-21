import React, { useReducer } from "react";
import AnimationReducer from "./AnimationReducer";
import AnimationContext from "./AnimationContext";
import {
  PANELAUTH,
  PANELNUEVO,
  PANELPROYECTOS,
  PANELTERMIANDOS,
  TODO_FALSE,
  PANEL_DASHBOARD,
} from "../../types";

const AnimationState = (props: any) => {
  const initialState = {
    panel: false,
    panelnuevoproyecto: false,
    panelproyectos: false,
    panelterminados: false,
    panelDashboard: false,
  };
  const [state, dispatch] = useReducer(AnimationReducer, initialState);
  //funciones
  const movePanelAuth = () => {
    dispatch({
      type: PANELAUTH,
    });
  };
  const movePanelNuevoProyecto = () => {
    dispatch({
      type: PANELNUEVO,
    });
  };
  const movePanelProyectos = () => {
    dispatch({
      type: PANELPROYECTOS,
    });
  };
  const movePanelProyectosTermiandos = () => {
    dispatch({
      type: PANELTERMIANDOS,
    });
  };
  const allFalse = () => {
    dispatch({
      type: TODO_FALSE,
    });
  };

  const setPanelDashboard = (value: boolean) => {
    dispatch({
      type: PANEL_DASHBOARD,
      payload: value,
    });
  };
  return (
    <AnimationContext.Provider
      value={{
        panel: state.panel,
        panelnuevoproyecto: state.panelnuevoproyecto,
        panelproyectos: state.panelproyectos,
        panelterminados: state.panelterminados,
        movePanelAuth,
        movePanelNuevoProyecto,
        movePanelProyectos,
        movePanelProyectosTermiandos,
        allFalse,
        setPanelDashboard,
      }}
    >
      {props.children}
    </AnimationContext.Provider>
  );
};

export default AnimationState;
