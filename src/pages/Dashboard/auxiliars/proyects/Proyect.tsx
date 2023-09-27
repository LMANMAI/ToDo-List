import React, { useContext } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import TaskContext from "../../../../context/task/taskContext";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
const ProyectObject = styled.li`
  button,
  a {
    cursor: pointer;
    outline: none;
    background-color: #5595a5;
    width: 100%;
    border: none;
    height: 80px;
    margin: 5px 0;
    border-radius: 25px;
    color: white;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
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
const Proyect = (proyecto: any) => {
  const { proyectoActual } = useContext(ProyectoContext);
  const { obtenerTareas } = useContext(TaskContext);

  const handleClick = (proyecto: any) => {
    proyectoActual(proyecto.proyecto);
    obtenerTareas(proyecto.proyecto._id);
  };

  return (
    <ProyectObject>
      <NavLink
        to={`/proyects/${proyecto.proyecto._id}`}
        onClick={() => handleClick(proyecto)}
        className="Proyect_Btn"
      >
        <p className="Proyect_Name">{proyecto.nombre}</p>
        <span className="Proyect_Task">Cantidad de tareas: 15</span>
        <span className="Proyect_Date">Creado el dia: 01/01/21</span>
      </NavLink>
    </ProyectObject>
  );
};

export default Proyect;
