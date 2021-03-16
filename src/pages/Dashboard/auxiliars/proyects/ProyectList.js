import React, { useContext, useEffect } from "react";
import Proyect from "./Proyect";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import './index.scss';
const ProyectList = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = proyectoContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <div>
       <button>X</button>
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
