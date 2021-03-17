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
    <li className="Proyect">
      <button onClick={() => handleClick(proyecto)} className="Proyect_Btn">
        <p className="Proyect_Name">{proyecto.nombre}</p>
        <span className="Proyect_Task">Cantidad de tareas: 15</span>
        <span className="Proyect_Date">Creado el dia: 01/01/21</span>
      </button>
    </li>
  );
};

export default Proyect;
