import React, { useReducer } from "react";
import AnimationReducer from "./AnimationReducer";
import AnimationContext from "./AnimationContext";
import {PANELAUTH} from '../../types';

const AnimationState = props => {
  const initialState = {
      panel: false,
  };
  const [state, dispatch] = useReducer(AnimationReducer, initialState);
  //funciones
  const movePanelAuth = () => {
      dispatch({
          type: PANELAUTH
      })
  }
  return (
    <AnimationContext.Provider value={{
        panel: state.panel,
        movePanelAuth
    }}>
      {props.children}
    </AnimationContext.Provider>
  );
};

export default AnimationState;
