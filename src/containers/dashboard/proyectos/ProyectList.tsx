import React, { useContext, useEffect, useState } from "react";
import { ProyectListContainer, LisContainer, ProyectObject } from "./styles";
import { NavLink } from "react-router-dom";
import TaskContext from "../../../context/task/taskContext";
import { getProyects } from "../../../services";
import { useDispatch } from "react-redux";
import { proyectoActual } from "../../../redux/slices/proyects";
const Proyect = (proyecto: any) => {
  const { obtenerTareas } = useContext(TaskContext);
  const dispatch = useDispatch();
  const handleClick = (proyecto: any) => {
    dispatch(proyectoActual(proyecto));
    obtenerTareas(proyecto._id);
  };

  return (
    <ProyectObject>
      <NavLink
        to={`/proyects/${proyecto.proyecto._id}`}
        onClick={() => {
          handleClick(proyecto.proyecto);
        }}
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
  const [proyects, setProyects] = useState([]);
  //obtener proyectos cuando carga el componente

  const handleGetProyects = async () => {
    const request = await getProyects();
    if (request.status === 200) {
      setProyects(request.data);
    } else setProyects([]);
  };
  useEffect(() => {
    handleGetProyects();
  }, []);

  return (
    <ProyectListContainer>
      {proyects.length === 0 ? (
        <p className="object_list">Todavia no creaste ningun proyecto!</p>
      ) : (
        <LisContainer>
          {proyects.map((proyecto: any) => (
            <Proyect key={proyecto._id} proyecto={proyecto} />
          ))}
        </LisContainer>
      )}
    </ProyectListContainer>
  );
};

export default ProyectList;
