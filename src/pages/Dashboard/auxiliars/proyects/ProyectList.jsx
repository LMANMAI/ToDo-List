import React, { useContext, useEffect } from "react";
import { VscChromeClose } from 'react-icons/vsc'
import Proyect from "./Proyect";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import "./index.scss";
import AnimationContext from "../../../../context/animations/AnimationContext";
const ProyectList = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = proyectoContext;

  const animationContext = useContext(AnimationContext);
  const { movePanelAuth } = animationContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <div className="ProyectList_Container">
      <button className="ProyectList_Close" onClick={()=> movePanelAuth()}><VscChromeClose/></button>
      {proyectos.length === 0 ? (
        <p className="object_list">Todavia no creaste ningun proyecto!</p>
      ) : (
        <ul>
          {proyectos.map((proyecto) => (
            <Proyect key={proyecto._id} proyecto={proyecto} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProyectList;
