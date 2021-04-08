import React, { useContext } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
//import './index.scss'
import styled from "@emotion/styled";

const EndProyectsContainer = styled.div`
  padding: 1rem 0.5rem;
`;
const List = styled.ul`
  min-height: 50vh;
`;

const Item = styled.li`
  background-color: #e93048;
  padding: 1rem;
  border-radius: 35px;
  color: white;
`;
const EndProyects = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {
    panelterminados,
    proyectosterminados,
    eliminarProyecto,
  } = proyectoContext;

  return (
    <EndProyectsContainer>
      <List>
        <Item>
          <p className="EndProyects_List_Item-Name">Proyecto de simulacion</p>
          <p className="EndProyects_List_Item-Task">Tareas en este proyecto</p>
          <span>Terminado el dia 01/01/21</span>
        </Item>
        {proyectosterminados.length === 0 ? (
          <Item>Todavia no terminaste ningun proyecto</Item>
        ) : null}
        {proyectosterminados.map((proyecto) => (
          <Item key={proyecto._id} className="proyecto_terminado">
            <p>{proyecto.nombre}</p>
            <button
              type="button"
              className="btn btn_eliminar"
              onClick={() => eliminarProyecto(proyecto._id)}
            >
              Eliminar
            </button>
          </Item>
        ))}
      </List>
    </EndProyectsContainer>
  );
};

export default EndProyects;
