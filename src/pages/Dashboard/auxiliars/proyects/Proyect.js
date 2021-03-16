import React, { useContext } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import TaskContext from "../../../../context/task/taskContext";

const Proyect = ({ proyecto }) => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectoContext;

  const taskContext = useContext(TaskContext);
  const { obtenerTareas } = taskContext;

  const handleClick = (proyecto) => {
    proyectoActual(proyecto);
    obtenerTareas(proyecto._id);
  };

  return (
    <li className="object_list">
      <button onClick={() => handleClick(proyecto)} className="btn btn_proyect">
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyect;
