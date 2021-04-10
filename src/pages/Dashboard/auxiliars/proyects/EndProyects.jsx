import React, { useContext } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
//import './index.scss'
import styled from "@emotion/styled";

const EndProyectsContainer = styled.div`
  padding: 1rem 0.5rem;
  //border: 1px solid red;
  height: 100%;
  //background-color: red;
  z-index: 1;
`;
const List = styled.ul`
  min-height: 50vh;
  //border: 1px solid blue;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
`;

const Item = styled.li`
  background-color: #97cdac;
  padding: 1rem;
  border-radius: 25px;
  color: white;
  height: 150px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    height: 150px;
  }
  &:hover {
    transform: scale(1.015);
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;
const EliminarButton = styled.button`
  background-color: #f2f2f2;
  border: none;
  outline: none;
  padding: 5px;
  margin: 5px 0;
  border-radius: 25px;
`;
const EndProyects = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectosterminados, eliminarProyecto } = proyectoContext;

  return (
    <EndProyectsContainer>
      <List>  
        {proyectosterminados.length === 0 ? (
          <Item>Todavia no terminaste ningun proyecto</Item>
        ) : null}
        {proyectosterminados.map((proyecto) => (
          <Item key={proyecto._id} className="proyecto_terminado">
            <p>{proyecto.nombre}</p>
            <EliminarButton
              type="button"
              className="btn btn_eliminar"
              onClick={() => eliminarProyecto(proyecto._id)}
            >
              Borrar
            </EliminarButton>
          </Item>
        ))}
      </List>
    </EndProyectsContainer>
  );
};

export default EndProyects;
