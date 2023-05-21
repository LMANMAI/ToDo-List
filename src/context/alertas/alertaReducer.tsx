//importo los types
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";

export default (state: any, action: any) => {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return {
        alerta: action.payload,
      };
    case OCULTAR_ALERTA:
      return {
        alerta: null,
      };
    default:
      return state;
  }
};
