//importar types
import {
  PANELAUTH,
  PANELNUEVO,
  PANELPROYECTOS,
  PANELTERMIANDOS
} from '../../types';
export default ( state, action ) => {
    switch (action.type) {
      case PANELAUTH:
          return{
           panel: !state.panel
          }
      case PANELNUEVO:
        return{
          panelnuevoproyecto: !state.panelnuevoproyecto,

        }
      case PANELPROYECTOS:
        return{

        }
      case PANELTERMIANDOS:
        return{

        }
        
        default:
            return state;
    }
}