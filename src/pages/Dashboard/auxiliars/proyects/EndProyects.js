import React, { useContext } from "react";
import ProyectoContext from "../../../../context/proyects/proyectoContext";
import TaskContext from "../../../../context/task/taskContext";
import { motion } from "framer-motion";

const EndProyects = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {
    panelterminados,
    proyectosterminados,
    eliminarProyecto,
  } = proyectoContext;
  const taskContext = useContext(TaskContext);
  const { counttask } = taskContext;

  return (
    <div
      className={
        panelterminados ? "dashboard_panel active width" : "dashboard_panel"
      }
    >
      <ul className="lista_terminados">
        {proyectosterminados.length === 0 ? (
          <li>Todavia no terminaste ningun proyecto</li>
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
        ))}{" "}
      </ul>
    </div>
  );
};

export default EndProyects;
