import React, { useContext, useEffect } from "react";
import NewProyect from "../proyects/NewProyect";
import ProyectList from "../proyects/ProyectList";
import EndProyects from "../proyects/EndProyects";
import TaskBody from "../task/TaskBody";
import AnimationContext from "../../../../context/animations/AnimationContext";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import "./index.scss";

function Container() {
  const animaContext = useContext(AnimationContext);
  const { panelnuevoproyecto, panelproyectos, panelterminados, allFalse } = animaContext;

  const proyectoContext = useContext(ProyectoContext);
  const { proyectoactivo, proyectoActual } = proyectoContext;
  useEffect(() => {
    console.log("hay otro proyecto activo");
    if (proyectoactivo) {
      allFalse()    
    }    
    // else if(panelnuevoproyecto || panelproyectos ||  panelterminados){
    //   proyectoActual(null);
    //   console.log('consola')
    // }

  }, [proyectoactivo, panelnuevoproyecto ,panelproyectos, panelterminados]);
  console.log(proyectoactivo);
  return (
    <div className="Container">
      <div className="Container_Box">
        {panelnuevoproyecto && <NewProyect />}
        {panelproyectos && <ProyectList />}
        {panelterminados && <EndProyects />}
        {proyectoactivo ? <TaskBody /> : null}
      </div>
    </div>
  );
}

export default Container;
