import React, { useContext } from "react";
import NewProyect from "../proyects/NewProyect";
import ProyectList from "../proyects/ProyectList";
import EndProyects from "../proyects/EndProyects";
import AnimationContext from '../../../../context/animations/AnimationContext';
import "./index.scss";

function Container() {
    const animaContext = useContext(AnimationContext);
    const { panelnuevoproyecto } = animaContext;
  return (
    <div className="Container">
      {panelnuevoproyecto && <NewProyect/>}
      <ProyectList/>
      <EndProyects />
    </div>
  );
}

export default Container;
