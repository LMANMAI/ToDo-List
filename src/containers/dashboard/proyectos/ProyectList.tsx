import React, { useContext, useEffect } from "react";
import { ProyectListContainer, LisContainer, ProyectObject } from "./styles";
import { NavLink } from "react-router-dom";
import ProyectoContext from "../../../context/proyects/proyectoContext";
import TaskContext from "../../../context/task/taskContext";

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
        className="proyect__item"
      >
        <p className="proyect__name">{proyecto.proyecto.nombre}</p>
        <span className="proyect__task">Cantidad de tareas: 15</span>
        <span className="proyect__date">
          Creado el dia:{" "}
          {new Date(proyecto.proyecto.creado).toLocaleDateString()}
        </span>
      </NavLink>
    </ProyectObject>
  );
};

const ProyectList = () => {
  const { proyectos, obtenerProyectos } = useContext(ProyectoContext);

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <ProyectListContainer>
      {proyectos.length === 0 ? (
        <p className="object_list">Todavia no creaste ningun proyecto!</p>
      ) : (
        <LisContainer>
          {proyectos.map((proyecto: any) => (
            <Proyect key={proyecto._id} proyecto={proyecto} />
          ))}
        </LisContainer>
      )}
    </ProyectListContainer>
  );
};

export default ProyectList;
