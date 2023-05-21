import React, { useReducer } from "react";

//importo el reducer y el context
import AlertaReducer from "./alertaReducer";
import AlertaContext from "./alertaContext";
//importo los types
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";

const AlertaState = (props: any) => {
  const initialState = {
    //states inicial
    alerta: null,
  };
  //uso el reducer
  const [state, dispatch] = useReducer(AlertaReducer, initialState);

  const mostrarAlerta = (msg: any, categoria: any) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: { msg, categoria },
    });
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 4000);
  };
  return (
    <AlertaContext.Provider
      value={{
        //paso las funciones y los states
        alerta: state.alerta,
        mostrarAlerta,
      }}
    >
      {props.children}
    </AlertaContext.Provider>
  );
};

export default AlertaState;
