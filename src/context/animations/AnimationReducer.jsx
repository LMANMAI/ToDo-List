//importar types
import {PANELAUTH} from '../../types';
export default ( state, action ) => {
    switch (action.type) {
      case PANELAUTH:
          return{
           panel: !state.panel
          }
        default:
            return state;
    }
}