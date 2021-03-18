import React, { useContext } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import './index.scss'
const EndProyects = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {
    panelterminados,
    proyectosterminados,
    eliminarProyecto,
  } = proyectoContext;

  return (
    <div className="EndProyects">
      <ul className="EndProyects_List">
        <li className="EndProyects_List_Item">
          <p className="EndProyects_List_Item-Name">Proyecto de simulacion</p>
          <p className="EndProyects_List_Item-Task">Tareas en este proyecto</p>
          <span>Terminado el dia 01/01/21</span>
        </li>
        {proyectosterminados.length === 0 ? (
          <li className="Default">Todavia no terminaste ningun proyecto</li>
        ) : null}
        {proyectosterminados.map((proyecto) => (
          <li key={proyecto._id} className="proyecto_terminado">
            <p>{proyecto.nombre}</p>
            <button
              type="button"
              className="btn btn_eliminar"
              onClick={() => eliminarProyecto(proyecto._id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EndProyects;
