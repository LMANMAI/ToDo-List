import React, { useContext } from "react";
import ProyectoContext from "../../../context/proyects/proyectoContext";
import { EndProyectsContainer, List, Item, EliminarButton } from "./styles";

const EndProyects = () => {
  const { proyectosterminados, eliminarProyecto } = useContext(ProyectoContext);

  return (
    <EndProyectsContainer>
      <List>
        {proyectosterminados.length === 0 ? (
          <Item>Todavia no terminaste ningun proyecto</Item>
        ) : null}
        {proyectosterminados.map((proyecto: any) => (
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
