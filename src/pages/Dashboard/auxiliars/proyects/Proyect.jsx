import React, { useContext } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import TaskContext from "../../../../context/task/taskContext";
import styled from "@emotion/styled";

const ProyectObject = styled.li`
  button {
    cursor: pointer;
    outline: none;
    background-color: #4b72a8;
    width: 100%;
    border: none;
    height: 80px;
    margin: 5px 0;
    border-radius: 25px;
    color: white;
  }
  @media (min-width: 768px) {
    display: flex;
    button {
      position: relative;
      width: 100%;
      height: 220px;
    }
  }
`;
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
    <ProyectObject>
      <button onClick={() => handleClick(proyecto)} className="Proyect_Btn">
        <p className="Proyect_Name">{proyecto.nombre}</p>
        <span className="Proyect_Task">Cantidad de tareas: 15</span>
        <span className="Proyect_Date">Creado el dia: 01/01/21</span>
      </button>
    </ProyectObject>
  );
};

export default Proyect;
