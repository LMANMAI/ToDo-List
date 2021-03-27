import React, { useContext, useEffect } from "react";
import NewProyect from "../proyects/NewProyect";
import ProyectList from "../proyects/ProyectList";
import EndProyects from "../proyects/EndProyects";
import AnimationContext from "../../../../context/animations/AnimationContext";
import "./index.scss";

function Container() {
  const animaContext = useContext(AnimationContext);
  const { panelnuevoproyecto, panelproyectos, panelterminados } = animaContext;
  return (
    <div className="Container">
      <div  className="Container_Box">
        {/* {panelnuevoproyecto && <NewProyect />} */}
        {panelproyectos && <ProyectList />}
        {panelterminados && <EndProyects />}
      
      </div>
        
    </div>
  );
}

export default Container;
