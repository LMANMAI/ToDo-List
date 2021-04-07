//importar types
import {
  PANELAUTH,
  PANELNUEVO,
  PANELPROYECTOS,
  PANELTERMIANDOS,  
  TODO_FALSE
} from '../../types';
export default ( state, action ) => {
    switch (action.type) {
      case PANELAUTH:
          return{
           panel: !state.panel,
           panelnuevoproyecto: false,
           panelproyectos: false,
           panelterminados: false
          }
      case PANELNUEVO:
        return{
          panelnuevoproyecto: !state.panelnuevoproyecto,
          panelproyectos: false,
          panelterminados: false
        }
      case PANELPROYECTOS:
        return{
          panelnuevoproyecto: false,
          panelproyectos: !state.panelproyectos,
          panelterminados: false

        }
      case PANELTERMIANDOS:
        return{
          panelnuevoproyecto:false,
          panelproyectos: false,
          panelterminados: !state.panelterminados
        }        
        case TODO_FALSE:
          return{
            panel: false,
            panelnuevoproyecto: false,
            panelproyectos: false,
            panelterminados: false
          }
        default:
            return state;
    }
}