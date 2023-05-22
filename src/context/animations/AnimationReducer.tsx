//importar types
import {
  PANELAUTH,
  PANELNUEVO,
  PANELPROYECTOS,
  PANELTERMIANDOS,
  TODO_FALSE,
  PANEL_DASHBOARD,
} from "../../types";
export default (state: any, action: any) => {
  switch (action.type) {
    case PANELAUTH:
      return {
        panel: !state.panel,
        panelnuevoproyecto: false,
        panelproyectos: false,
        panelterminados: false,
      };
    case PANELNUEVO:
      return {
        panelnuevoproyecto: !state.panelnuevoproyecto,
        panelproyectos: false,
        panelterminados: false,
      };
    case PANELPROYECTOS:
      return {
        panelnuevoproyecto: false,
        panelproyectos: !state.panelproyectos,
        panelterminados: false,
      };
    case PANELTERMIANDOS:
      return {
        panelnuevoproyecto: false,
        panelproyectos: false,
        panelterminados: !state.panelterminados,
      };
    case TODO_FALSE:
      return {
        panel: false,
        panelnuevoproyecto: false,
        panelproyectos: false,
        panelterminados: false,
      };
    case PANEL_DASHBOARD:
      return {
        panelDashboard: action.payload,
      };
    default:
      return state;
  }
};
